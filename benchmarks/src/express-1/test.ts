import autocannon from 'autocannon';
import { request as httpsRequest } from 'https';

// async/await
async function main () {
  const result = await autocannon({
    url: 'http://localhost:4000/graphql',
    connections: 60, //default
    pipelining: 1, // default
    duration: 2, // default
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: 'query Test { field }',
    }),
    // setupClient,
  });
  console.log(result);
  transmitToSeries('test-a', 0.5);
  transmitToSeries('non-two-hundred', result.non2xx);
  transmitToSeries('requests-average', result.requests.average);
  transmitToSeries('requests-p-fifty', result.requests.p50);
  transmitToSeries('requests-p-ninety', result.requests.p90);
  transmitToSeries('requests-p-ninety-nine', result.requests.p99);
}

main();

/** For debug, uncomment the setupClient above.
 * Only exported to avoid the ts warning.
 */
export function setupClient(client: autocannon.Client) {
  client.on('body', (c) => {
    console.log(c.toString());
  });
}

const {
  CIRCLE_PROJECT_USERNAME,
  CIRCLE_PROJECT_REPONAME,
  CIRCLE_SHA1,
  SERIESCI_TOKEN,
} = process.env;

function transmitToSeries(name: string, value: number) {
  if (
    !CIRCLE_PROJECT_REPONAME ||
    !CIRCLE_PROJECT_USERNAME ||
    !SERIESCI_TOKEN ||
    !CIRCLE_SHA1
  ) {
    console.info(`Missing env vars required to transmit ${name} to SeriesCI.`);
    return;
  }

  const options = {
    hostname: 'seriesci.com',
    path: `/api/repos/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/${name}/values`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${SERIESCI_TOKEN}`
    }
  }

  const req = httpsRequest(options, res => {
    res.setEncoding('utf8');
    res.on('data', chunk => {
      console.log(chunk);
    });
  });

  req.on('error', err => {
    console.log(err);
  });

  const data = JSON.stringify({
    value,
    sha: CIRCLE_SHA1,
  });

  req.write(data);
  req.end();
}

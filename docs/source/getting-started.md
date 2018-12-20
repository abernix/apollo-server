---

title: Getting started

---
> Estimated time: About 10 minutes.

In this guide, we'll walk you through the process of creating a GraphQL server in JavaScript.  By the end of the guide you should expect to:

* Have a basic GraphQL server which will work as a foundation for a more complex server.
* Have a basic understanding of the fundamental GraphQL principles.
* Be able to send a query to the new GraphQL server and see the response using the GraphiQL user interface.

If you want to skip walking through the steps, the "More information" section at the bottom has a link to a GitHub repository which can be cloned and ran locally.

## Prerequisites

* Familiarity with JavaScript. ([Getting started with JavaScript]())
* Terminal/console access on your computer. ([Popular terminals]())
* Node.js (`node`) and its package manager (`npm`) installed. ([Node.js]())
* An editor or interactive developer environment (IDE) to create and modify files. ([Popular IDEs]())
* The desire to build a GraphQL server. ([Why GraphQL?]())

If you don't meet any of the prerequisites above, we recommend following the links we've provided  aside each item and returning to this guide once you're ready.

## Step 1: Project initialization

In this step, we'll use your terminal (e.g. Terminal, iTerm, PowerShell) to create a directory called `graphql-server-example` along with a basic Node.js configuration for a simple application.  We'll work within this directory for the rest of the steps, though we will switch back and forth between your IDE (editor)

* First, create a folder called `graphql-server-example` using the `mkdir` command.

      mkdir graphql-server-example

* Enter the directory, so the remaining work will take place within that directory.

      cd graphql-server-example

* Initialize the new directory as a Node.js project using the Node.js package manager, `npm`.

      npm init --yes

  >  We use `npm`, the default package manager which ships with Node.js.  Other package managers, such as [Yarn](//yarnpkg.com), offer similar functionality, but will not be covered in this guide.

If the above steps all completed successfully, there should be a new `package.json` file in the directory.  You can verify this by running `ls` (list files).

## Step 2: Install dependencies

Next, we'll install the two core dependencies which are necessary for responding to GraphQL requests:

* [`apollo-server`](//npm.im/apollo-server): The Apollo server library which allows you to focus on defining the shape of your data and how to fetch it.
* [`graphql`](//npm.im/graphql): The library used to build a schema and to execute queries on that schema.
  > Note: There won't be any usage of the `graphql` package in this guide, but it is required to be installed separately as it's an important "peer dependency" of Apollo Server.

While you could write all of the necessary code yourself, these two dependencies make it easier to build a GraphQL server and are common in applications of all sizes.

Run the following command to install both of these dependencies and save them in e project:

    npm install --save apollo-server graphql

In the next step, we'll use these dependencies to create a server which processes and responds to incomi ah eues.

## Step 3: Create the server

In this step, we'll provide a code block hi te  te ollo-seer` to resond o an incoming GraphQLoin rh request.  In order to move along quickly, we'll have you copy and paste the code into an `index.js` file in your project.  When looking at the code, we hope you'll find the comments helpful in understanding the core GraphQL concepts.  Don't worry if there is something which needs more explanation; we'll point you to the right places for more details at the end of this guide.

The example code will utilize a static collection of two books.  In a more complicated example, the books might be fetched from a web resource (e.g. Amazon or a local library's website) or a database (e.g. MySQL or MongoDB).

* Using the IDE/editor you've chosen (e.g. Visual Studio Code), open the `graphql-server-example` directory which we created in the first step.
  > In most editors, you can open a directory by selecting the "File" menu and then "Open".
* Create a new, blank file called `index.js` in the root of the project directory.
* "Copy" the following code block, "Paste" it into the `index.js` file you created in the previous step, then "Save" the file:

```js
 const { ApolloServer } = require('apollo-server');

    // This is a (sample) collection of books we'lldocuments (books) which we'll
    // be able to query
  // the new GraphQL server for.   A more complete example might fetch
  // from an existing data source like aicated
    // example would likely fetch this information from another data
    // source like an existing API (e.g. REST API) or database.
   (e.g. MySQL).
const books = [
  {
     title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
 	  {
  	    title: 'Jurassic Park',
    author: 'Michael Crichton',
  	  },
  	];

    // Type definitions define the "shape" of your data
    // and specify
  //ies in which ways the data can be fetched
    // from theyour GraphQL server.
  	const typeDefs = `
    # Comments in GraphQL are defined with the hash (#) symbol.

  	  # This "Book" type can be usedwill  in other type declarations.
  	  type Book {
  	    title: String author: String
  	  }

	  
	  # The "Query" type is the root of all GraphQL queries.
  	  # (A "Mutation" type will be covered later on.)
 
	   type Query {
  	    books: [Book]
  	  }
  	`;

    // Resolvers define the techniquemethods for fetching the data
    // for the types in the
  //your schema.  We'll retrieve books from the "books" array above.
  In this example, we're
    // telling Apollo that a query for the type "books from the "books" array above.
  " can
    // be retrieved from the "books" constant we've defined
    // above, but would can be any source you'd like!
	const resolvers = {
  Query: {
  	    books: () => books,
  	  },
  	};

    // In the most basic sense, the ApolloServer can be started
    // by passing type definitions (typeDefs) and the resolvers
    // responsible for fetching the data for those types.
  	const server = new ApolloServer({ typeDefs, resolvers });

  	// This `listen` method launches a web-server.  E ready to serve
	// GraphQL requests, though anyone wishing to incorporate
	// ApolloServer into an existing apps
  //lication can utilize one
	// of the many middleware options, which we'll discuss later.
  server.listen(({ url }) => {
  console.log(`Visit ${url}/graphiql to run queries!`);
});
 ```

The code above includes everything that is necessary to get this basic GraphQL server running.  In the next step, we'll start the server so it's ready to respond to requests!

## Step 4:rtthe ser
For this step, we'll return to the terminal/console and start the server we defined in the previous steps.

* Run the `index.js` file we created in the previous step using Node.js

      node index.js

* You should see the following output from the above command:

      Visit http://localhost:3000/graphiql to run queries!
* Open the address provided in your web browser.
* If everything is working, you should see the GraphiQL explorer tool, which we will use in the next step.

> TODO: Image here.

In the next step, we'll use the GraphiQL tool to send queries to the GraphQL server.

## Step 5: Running your first query

At this point, you'll be able to start sending queries to the GraphQL server using the GraphiQL explorer, which is split into a few parts:

* The request (on the left)
* The response (on the right)
* The documentation (available using the "Docs" link in the top-right corner.

Since we're trying to obtain books...

> WIP / TODO ^

## Next steps

This application should be a great starting point for any GraphQL server, but the following resources are a great next step in building a GraphQL server:

* [Adding Apollo Server to an existing app]()
* [Schema design]()
* [Deployment]()  e oin i esitoTh
e e ro t bo exps can be aes in or etting sare a rery](.) on GitHub, which also includes instructions on how to get started in its [readme](.)..

## Next steps

We recommend familiarizing yourself wit next step ibling GraphiQL

 ing Apollo Server t existing appcain


 reinratin t er

h dadinggraplin Ghh ainueitrunn or is r
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTY4NTY0MjU1NCw2Njg5NTU1MTcsMTczNz
c5MjQwNywxNDEwMTAwOTU2LC0yNTQ0OTU2MDAsLTQwMTQ5ODQ4
MiwtNjUxNjk0NTksLTY5MzUxOTY3NCwtMTY4NjQ1MzE3MSwtMz
A2MTg5MDM0LDEwNDQ4ODMzNDEsMzY0NzkxNjc0LC03MDQ5NDU4
NDgsLTEyMjc5MDMyMTksMTU0NzkxNjcyMCwxNTAwOTE0MzY5LD
E4ODc0NjIyMjIsLTg4NzcxOTE1OSwxMTY5MDQ0NTUxLDE2MTkw
Mjc0NDJdfQ==
-->
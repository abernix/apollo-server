---


---

<hr>
<p>title: ApolloServer<br>
description: All of the things you need with no config needed!</p>
<hr>
<p>Apollo Server provides an easy way for a brand new application to get up and running quickly by providing an integrated web-server with minimal configuration.</p>
<blockquote>
<p>Running a dedicated GraphQL server is a great choice for many deployments, however, if you’re looking to add Apollo Server functionality to an <strong>existing webserver</strong>, follow the <a href="./middleware.html">Middleware</a> installation instructions instead.</p>
</blockquote>
<h3 id="prerequisites">Prerequisites</h3>
<ul>
<li>You’ve designed for your server. (<a href="">Type definitions</a>)</li>
<li>You have for your type definitions. (<a href="">Resolvers</a>)</li>
</ul>
<p>If you don’t meet or don’t understand all of these prerequisites, we recommend you start at the <a href="">Getting Started</a> page for a more complete example.  Alternatively, visit the links to the right of the prerequisites above to find out more information.</p>
<h3 id="installation">Installation</h3>
<p>There are two packages which must be installed for Apollo Server to function:</p>
<ul>
<li><a href="//npm.im/apollo-server"><code>apollo-server</code></a>: The actual Apollo Server package.</li>
<li><a href="//npm.im/graphql"><code>graphql</code></a>: The supporting GraphQL JavaScript library which is a peer dependency of <code>apollo-server</code> and shared amongst the various GraphQL-related components in your project.  We won’t use this package directly, but a single copy of it must be installed in the application.</li>
</ul>
<p>To install, run:</p>
<pre><code>npm install --save apollo-server graphql
</code></pre>
<h3 id="importing">Importing</h3>
<p>Start by importing the <code>ApolloServer</code> class:</p>
<pre class=" language-js"><code class="prism  language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> ApolloServer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'apollo-server'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h3 id="import-your-type-definitions">Import your type definitions</h3>
<p>We recommend keeping your type definitions in a separate file.  In this example, we’ll import them from a file called <code>schema</code> which lives alongside the server.</p>
<pre class=" language-js"><code class="prism  language-js"><span class="token comment">// Make sure you've created this file and defined type</span>
<span class="token comment">// defintions along with their resolvers!</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> typeDefs<span class="token punctuation">,</span> resolvers <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./schema'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h3 id="instantiating">Instantiating</h3>
<p>Now, using the <code>ApolloServer</code> class, pass in the type definitions (<code>typeDefs</code>) and resolvers (<code>resolvers</code>), which were imported in the previous section, to the <code>ApolloServer</code> constructor:</p>
<pre class=" language-js"><code class="prism  language-js"><span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  typeDefs<span class="token punctuation">,</span>
  resolvers<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<blockquote>
<p>See the <a href="">API Reference</a> for additional options which can be passed to the <code>ApolloServer</code> constructor.</p>
</blockquote>
<h3 id="listening-for-requests">Listening for requests</h3>
<p>Finally, when you’re ready to start accepting connections, call the <code>listen</code> method on the instance of <code>ApolloServer</code> which was created in the previous step:</p>
<pre class=" language-js"><code class="prism  language-js">server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">{</span> port<span class="token punctuation">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<blockquote>
<p>If the <code>port</code> is omitted, port 3000 will be used.  The <a href="">API reference</a> explains additional functionality of the <code>listen</code> method.</p>
</blockquote>


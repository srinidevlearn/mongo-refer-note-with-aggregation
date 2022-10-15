<template><div><p>MongoDb setup</p>
<blockquote>
<ul>
<li>For learning purpose either we can manually install mongo db in local and separately install mongosh(mongoose shell from below mentioned link).</li>
<li>For atlas use <a href="https://www.mongodb.com/try2" target="_blank" rel="noopener noreferrer">MongoDb Atlas<ExternalLinkIcon/></a>.</li>
<li>For local installation download from  use <a href="https://www.mongodb.com/try/download/community2" target="_blank" rel="noopener noreferrer">MongoDb Community Server<ExternalLinkIcon/></a>.</li>
<li>For Atlas Cli/Mongo Shell use <a href="https://www.mongodb.com/try/download/shell2" target="_blank" rel="noopener noreferrer">Mongo Tools - shell<ExternalLinkIcon/></a>,<a href="https://www.mongodb.com/try/download/atlascli2" target="_blank" rel="noopener noreferrer">Mongo Tools -cli<ExternalLinkIcon/></a>
Refer <a href="https://www.mongodb.com/docs/manual/reference/connection-string/#connection-string-options" target="_blank" rel="noopener noreferrer">Connection String URI Format — MongoDB Manual<ExternalLinkIcon/></a>, by this way we can establish connection to mongo db.</li>
</ul>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mongodb+srv://<span class="token operator">&lt;</span>username<span class="token operator">></span>:<span class="token operator">&lt;</span>password<span class="token operator">></span>@<span class="token operator">&lt;</span>atlas_domain_name<span class="token operator">></span>/<span class="token operator">&lt;</span>dbname<span class="token operator">></span>?retryWrites<span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">w</span><span class="token operator">=</span>majority

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>after successful connection you can see</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
Current Mongosh Log ID: 63464442c04f4b5eb58c17d0
Connecting to:          mongodb+srv://<span class="token operator">&lt;</span>credentials<span class="token operator">></span>@<span class="token operator">&lt;</span>atlas_domain_name<span class="token operator">></span>/<span class="token operator">&lt;</span>db<span class="token operator">></span>?retryWrites<span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">appName</span><span class="token operator">=</span>mongosh+1.5.1
Using MongoDB:          <span class="token number">5.0</span>.13
Using Mongosh:          <span class="token number">1.5</span>.1

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

Atlas atlas-uulano-shard-0 <span class="token punctuation">[</span>primary<span class="token punctuation">]</span> node-learn<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



<template><div><h2 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h2>
<ul>
<li>to query all data from collection</li>
<li>to fetch single document from collection use <strong>findOne()</strong></li>
</ul>
<p><img src="@source/aggregation/img/mongofindonlyquery.drawio.svg" alt="An image">;</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.test5.find<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="projection" tabindex="-1"><a class="header-anchor" href="#projection" aria-hidden="true">#</a> projection</h2>
<p><img src="@source/aggregation/img/mongoquerywithprojection.drawio.svg" alt="An image"></p>
<h2 id="cursor" tabindex="-1"><a class="header-anchor" href="#cursor" aria-hidden="true">#</a> cursor</h2>
<p>-The Cursor is a MongoDB Collection of the document which is returned upon the find method execution.</p>
<ul>
<li>By default, it is automatically executed as a loop. However, we can explicitly get specific index document from being returned cursor. It is just like a pointer which is pointing upon a specific index value.</li>
</ul>
<p>-In simple words when we call a find method, all the documents which are returned are saved in a virtual cursor. If a find method returns for a document then it is mean that the cursor has 0 – n index.</p>
<h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h2>
<p><img src="@source/aggregation/img/mongoquerywithoutprojection.drawio.svg" alt="An image"></p>
<h2 id="limit-skip" tabindex="-1"><a class="header-anchor" href="#limit-skip" aria-hidden="true">#</a> limit &amp; skip</h2>
<p><img src="@source/aggregation/img/mongoquerywithprojection_skip_limit.drawio.svg" alt="An image"></p>
<h2 id="some-mongo-query-operator" tabindex="-1"><a class="header-anchor" href="#some-mongo-query-operator" aria-hidden="true">#</a> some mongo query operator</h2>
<ul>
<li>$and</li>
<li>$or</li>
<li>$gt</li>
<li>$gte</li>
<li>$lte</li>
<li>$lt</li>
<li>$ne</li>
<li>$nin</li>
<li>$not</li>
<li>$inc</li>
<li>$all</li>
<li>$elemMatch</li>
<li>$size</li>
</ul>
</div></template>



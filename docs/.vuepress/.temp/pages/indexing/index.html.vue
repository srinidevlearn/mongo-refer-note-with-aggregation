<template><div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>Mongo Database Indexing  are seen below</p>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#importance-of-indexing">Importance of Indexing</router-link></li><li><router-link to="#downside-of-indexing">Downside of Indexing</router-link></li><li><router-link to="#create-index">Create Index</router-link></li><li><router-link to="#get-index">Get Index</router-link></li><li><router-link to="#delete-index">Delete Index</router-link></li><li><router-link to="#query-explain">Query Explain</router-link></li></ul></nav>
<p><img src="@source/indexing/img/mind-B-tree.png" alt="An image"></p>
<h2 id="importance-of-indexing" tabindex="-1"><a class="header-anchor" href="#importance-of-indexing" aria-hidden="true">#</a> Importance of Indexing</h2>
<ul>
<li>With the use of Indexes, performing queries in MongoDB becomes more efficient.</li>
<li>MongoDB uses B-Tree searching algorithm for indexed value</li>
<li><strong>Actually what happens if no index ?</strong>
<ul>
<li>If you had a collection with thousands of documents with no indexes, and then you query to find certain documents,   then in such case MongoDB would need to scan the entire collection to find the documents.</li>
</ul>
</li>
<li><strong>Actually what happens if  indexed ?</strong>
<ul>
<li>It would use these indexes to limit the number of documents that had to be searched in the collection.</li>
</ul>
</li>
</ul>
<h2 id="downside-of-indexing" tabindex="-1"><a class="header-anchor" href="#downside-of-indexing" aria-hidden="true">#</a> Downside of Indexing</h2>
<ul>
<li>having too many indexes can slow down other operations such as the Insert, Delete and Update operation.</li>
</ul>
<h2 id="create-index" tabindex="-1"><a class="header-anchor" href="#create-index" aria-hidden="true">#</a> Create Index</h2>
<ul>
<li>The createIndex method is used to create an index based on the field name present</li>
<li>if positive number is present at creation of index sort them with ascending order</li>
<li>if negative number is present at creation of index sort them with descending order</li>
<li>mongodb by default create index having _id, which is object id</li>
<li>we can have many fields name as index</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span>  db.<span class="token operator">&lt;</span>collection_name<span class="token operator">></span>.createIndex<span class="token punctuation">(</span><span class="token punctuation">{</span>id:1<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="get-index" tabindex="-1"><a class="header-anchor" href="#get-index" aria-hidden="true">#</a> Get Index</h2>
<ul>
<li>to get indexes</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span>  db.<span class="token operator">&lt;</span>collection_name<span class="token operator">></span>.getIndexes<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="delete-index" tabindex="-1"><a class="header-anchor" href="#delete-index" aria-hidden="true">#</a> Delete Index</h2>
<ul>
<li>To delete specific index</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span>  db.<span class="token operator">&lt;</span>collection_name<span class="token operator">></span>.dropIndex<span class="token punctuation">(</span><span class="token punctuation">{</span>id:1<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>To delete all indexes</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span>  db.<span class="token operator">&lt;</span>collection_name<span class="token operator">></span>.dropIndexes<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="query-explain" tabindex="-1"><a class="header-anchor" href="#query-explain" aria-hidden="true">#</a> Query Explain</h2>
<ul>
<li>we can optimise the query by using <strong>explain()</strong> method</li>
<li>it is important to view the explain plan for a query to determine if you've used the appropriate index and if you need to optimise other aspects of the query or the data model</li>
<li>allows you to understand fully the performance implications of the query you have created</li>
<li>3 verbosity level available
<ul>
<li>queryPlanner
<ul>
<li>default if no verbosity parameter provided</li>
<li>At this level, explain provides information about the winning plan, including the index used or if a collection scan is needed (COLLSCAN)</li>
</ul>
</li>
<li>executionStats
<ul>
<li>queryPlanner + stats</li>
<li>stats include details such as the number of documents examined and returned, the execution time in milliseconds</li>
</ul>
</li>
<li>allPlansExecution
<ul>
<li>executionStats + information about the discarded execution plans</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span>  db.<span class="token operator">&lt;</span>collection_name<span class="token operator">></span>.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.explain<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>queryPlanner.winningPlan.stage = &quot;COLLSCAN&quot;</strong>
<ul>
<li>needs to do a collection scan</li>
<li>query is not optimized because all the documents must be read</li>
</ul>
</li>
<li><strong>executionStats.nReturned = some_number</strong>
<ul>
<li>number of documents returned is some_number</li>
</ul>
</li>
<li><strong>executionStats.totalDocsExamined = some_number</strong>
<ul>
<li>assume on colscan we have scanned 3772 documents</li>
<li>documents examined is exactly the number of documents in the collection (@COLLSCAN we can expect this)</li>
</ul>
</li>
<li><strong>executionStats.executionTimeMillis = some_number</strong>
<ul>
<li>some_number refers to tell how many millisecond it took to return the response</li>
</ul>
</li>
<li><strong>queryPlanner.winningPlan.inputStage.stage = &quot;IXSCAN&quot;</strong>
<ul>
<li>IXSCAN means that now MongoDB doesn't need to do a collection scan but an index can be used to find the documents.</li>
</ul>
</li>
<li><strong>queryPlanner.winningPlan.inputStage.indexName = indexed_field</strong>
<ul>
<li>indexed_field will be the name of the index used</li>
</ul>
</li>
<li><strong>queryPlanner.winningPlan.inputStage.direction = &quot;forward&quot;</strong></li>
<li><strong>executionStats.totalDocsExamined = some_number</strong>
<ul>
<li>assume on colscan we have scanned 1800 documents only because of indexing</li>
</ul>
</li>
<li><strong>executionStats.totalKeysExamined = some_number</strong>
<ul>
<li>number of keys examined in the index</li>
</ul>
</li>
</ul>
</div></template>



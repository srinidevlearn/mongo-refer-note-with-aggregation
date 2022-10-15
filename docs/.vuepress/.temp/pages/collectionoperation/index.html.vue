<template><div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>Mongo Database Collection Operation are seen below</p>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#create-collection">Create Collection</router-link></li><li><router-link to="#list-collections">List Collections</router-link></li><li><router-link to="#rename-collection">Rename Collection</router-link></li><li><router-link to="#drop-collection">Drop Collection</router-link></li></ul></nav>
<h2 id="create-collection" tabindex="-1"><a class="header-anchor" href="#create-collection" aria-hidden="true">#</a> Create Collection</h2>
<ul>
<li>To create new collection inside Db</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span>  db.createCollection<span class="token punctuation">(</span><span class="token string">'test5'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="list-collections" tabindex="-1"><a class="header-anchor" href="#list-collections" aria-hidden="true">#</a> List Collections</h2>
<ul>
<li>To list collections inside the DB</li>
<li><strong>db.getCollectionNames()</strong> returns array of string</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span>  show collections<span class="token punctuation">;</span>
<span class="token operator">></span>  db.getCollectionNames<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>now <strong>db.</strong> always refers to currently selected DB.</li>
</ul>
<h2 id="rename-collection" tabindex="-1"><a class="header-anchor" href="#rename-collection" aria-hidden="true">#</a> Rename Collection</h2>
<ul>
<li>To rename collection</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> db.test5.renameCollection<span class="token punctuation">(</span><span class="token string">'test15'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
or
<span class="token operator">></span>  db.getCollection<span class="token punctuation">(</span><span class="token string">'test5'</span><span class="token punctuation">)</span>.renameCollection<span class="token punctuation">(</span><span class="token string">'test15'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="drop-collection" tabindex="-1"><a class="header-anchor" href="#drop-collection" aria-hidden="true">#</a> Drop Collection</h2>
<ul>
<li>to drop collection</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> db.test5.drop<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">></span> db.getCollection<span class="token punctuation">(</span><span class="token string">'test5'</span><span class="token punctuation">)</span>.drop<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Details</summary>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<table>
<thead>
<tr>
<th>db.getCollection</th>
<th style="text-align:center">db.&lt;COLLECTION_NAME&gt;</th>
</tr>
</thead>
<tbody>
<tr>
<td>useful if space mentioned in collection name</td>
<td style="text-align:center">useful if space were not mentioned in collection name</td>
</tr>
</tbody>
</table>
</div>
</details>
</div></template>



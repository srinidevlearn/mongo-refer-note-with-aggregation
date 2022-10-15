<template><div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>Mongo Database Operation are seen below</p>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#create-database">Create Database</router-link></li><li><router-link to="#show-database">Show Database</router-link></li><li><router-link to="#drop-database">Drop Database</router-link></li></ul></nav>
<p><img src="@source/dboperation copy/img/hierachy.webp" alt="An image"></p>
<h2 id="create-database" tabindex="-1"><a class="header-anchor" href="#create-database" aria-hidden="true">#</a> Create Database</h2>
<ul>
<li>MongoDB <strong>use DATABASE_NAME</strong> is used to create database. The command will create a new database if it doesn't exist, otherwise it will return the existing database.</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span>  use <span class="token operator">&lt;</span>DB_NAME<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="show-database" tabindex="-1"><a class="header-anchor" href="#show-database" aria-hidden="true">#</a> Show Database</h2>
<ul>
<li>To check db was created use</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span>  show <span class="token operator">&lt;</span>DB_NAME<span class="token operator">></span>
<span class="token operator">></span>  show databases<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>now <strong>db.</strong> always refers to currently selected DB.</li>
</ul>
<h2 id="drop-database" tabindex="-1"><a class="header-anchor" href="#drop-database" aria-hidden="true">#</a> Drop Database</h2>
<ul>
<li>to delete database we use</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span>  db.dropDatabase<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>



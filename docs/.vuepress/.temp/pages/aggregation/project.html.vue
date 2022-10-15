<template><div><h2 id="project" tabindex="-1"><a class="header-anchor" href="#project" aria-hidden="true">#</a> $project</h2>
<ul>
<li>(not similar to one available with find operator)</li>
<li>once we specify one field to retain we must specify all fields to retain, but _id is exceptional</li>
<li>we can add new fields apart from removing or retaining fields</li>
<li>we can use $project whenever needed within aggregation pipeline(including n number of times)</li>
<li>we can use this for reassign values to existing field names and derive new fields.</li>
</ul>
<CodeTabs id="30" :data='[{"title":"dataForMongoDB"},{"title":"mongoshell"},{"title":"output"}]' :active="0" tab-id="shell">

<template #tab0="{ title, value, isActive }">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Leanne Graham"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Bret"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sincere@april.biz"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"street"</span><span class="token operator">:</span> <span class="token string">"Kulas Light"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"suite"</span><span class="token operator">:</span> <span class="token string">"Apt. 556"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"city"</span><span class="token operator">:</span> <span class="token string">"Gwenborough"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"zipcode"</span><span class="token operator">:</span> <span class="token string">"92998-3874"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"lat"</span><span class="token operator">:</span> <span class="token string">"-37.3159"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"lng"</span><span class="token operator">:</span> <span class="token string">"81.1496"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"1-770-736-8031 x56442"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"hildegard.org"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Romaguera-Crona"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"catchPhrase"</span><span class="token operator">:</span> <span class="token string">"Multi-layered client-server neural-net"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"bs"</span><span class="token operator">:</span> <span class="token string">"harness real-time e-markets"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ctc"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token string-property property">"variable"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token string-property property">"band"</span><span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skill"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"Angular"</span><span class="token punctuation">,</span>
      <span class="token string">"Mongo"</span><span class="token punctuation">,</span>
      <span class="token string">"Node"</span><span class="token punctuation">,</span>
      <span class="token string">"React"</span><span class="token punctuation">,</span>
      <span class="token string">"vue"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token string">"2012-05-05"</span><span class="token punctuation">,</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Ervin Howell"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Antonette"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Shanna@melissa.tv"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"street"</span><span class="token operator">:</span> <span class="token string">"Victor Plains"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"suite"</span><span class="token operator">:</span> <span class="token string">"Suite 879"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"city"</span><span class="token operator">:</span> <span class="token string">"Wisokyburgh"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"zipcode"</span><span class="token operator">:</span> <span class="token string">"90566-7771"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"lat"</span><span class="token operator">:</span> <span class="token string">"-43.9509"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"lng"</span><span class="token operator">:</span> <span class="token string">"-34.4618"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"010-692-6593 x09125"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"anastasia.net"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Deckow-Crist"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"catchPhrase"</span><span class="token operator">:</span> <span class="token string">"Proactive didactic contingency"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"bs"</span><span class="token operator">:</span> <span class="token string">"synergize scalable supply-chains"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ctc"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token string-property property">"variable"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token string-property property">"band"</span><span class="token operator">:</span> <span class="token string">"B"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skill"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"PHP"</span><span class="token punctuation">,</span>
      <span class="token string">"Angular"</span><span class="token punctuation">,</span>
      <span class="token string">"Mongo"</span><span class="token punctuation">,</span>
      <span class="token string">"Node"</span><span class="token punctuation">,</span>
      <span class="token string">"React"</span><span class="token punctuation">,</span>
      <span class="token string">"vue"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token string">"2017-05-05"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementine Bauch"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Samantha"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Nathan@yesenia.net"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"street"</span><span class="token operator">:</span> <span class="token string">"Douglas Extension"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"suite"</span><span class="token operator">:</span> <span class="token string">"Suite 847"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"city"</span><span class="token operator">:</span> <span class="token string">"McKenziehaven"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"zipcode"</span><span class="token operator">:</span> <span class="token string">"59590-4157"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"lat"</span><span class="token operator">:</span> <span class="token string">"-68.6102"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"lng"</span><span class="token operator">:</span> <span class="token string">"-47.0653"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"1-463-123-4447"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ramiro.info"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Romaguera-Jacobson"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"catchPhrase"</span><span class="token operator">:</span> <span class="token string">"Face to face bifurcated interface"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"bs"</span><span class="token operator">:</span> <span class="token string">"e-enable strategic applications"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ctc"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token string-property property">"variable"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token string-property property">"band"</span><span class="token operator">:</span> <span class="token string">"C"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skill"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"Excel Macros"</span><span class="token punctuation">,</span>
      <span class="token string">"MS-Powerpoint"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token string">"2020-05-05"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Patricia Lebsack"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Karianne"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Julianne.OConner@kory.org"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"street"</span><span class="token operator">:</span> <span class="token string">"Hoeger Mall"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"suite"</span><span class="token operator">:</span> <span class="token string">"Apt. 692"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"city"</span><span class="token operator">:</span> <span class="token string">"South Elvis"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"zipcode"</span><span class="token operator">:</span> <span class="token string">"53919-4257"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"lat"</span><span class="token operator">:</span> <span class="token string">"29.4572"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"lng"</span><span class="token operator">:</span> <span class="token string">"-164.2990"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"493-170-9623 x156"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"kale.biz"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Robel-Corkery"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"catchPhrase"</span><span class="token operator">:</span> <span class="token string">"Multi-tiered zero tolerance productivity"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"bs"</span><span class="token operator">:</span> <span class="token string">"transition cutting-edge web services"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ctc"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token string-property property">"variable"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token string-property property">"band"</span><span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skill"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"Angular"</span><span class="token punctuation">,</span>
      <span class="token string">"Mongo"</span><span class="token punctuation">,</span>
      <span class="token string">"Node"</span><span class="token punctuation">,</span>
      <span class="token string">"React"</span><span class="token punctuation">,</span>
      <span class="token string">"vue"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token string">"2015-06-05"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Chelsey Dietrich"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Kamren"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"street"</span><span class="token operator">:</span> <span class="token string">"Skiles Walks"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"suite"</span><span class="token operator">:</span> <span class="token string">"Suite 351"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"city"</span><span class="token operator">:</span> <span class="token string">"Roscoeview"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"zipcode"</span><span class="token operator">:</span> <span class="token string">"33263"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"lat"</span><span class="token operator">:</span> <span class="token string">"-31.8129"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"lng"</span><span class="token operator">:</span> <span class="token string">"62.5342"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"(254)954-1289"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"demarco.info"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Keebler LLC"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"catchPhrase"</span><span class="token operator">:</span> <span class="token string">"User-centric fault-tolerant solution"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"bs"</span><span class="token operator">:</span> <span class="token string">"revolutionize end-to-end systems"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ctc"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token string-property property">"variable"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token string-property property">"band"</span><span class="token operator">:</span> <span class="token string">"B"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skill"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"PHP"</span><span class="token punctuation">,</span>
      <span class="token string">"Angular"</span><span class="token punctuation">,</span>
      <span class="token string">"Mongo"</span><span class="token punctuation">,</span>
      <span class="token string">"Node"</span><span class="token punctuation">,</span>
      <span class="token string">"React"</span><span class="token punctuation">,</span>
      <span class="token string">"vue"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token string">"2015-05-05"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Mrs. Dennis Schulist"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Leopoldo_Corkery"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Karley_Dach@jasper.info"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"street"</span><span class="token operator">:</span> <span class="token string">"Norberto Crossing"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"suite"</span><span class="token operator">:</span> <span class="token string">"Apt. 950"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"city"</span><span class="token operator">:</span> <span class="token string">"South Christy"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"zipcode"</span><span class="token operator">:</span> <span class="token string">"23505-1337"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"lat"</span><span class="token operator">:</span> <span class="token string">"-71.4197"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"lng"</span><span class="token operator">:</span> <span class="token string">"71.7478"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"1-477-935-8478 x6430"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ola.org"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Considine-Lockman"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"catchPhrase"</span><span class="token operator">:</span> <span class="token string">"Synchronised bottom-line interface"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"bs"</span><span class="token operator">:</span> <span class="token string">"e-enable innovative applications"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ctc"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token string-property property">"variable"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token string-property property">"band"</span><span class="token operator">:</span> <span class="token string">"C"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skill"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"Excel Macros"</span><span class="token punctuation">,</span>
      <span class="token string">"MS-Powerpoint"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token string">"2015-07-05"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Kurtis Weissnat"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Elwyn.Skiles"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"street"</span><span class="token operator">:</span> <span class="token string">"Rex Trail"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"suite"</span><span class="token operator">:</span> <span class="token string">"Suite 280"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"city"</span><span class="token operator">:</span> <span class="token string">"Howemouth"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"zipcode"</span><span class="token operator">:</span> <span class="token string">"58804-1099"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"lat"</span><span class="token operator">:</span> <span class="token string">"24.8918"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"lng"</span><span class="token operator">:</span> <span class="token string">"21.8984"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"210.067.6132"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"elvis.io"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Johns Group"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"catchPhrase"</span><span class="token operator">:</span> <span class="token string">"Configurable multimedia task-force"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"bs"</span><span class="token operator">:</span> <span class="token string">"generate enterprise e-tailers"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ctc"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token string-property property">"variable"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token string-property property">"band"</span><span class="token operator">:</span> <span class="token string">"B"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skill"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"PHP"</span><span class="token punctuation">,</span>
      <span class="token string">"Angular"</span><span class="token punctuation">,</span>
      <span class="token string">"Mongo"</span><span class="token punctuation">,</span>
      <span class="token string">"Node"</span><span class="token punctuation">,</span>
      <span class="token string">"React"</span><span class="token punctuation">,</span>
      <span class="token string">"vue"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token string">"2016-11-05"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Maxime_Nienow"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sherwood@rosamond.me"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"street"</span><span class="token operator">:</span> <span class="token string">"Ellsworth Summit"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"suite"</span><span class="token operator">:</span> <span class="token string">"Suite 729"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"city"</span><span class="token operator">:</span> <span class="token string">"Aliyaview"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"zipcode"</span><span class="token operator">:</span> <span class="token string">"45169"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"lat"</span><span class="token operator">:</span> <span class="token string">"-14.3990"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"lng"</span><span class="token operator">:</span> <span class="token string">"-120.7677"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"586.493.6943 x140"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"jacynthe.com"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Abernathy Group"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"catchPhrase"</span><span class="token operator">:</span> <span class="token string">"Implemented secondary concept"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"bs"</span><span class="token operator">:</span> <span class="token string">"e-enable extensible e-tailers"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ctc"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token string-property property">"variable"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token string-property property">"band"</span><span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skill"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"Angular"</span><span class="token punctuation">,</span>
      <span class="token string">"Mongo"</span><span class="token punctuation">,</span>
      <span class="token string">"Node"</span><span class="token punctuation">,</span>
      <span class="token string">"React"</span><span class="token punctuation">,</span>
      <span class="token string">"vue"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token string">"2012-11-05"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Glenna Reichert"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Delphine"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"street"</span><span class="token operator">:</span> <span class="token string">"Dayna Park"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"suite"</span><span class="token operator">:</span> <span class="token string">"Suite 449"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"city"</span><span class="token operator">:</span> <span class="token string">"Bartholomebury"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"zipcode"</span><span class="token operator">:</span> <span class="token string">"76495-3109"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"lat"</span><span class="token operator">:</span> <span class="token string">"24.6463"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"lng"</span><span class="token operator">:</span> <span class="token string">"-168.8889"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"(775)976-6794 x41206"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"conrad.com"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Yost and Sons"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"catchPhrase"</span><span class="token operator">:</span> <span class="token string">"Switchable contextually-based project"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"bs"</span><span class="token operator">:</span> <span class="token string">"aggregate real-time technologies"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ctc"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token string-property property">"variable"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token string-property property">"band"</span><span class="token operator">:</span> <span class="token string">"C"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skill"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"Excel Macros"</span><span class="token punctuation">,</span>
      <span class="token string">"MS-Powerpoint"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token string">"2012-05-05"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementina DuBuque"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Moriah.Stanton"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"street"</span><span class="token operator">:</span> <span class="token string">"Kattie Turnpike"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"suite"</span><span class="token operator">:</span> <span class="token string">"Suite 198"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"city"</span><span class="token operator">:</span> <span class="token string">"Lebsackbury"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"zipcode"</span><span class="token operator">:</span> <span class="token string">"31428-2261"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"lat"</span><span class="token operator">:</span> <span class="token string">"-38.2386"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"lng"</span><span class="token operator">:</span> <span class="token string">"57.2232"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"024-648-3804"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ambrose.net"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Hoeger LLC"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"catchPhrase"</span><span class="token operator">:</span> <span class="token string">"Centralized empowering task-force"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"bs"</span><span class="token operator">:</span> <span class="token string">"target end-to-end models"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ctc"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token string-property property">"variable"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token string-property property">"band"</span><span class="token operator">:</span> <span class="token string">"B"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skill"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"PHP"</span><span class="token punctuation">,</span>
      <span class="token string">"Angular"</span><span class="token punctuation">,</span>
      <span class="token string">"Mongo"</span><span class="token punctuation">,</span>
      <span class="token string">"Node"</span><span class="token punctuation">,</span>
      <span class="token string">"React"</span><span class="token punctuation">,</span>
      <span class="token string">"vue"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token string">"2021-05-05"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.collection.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token variable">$project</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      _id: <span class="token number">0</span>,
      <span class="token string">"DOJ"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token variable">$dateFromString</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          dateString: <span class="token string">"<span class="token variable">$DOJ</span>"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token function">ISODate</span><span class="token punctuation">(</span><span class="token string">"2012-05-05T00:00:00Z"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token function">ISODate</span><span class="token punctuation">(</span><span class="token string">"2017-05-05T00:00:00Z"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token function">ISODate</span><span class="token punctuation">(</span><span class="token string">"2020-05-05T00:00:00Z"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token function">ISODate</span><span class="token punctuation">(</span><span class="token string">"2015-06-05T00:00:00Z"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token function">ISODate</span><span class="token punctuation">(</span><span class="token string">"2015-05-05T00:00:00Z"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token function">ISODate</span><span class="token punctuation">(</span><span class="token string">"2015-07-05T00:00:00Z"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token function">ISODate</span><span class="token punctuation">(</span><span class="token string">"2016-11-05T00:00:00Z"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token function">ISODate</span><span class="token punctuation">(</span><span class="token string">"2012-11-05T00:00:00Z"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token function">ISODate</span><span class="token punctuation">(</span><span class="token string">"2012-05-05T00:00:00Z"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"DOJ"</span><span class="token operator">:</span> <span class="token function">ISODate</span><span class="token punctuation">(</span><span class="token string">"2021-05-05T00:00:00Z"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<details class="custom-container details"><summary>Try in Mongo Playground</summary>
<mongo-playground ihtml="https://mongoplayground.net"/></details>
</div></template>



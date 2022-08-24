<template><div><h1 id="vue-mock-usage" tabindex="-1"><a class="header-anchor" href="#vue-mock-usage" aria-hidden="true">#</a> Vue mock usage</h1>
<p>本文是基于vue/cli 3.0创建的项目进行讲解</p>
<p>首先我们来说一说vue/cli 3.0 与 2.0 的一些不同：</p>
<ol>
<li>3.0 移除了 static 文件目录，新增了 public 目录，这个目录下的静态资源不会经过 webpack 的处理，会被直接拷贝，所以我们能够直接访问到该目录下的资源，静态数据（如json数据、图片等）需要存放在这里。</li>
</ol>
<!-- more -->
<blockquote>
<p>放在<code v-pre>public</code>目录下的静态资源可直接通过(http://localhost:8080/+ 文件名称)来访问，不需要在前面加一个<code v-pre>/public</code>路径</p>
</blockquote>
<ol start="2">
<li>3.0 移除了 config、build 等配置目录，如果需要进行相关配置我们需要在根目录下创建<code v-pre> vue.config.js</code> 进行配置。</li>
</ol>
<h2 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h2>
<blockquote>
<p>使用mockjs插件实现本地mock数据</p>
</blockquote>
<ol>
<li>
<p>安装<code v-pre>mockjs</code>插件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i mockjs -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>在src目录下创建一个<code v-pre>mock</code>文件夹，在<code v-pre>mock</code>文件夹下创建一个<code v-pre>index.js</code>和一个<code v-pre>data</code>文件夹（用于存放项目需要的模拟数据）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
├── src
│   ├── mock
│   │   └── data
│   │   │   └──  test.json
│   │   └── index.js 
.   .   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>mock</code>目录下的<code v-pre>index.js</code>示例如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mockjs'</span><span class="token punctuation">)</span>
 
<span class="token comment">// 格式： Mock.mock( url, 'post'|'get' , 返回的数据)</span>
Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">'/api/test'</span><span class="token punctuation">,</span> <span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./data/test.json'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">'/api/test2'</span><span class="token punctuation">,</span> <span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./data/test2.json'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在<code v-pre>main.js</code>入口文件中引入mock数据，不需要时，则注释掉</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./mock'</span><span class="token punctuation">)</span> <span class="token comment">// 引入mock数据，不需要时，则注释掉</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>最后，在vue模板中使用即可</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/test'</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h2>
<blockquote>
<p>在public文件夹放mock数据（无需使用mockjs插件）</p>
</blockquote>
<ol>
<li>
<p>在<code v-pre>public</code>文件夹下创建一个<code v-pre>mock</code>文件夹，用来存放模拟数据的json文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
├── public
│   ├── mock
│   │   └── test.json 
.   .   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>放在<code v-pre>public</code>目录下的静态资源可直接通过(http://localhost:8080/ + 文件名称)来访问，不需要在前面加一个<code v-pre>/public</code>路径。</p>
</blockquote>
</li>
<li>
<p>在<code v-pre>vue.config.js</code>里进行路径配置，如下:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 代理接口</span>
       <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://localhost:8080'</span><span class="token punctuation">,</span>
       <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// proxy websockets</span>
       <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否开启跨域</span>
       <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 路径重写</span>
         <span class="token string-property property">'^/api'</span><span class="token operator">:</span> <span class="token string">'/mock'</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cli.vuejs.org/zh/config/#devserver-proxy" target="_blank" rel="noopener noreferrer">devServer.proxy官方文档<ExternalLinkIcon/></a></p>
</li>
<li>
<p>最后，在vue模板中使用即可</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/test.json'</span><span class="token punctuation">)</span> <span class="token comment">// 注意这里需要.json后缀</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<blockquote>
<p>这方式貌似不支持<code v-pre>post</code>请求，有待研究。</p>
</blockquote>
<h2 id="方式三" tabindex="-1"><a class="header-anchor" href="#方式三" aria-hidden="true">#</a> 方式三</h2>
<blockquote>
<p>前端本地启动一个nodejs服务，vue项目向nodejs服务请求mock数据</p>
</blockquote>
<ol>
<li>
<p>创建一个node项目（为了方便，本例直接在vue项目根目录创建，当然也可以是其它任何地方）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
├── 项目根目录
│   └── serve.js
.   .  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>serve.js</code>示例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>
<span class="token comment">// url模块用于处理与解析 前端传给后台的URL，适用于get请求（不适用于post请求），详情参见文档</span>
<span class="token keyword">const</span> urlLib <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'url'</span><span class="token punctuation">)</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> urlObj <span class="token operator">=</span> urlLib<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// 注意：这里的第二个参数一定要设置为：true, query才能解析为对象形式,可以更加方便地获取key:value</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> urlObj<span class="token punctuation">.</span>pathname
  <span class="token keyword">const</span> get <span class="token operator">=</span> urlObj<span class="token punctuation">.</span>query
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
  <span class="token comment">// 模拟的mock数据</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token string-property property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">'0001'</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"test"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">'0002'</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"test2"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// console.log(get.user)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>url <span class="token operator">===</span> <span class="token string">'/test'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 接口名</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>启动node服务</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> serve.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>配置<code v-pre>vue.config.js</code>的<code v-pre>proxy</code>，解决跨域</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://localhost:9000'</span><span class="token punctuation">,</span>
       <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// proxy websockets</span>
       <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否开启跨域</span>
       <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 路径重写</span>
         <span class="token string-property property">'^/api'</span><span class="token operator">:</span> <span class="token string">''</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>最后，在vue模板中使用即可</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/test'</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>方式二目前来看只支持get方式请求，对于post请求还有待研究。方式三虽然也是一种实现方式，但实现起来比较麻烦。个人建议使用方式一，灵活、方便。</p>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h2>
<p><RouterLink to="/Front/Vue/basic/Vuewebpack.html">《Vue CLi3 修改webpack配置》</RouterLink></p>
</div></template>

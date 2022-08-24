<template><div><h1 id="cli3-webpack配置" tabindex="-1"><a class="header-anchor" href="#cli3-webpack配置" aria-hidden="true">#</a> Cli3 webpack配置</h1>
<h2 id="审查项目的-webpack-配置" tabindex="-1"><a class="header-anchor" href="#审查项目的-webpack-配置" aria-hidden="true">#</a> 审查项目的 webpack 配置</h2>
<p>因为 <code v-pre>@vue/cli-service</code> 对 webpack 配置进行了抽象，当你想查看webpack的配置时可以使用 <code v-pre>inspect</code>命令：</p>
<!-- more -->
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue inspect <span class="token comment"># 在终端打印 webpack配置信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue inspect <span class="token operator">></span> output.js <span class="token comment"># 把webpack配置信息生成到output.js文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，<code v-pre>output.js</code> 文件不是一个有效的 webpack 配置文件，仅用于审查。</p>
<h2 id="修改webpack配置" tabindex="-1"><a class="header-anchor" href="#修改webpack配置" aria-hidden="true">#</a> 修改webpack配置</h2>
<p>以<strong>修改路径别名</strong>为例：</p>
<ol>
<li>
<p>项目根目录创建文件 <code v-pre>vue.config.js</code></p>
</li>
<li>
<p>参考如下代码修改路径别名：</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vue.config.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token parameter">dir</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias
      <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'styles'</span><span class="token punctuation">,</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'src/assets/styles'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>
<p><a href="https://cli.vuejs.org/zh/guide/webpack.html" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://cli.vuejs.org/zh/config/#vue-config-js" target="_blank" rel="noopener noreferrer">官方 vue.config.js 参数说明<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/ustblfange/vue-music/blob/master/vue.config.js" target="_blank" rel="noopener noreferrer">vue.config.js 设置接口代理示例<ExternalLinkIcon/></a></p>
</li>
<li>
<p>配置示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> UglifyJsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'uglifyjs-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ProxyAgent <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'proxy-agent'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token parameter">dir</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">outputDir</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>outputDir <span class="token operator">||</span> <span class="token string">'dist'</span><span class="token punctuation">,</span> <span class="token comment">// 'dist', 生产环境构建文件的目录</span>
  <span class="token literal-property property">runtimeCompiler</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">'static'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 生产环境的 source map</span>
  <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'os'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 公共配置</span>
    <span class="token comment">// cdn引用时配置externals 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖</span>
    config<span class="token punctuation">.</span>externals <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'vue'</span><span class="token operator">:</span> <span class="token string">'Vue'</span><span class="token punctuation">,</span>
      <span class="token string-property property">'vue-router'</span><span class="token operator">:</span> <span class="token string">'VueRouter'</span><span class="token punctuation">,</span>
      <span class="token string-property property">'element-ui'</span><span class="token operator">:</span> <span class="token string">'ELEMENT'</span><span class="token punctuation">,</span>
      <span class="token string-property property">'vuex'</span><span class="token operator">:</span> <span class="token string">'Vuex'</span><span class="token punctuation">,</span>
      <span class="token string-property property">'axios'</span><span class="token operator">:</span> <span class="token string">'axios'</span>
    <span class="token punctuation">}</span>
    config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'src'</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'src/common'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">'common'</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'src/views/common'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">'static'</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'static'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 为生产环境修改配置...</span>
      config<span class="token punctuation">.</span>optimization <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token keyword">new</span> <span class="token class-name">UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">uglifyOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// console</span>
                <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">pure_funcs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'console.log'</span><span class="token punctuation">]</span><span class="token comment">// 移除console</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 为开发环境修改配置...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token comment">// @import 引入的文件可被一个loader处理 （2 可被两个loader处理）</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disableHostCheck</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可使用本地host配置的域名访问</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">agent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ProxyAgent</span><span class="token punctuation">(</span><span class="token string">'http://132.128.11.12'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://132.128.11.12'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

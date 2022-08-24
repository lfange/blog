<template><div><h1 id="vue基础" tabindex="-1"><a class="header-anchor" href="#vue基础" aria-hidden="true">#</a> Vue基础</h1>
<h2 id="mvvm-模式" tabindex="-1"><a class="header-anchor" href="#mvvm-模式" aria-hidden="true">#</a> MVVM 模式</h2>
<p>MVVM 模式，<code v-pre>M</code>即 model，数据模型；<code v-pre>V</code>即 view，视图；<code v-pre>VM</code>即 view-model，视图模型。</p>
<!-- more -->
<p><img src="https://cdn.jsdelivr.net/gh/lfange/image_store/blog/20200204123438.png" alt=""></p>
<p><strong>理解</strong>
首先，数据 Model 通过 Data Bindings 把数据绑定在 View 视图上，
当 View 视图有交互（有改变）的时候，Dom listeners 会自动监听，然后更新数据 Model。</p>
<p><strong>Q：什么是 MVVM 模式？</strong></p>
<p>A：MVVM 模式，第一个 M 代表数据模型，V 代表视图，VM 代表视图模型；
它的实际操作原理是：后台数据通过视图模型来渲染视图，就是页面。当用户在页面上进行操作的时候，
视图模型会自动监听到用户的操作，从而改变后台数据。</p>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<h3 id="实例生命周期钩子" tabindex="-1"><a class="header-anchor" href="#实例生命周期钩子" aria-hidden="true">#</a> 实例生命周期钩子</h3>
<p><a href="https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90" target="_blank" rel="noopener noreferrer">实例生命周期钩子 API<ExternalLinkIcon/></a></p>
<p>简单理解，生命周期钩子函数就是 vue 实例在某一个时间点会自动执行的函数。</p>
<!-- more -->
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.bootcss.com/vue/2.4.2/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"Vue的生命周期"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">beforeCreate</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">"------beforeCreate创建前状态------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"el     : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"data   : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"msg: "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">"------created创建完毕状态------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"el     : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"data   : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//已被初始化</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"msg: "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//已被初始化</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">beforeMount</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">"------beforeMount挂载前状态------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;div id="app">{{msg}}&lt;/div> 挂载前状态</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">mounted</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">"------mounted 挂载结束状态------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;div id="app">Vue的生命周期&lt;/div>   msg内容被挂载并渲染到页面</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 当data被修改之前</span>
    <span class="token function-variable function">beforeUpdate</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">"beforeUpdate 更新前状态===============》"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"el     : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"data   : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"msg: "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 触发beforeUpdate之后，虚拟DOM重新渲染并应用更新</span>
    <span class="token comment">// 当data被修改之后</span>
    <span class="token function-variable function">updated</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">"updated 更新完成状态===============》"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"el     : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"data   : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"msg: "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 调用vm.$destroy() 销毁前</span>
    <span class="token function-variable function">beforeDestroy</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">"beforeDestroy 销毁前状态===============》"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"el     : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"data   : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"msg: "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 调用vm.$destroy() 销毁后</span>
    <span class="token function-variable function">destroyed</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">"destroyed 销毁完成状态===============》"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"el     : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"data   : "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"msg: "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-if-vs-v-show" tabindex="-1"><a class="header-anchor" href="#v-if-vs-v-show" aria-hidden="true">#</a> v-if vs v-show</h2>
<p><a href="https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a></p>
<p><code v-pre>v-if</code> 根据渲染条件决定是否把元素渲染到DOM页面，而<code v-pre>v-show</code>不管渲染条件是什么，都会把元素渲染到DOM页面，只是简单的切换CSS的显示隐藏。</p>
<!-- more -->
<p>如果需要非常频繁地切换，则使用 <code v-pre>v-show</code> 较好；如果在运行时条件很少改变，则使用 <code v-pre>v-if</code> 较好。</p>
<h2 id="计算属性-vs-方法-vs-侦听属性" tabindex="-1"><a class="header-anchor" href="#计算属性-vs-方法-vs-侦听属性" aria-hidden="true">#</a> 计算属性 vs 方法 vs 侦听属性</h2>
<p><a href="https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%BC%93%E5%AD%98-vs-%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a></p>
<p>如果一个功能同时可以使用计算属性(computed)、方法(methods)、侦听属性(watch)来实现的时候推荐使用计算属性。</p>
<!-- more -->
<table>
<thead>
<tr>
<th>计算属性</th>
<th>方法</th>
<th>侦听属性</th>
</tr>
</thead>
<tbody>
<tr>
<td>计算属性是基于它们的响应式依赖进行缓存的</td>
<td>每当触发重新渲染时，调用方法将<strong>总会</strong>再次执行函数</td>
<td>有缓存，但相比计算属性，实现起来要复杂很多。</td>
</tr>
</tbody>
</table>
<h2 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h2>
<p><a href="https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B" target="_blank" rel="noopener noreferrer">数组更新检测 API<ExternalLinkIcon/></a> <a href="https://cn.vuejs.org/v2/guide/list.html#%E5%AF%B9%E8%B1%A1%E5%8F%98%E6%9B%B4%E6%A3%80%E6%B5%8B%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9" target="_blank" rel="noopener noreferrer">对象更新检测 API<ExternalLinkIcon/></a></p>
<h2 id="数组更新检测" tabindex="-1"><a class="header-anchor" href="#数组更新检测" aria-hidden="true">#</a> 数组更新检测</h2>
<h4 id="变异方法-mutation-method" tabindex="-1"><a class="header-anchor" href="#变异方法-mutation-method" aria-hidden="true">#</a> 变异方法 (mutation method)</h4>
<p>Vue 将被侦听的数组的变异方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：</p>
<!-- more -->
<ul>
<li><code v-pre>push()</code>末尾添加</li>
<li><code v-pre>pop()</code>末尾删除</li>
<li><code v-pre>shift()</code> 首位删除</li>
<li><code v-pre>unshift() </code> 首位添加</li>
<li><code v-pre>splice()</code> 拼合</li>
<li><code v-pre>sort()</code> 排序</li>
<li><code v-pre>reverse()</code> 反转</li>
</ul>
<p><a href="https://lfange.com/pages/74d2ab3fbfeaaa68/#_3%E3%80%81%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">数组实例方法<ExternalLinkIcon/></a></p>
<h3 id="替换数组" tabindex="-1"><a class="header-anchor" href="#替换数组" aria-hidden="true">#</a> 替换数组</h3>
<p>变异方法，顾名思义，会改变调用了这些方法的原始数组。相比之下，也有非变异 (non-mutating method) 方法，例如 <code v-pre>filter()</code>、<code v-pre>concat()</code> 和 <code v-pre>slice()</code> 。它们不会改变原始数组，而<strong>总是返回一个新数组</strong>。当使用非变异方法时，可以用新数组替换旧数组：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>example1<span class="token punctuation">.</span>items <span class="token operator">=</span> example1<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> item<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Foo</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。</p>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3>
<p><strong>由于 JavaScript 的限制，Vue 不能检测以下数组的变动</strong></p>
<ol>
<li>当你利用索引直接设置一个数组项时，例如：<code v-pre>vm.items[indexOfItem] = newValue</code></li>
<li>当你修改数组的长度时，例如：<code v-pre>vm.items.length = newLength</code></li>
</ol>
<p>为了解决第一类问题，以下两种方式都可以实现和 <code v-pre>vm.items[indexOfItem] = newValue</code> 相同的效果，同时也将在响应式系统内触发状态更新：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Vue.set</span>
Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>items<span class="token punctuation">,</span> indexOfItem<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Array.prototype.splice</span>
vm<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>indexOfItem<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以使用 <a href="https://cn.vuejs.org/v2/api/#vm-set" target="_blank" rel="noopener noreferrer"><code v-pre>vm.$set</code><ExternalLinkIcon/></a> 实例方法，该方法是全局方法 <code v-pre>Vue.set</code> 的一个别名：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vm<span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>items<span class="token punctuation">,</span> indexOfItem<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为了解决第二类问题，你可以使用 <code v-pre>splice</code>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vm<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>newLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="对象变更检测注意事项" tabindex="-1"><a class="header-anchor" href="#对象变更检测注意事项" aria-hidden="true">#</a> 对象变更检测注意事项</h3>
<blockquote>
<p>列表循环对象示例</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, key, index) in obj<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<p>还是由于 JavaScript 的限制，<strong>Vue 不能检测对象属性的添加或删除</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// `vm.a` 现在是响应式的</span>

vm<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token comment">// `vm.b` 不是响应式的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性。</p>
<p>但是，可以使用 <code v-pre>Vue.set(object, propertyName, value)</code> 方法向嵌套对象添加响应式属性。例如，对于：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">userProfile</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Anika"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以添加一个新的 <code v-pre>age</code> 属性到嵌套的 <code v-pre>userProfile</code> 对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>userProfile<span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你还可以使用 <code v-pre>vm.$set</code> 实例方法，它只是全局 <code v-pre>Vue.set</code> 的别名：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vm<span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>userProfile<span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有时你可能需要为已有对象赋值多个新属性，比如使用 <code v-pre>Object.assign()</code> 或 <code v-pre>_.extend()</code>。在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性，不要像这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>userProfile<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
  <span class="token literal-property property">favoriteColor</span><span class="token operator">:</span> <span class="token string">"Vue Green"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你应该这样做：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vm<span class="token punctuation">.</span>userProfile <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> vm<span class="token punctuation">.</span>userProfile<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
  <span class="token literal-property property">favoriteColor</span><span class="token operator">:</span> <span class="token string">"Vue Green"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>一、使数组更新具有响应式可使用的办法：</p>
<ol>
<li>使用变异方法 （push、pop、unshift、shift、splice、sort、reverse）</li>
<li>替换数组引用 （对不改变原数组的方法可使用替换数组）</li>
<li>使用 Vue.set()方法</li>
</ol>
<p>二、使对象属性的添加或删除具有响应式可使用的办法：</p>
<ol>
<li>替换对象引用</li>
<li>使用 Vue.set()方法</li>
</ol>
<p>三、Vue.set() 语法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 向数组更新数据</span>
Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>items<span class="token punctuation">,</span> indexOfItem<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
即 Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>原数组<span class="token punctuation">,</span> 索引<span class="token punctuation">,</span> 新数据<span class="token punctuation">)</span>

<span class="token comment">// 向对象更新数据</span>
Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> propertyName<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
即 Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>原对象<span class="token punctuation">,</span> 属性名<span class="token punctuation">,</span> 值<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>vm.$set() 实例方法是 Vue.set() 全局方法的别名</p>
</blockquote>
<h2 id="mixin混入" tabindex="-1"><a class="header-anchor" href="#mixin混入" aria-hidden="true">#</a> Mixin混入</h2>
<h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h3>
<p>混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。</p>
<!-- more -->
<blockquote>
<p>组件选项：指的是组件对象中的 <code v-pre>data</code>、<code v-pre>created</code>、<code v-pre>methods</code> 等等选项。</p>
<p>可通过 <code v-pre>this.$options</code> 查看选项</p>
</blockquote>
<p>例子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义一个混入对象</span>
<span class="token keyword">var</span> myMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">hello</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello from mixin!'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个使用混入对象的组件</span>
<span class="token keyword">var</span> Component <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>myMixin<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> component <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => "hello from mixin!"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>通俗讲，就是把组件的部分代码抽离出来，再&quot;混合&quot;进入组件。当多个组件有相同的选项代码时，可以把相同的选项代码抽离到一个文件，再混入到每个组件，从而达到共享部分代码的目的。</strong></p>
<h3 id="选项合并" tabindex="-1"><a class="header-anchor" href="#选项合并" aria-hidden="true">#</a> 选项合并</h3>
<p>当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。</p>
<p>比如，数据对象在内部会进行递归合并，并<strong>在发生冲突时以组件数据优先</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'abc'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'goodbye'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">'def'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span>
    <span class="token comment">// => { message: "goodbye", foo: "abc", bar: "def" }</span>
    <span class="token comment">// message同名，组件数据优先，而foo被混入</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>同名钩子函数将合并为一个数组，因此都将被调用</strong>。另外，混入对象的钩子将在组件自身钩子<strong>之前</strong>调用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'混入对象的钩子被调用'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'组件钩子被调用'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// => "混入对象的钩子被调用"</span>
<span class="token comment">// => "组件钩子被调用"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值为对象的选项，例如 <code v-pre>methods</code>、<code v-pre>components</code> 和 <code v-pre>directives</code>，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">conflicting</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'from mixin'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">bar</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">conflicting</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'from self'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

vm<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => "foo"</span>
vm<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => "bar"</span>
vm<span class="token punctuation">.</span><span class="token function">conflicting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// => "from self"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code v-pre>Vue.extend()</code> 也使用同样的策略进行合并。</p>
<h3 id="某项目中使用的mixin示例" tabindex="-1"><a class="header-anchor" href="#某项目中使用的mixin示例" aria-hidden="true">#</a> 某项目中使用的Mixin示例</h3>
<p>抽离各组件相同的代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// mixin.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> playlistMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">'playlist'</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handlePlaylist</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>playlist<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handlePlaylist</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>playlist<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">playlist</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handlePlaylist</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根据选项合并策略，此方法和组件中的方法同名时，则被覆盖。如组件中没有相同名称方法时则会使用此方法，从而抛出错误。</span>
    <span class="token function">handlePlaylist</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'component must implement handlePlaylist method'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混入到组件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用，可在多个组件中共用mixin的代码</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> playlistMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/common/js/mixin'</span> <span class="token comment">// 共享代码的引入</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>playlistMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handlePlaylist</span><span class="token punctuation">(</span><span class="token parameter">playlist</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 此方法可针对不同组件做不同处理</span>
            <span class="token operator">...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

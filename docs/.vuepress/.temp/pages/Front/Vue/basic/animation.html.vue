<template><div><h1 id="transition过渡-动画" tabindex="-1"><a class="header-anchor" href="#transition过渡-动画" aria-hidden="true">#</a> transition过渡&amp;动画</h1>
<p><a href="https://cn.vuejs.org/v2/guide/transitions.html" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a></p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p>需要设置动画的元素或组件要在外边包裹一个<code v-pre>&lt;transition&gt;</code>标签，设置自定义的<code v-pre>name</code>，vue会根据元素的切换（进入/离开）过程添加相应的css类名，你可以<strong>自由地使用css类名来设置css过渡&amp;动画</strong>。</p>
<!-- more -->
<h2 id="过渡的类名" tabindex="-1"><a class="header-anchor" href="#过渡的类名" aria-hidden="true">#</a> 过渡的类名</h2>
<p>在进入/离开的过渡中，会有 6 个 class 切换。</p>
<p><strong>各类名的生命周期</strong></p>
<ul>
<li>
<p>进入</p>
<ul>
<li><code v-pre>v-enter</code> 只存在于第一帧</li>
<li><code v-pre>v-enter-active</code> 第一帧到最后一帧，结束后移除</li>
<li><code v-pre>v-enter-to</code> 第二帧到最后一帧，结束后移除</li>
</ul>
</li>
<li>
<p>离开</p>
<ul>
<li><code v-pre>v-leave</code> 只存在于第一帧</li>
<li><code v-pre>v-leave-active</code> 第一帧到最后一帧，结束后移除</li>
<li><code v-pre>v-leave-to</code> 第二帧到最后一帧，结束后移除</li>
</ul>
</li>
</ul>
<p>如果你使用一个没有<code v-pre>name</code>的<code v-pre>&lt;transition&gt;</code> ，则 <code v-pre>v-</code> 是这些类名的默认前缀。如果你使用了<code v-pre>name=&quot;fade&quot;</code>，那么 <code v-pre>v-</code> 前缀会替换为 <code v-pre>fade-</code>。</p>
<h3 id="组件中使用的示例" tabindex="-1"><a class="header-anchor" href="#组件中使用的示例" aria-hidden="true">#</a> 组件中使用的示例</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slide<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add-song<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
             ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code> .add-song
    &amp;.slide-enter-active<span class="token punctuation">,</span> &amp;.slide-leave-active
      <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s
    &amp;.slide-enter<span class="token punctuation">,</span> &amp;.slide-leave-to
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>100%<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue中使用animate-css库" tabindex="-1"><a class="header-anchor" href="#vue中使用animate-css库" aria-hidden="true">#</a> vue中使用Animate.css库</h2>
<h3 id="自定义过渡类名" tabindex="-1"><a class="header-anchor" href="#自定义过渡类名" aria-hidden="true">#</a> 自定义过渡类名</h3>
<p>我们可以通过以下 attribute 来自定义过渡类名：</p>
<ul>
<li><code v-pre>enter-class</code></li>
<li><code v-pre>enter-active-class</code></li>
<li><code v-pre>enter-to-class</code> (2.1.8+)</li>
<li><code v-pre>leave-class</code></li>
<li><code v-pre>leave-active-class</code></li>
<li><code v-pre>leave-to-class</code> (2.1.8+)</li>
</ul>
<!-- more -->
<p>他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 <a href="https://daneden.github.io/animate.css/" target="_blank" rel="noopener noreferrer">Animate.css<ExternalLinkIcon/></a>结合使用十分有用。</p>
<h2 id="使用animate-css库" tabindex="-1"><a class="header-anchor" href="#使用animate-css库" aria-hidden="true">#</a> 使用Animate.css库</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-classes-transition<span class="token punctuation">"</span></span>
            <span class="token attr-name">enter-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>animated tada<span class="token punctuation">"</span></span>
            <span class="token attr-name">leave-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>animated bounceOutRight<span class="token punctuation">"</span></span>
            <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按 <a href="https://github.com/daneden/animate.css" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a> 引入Animate.css库，再配合vue的自定义过渡类名，指定<code v-pre>enter-active-class</code>和<code v-pre>leave-active-class</code>的自定义类，两者都要有<code v-pre>animated</code>类，用于说明其使用的是Animate.css库，再根据需求定义另外一个<code v-pre>动画类名</code>。</p>
<p>动画类名：在 <a href="https://daneden.github.io/animate.css/" target="_blank" rel="noopener noreferrer">Animate官网<ExternalLinkIcon/></a> 获取。</p>
<h2 id="transition-group列表过渡" tabindex="-1"><a class="header-anchor" href="#transition-group列表过渡" aria-hidden="true">#</a> transition-group列表过渡</h2>
<h3 id="列表的进入-离开过渡" tabindex="-1"><a class="header-anchor" href="#列表的进入-离开过渡" aria-hidden="true">#</a> 列表的进入/离开过渡</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition-group</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ul<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token comment">&lt;!--tag转为ul--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in list<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!--子元素要有key--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：列表元素一定要有<code v-pre>key</code></p>
<!-- more -->
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.v-enter,.v-leave-to</span><span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-enter-active,.v-leave-active</span><span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表的排序过渡" tabindex="-1"><a class="header-anchor" href="#列表的排序过渡" aria-hidden="true">#</a> 列表的排序过渡</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.v-move</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

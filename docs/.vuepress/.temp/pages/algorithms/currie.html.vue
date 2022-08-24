<template><div><h1 id="函数柯里化" tabindex="-1"><a class="header-anchor" href="#函数柯里化" aria-hidden="true">#</a> 函数柯里化</h1>
<h3 id="什么是柯里化" tabindex="-1"><a class="header-anchor" href="#什么是柯里化" aria-hidden="true">#</a> 什么是柯里化？</h3>
<p>指的是将一个接受多个参数的函数 变为 接受一个参数返回一个函数的固定形式，这样便于再次调用</p>
<h3 id="柯里化的好处" tabindex="-1"><a class="header-anchor" href="#柯里化的好处" aria-hidden="true">#</a> 柯里化的好处</h3>
<ol>
<li>参数复用；2. 提前返回；3. 延迟计算/运行.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">curryingAdd</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> x <span class="token operator">+</span> y
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'curryingAdd(1)(2) '</span><span class="token punctuation">,</span> <span class="token function">curryingAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'_args'</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> 
    <span class="token keyword">const</span> _args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      _args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span>
      <span class="token keyword">return</span> fn
    <span class="token punctuation">}</span>
    
    fn<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> _args<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">sum<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=></span> sum <span class="token operator">+</span> cur<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fn
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">contxt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="js中经常使用的bind-实现的机制就是currying" tabindex="-1"><a class="header-anchor" href="#js中经常使用的bind-实现的机制就是currying" aria-hidden="true">#</a> js中经常使用的bind，实现的机制就是Currying.</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
 
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">_this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正常正则验证字符串-reg-test-txt" tabindex="-1"><a class="header-anchor" href="#正常正则验证字符串-reg-test-txt" aria-hidden="true">#</a> 正常正则验证字符串 reg.test(txt)</h3>
<blockquote>
<p>函数封装后</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token parameter">reg<span class="token punctuation">,</span> txt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// check(/\d+/g, 'test')       //false</span>
<span class="token comment">// check(/[a-z]+/g, 'test')    //true</span>

<span class="token comment">// Currying后</span>
<span class="token keyword">function</span> <span class="token function">curryingCheck</span><span class="token punctuation">(</span><span class="token parameter">reg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">txt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> hasNumber <span class="token operator">=</span> <span class="token function">curryingCheck</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>
<span class="token keyword">var</span> hasLetter <span class="token operator">=</span> <span class="token function">curryingCheck</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>
<span class="token comment">// hasNumber('test1')      // true</span>
<span class="token comment">// hasNumber('testtest')   // false</span>
<span class="token comment">// hasLetter('21212')      // false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

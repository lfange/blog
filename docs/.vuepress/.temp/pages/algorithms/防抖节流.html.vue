<template><div><h3 id="函数节流和防抖" tabindex="-1"><a class="header-anchor" href="#函数节流和防抖" aria-hidden="true">#</a> 函数节流和防抖</h3>
<blockquote>
<p>函数节流和防抖都是优化频繁执行的事件，它们的区别就是是否过程中需要函数返回获取结果，节流，超过设定时间才会执行一次，在执行过程中会需要函数执行.
防抖，事件最后一次执行</p>
</blockquote>
<h3 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h3>
<blockquote>
<p>n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效</p>
</blockquote>
<ul>
<li>滚动加载，加载更多或滚到底部监听</li>
<li>搜索框，搜索联想功能</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 简单版节流</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> oldtime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> newtime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>newtime <span class="token operator">-</span> oldtime <span class="token operator">>=</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
			oldtime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
	<span class="token keyword">let</span> starttime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> curTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 当前时间</span>
		<span class="token comment">// 从上一次到现在，还剩下多少多余时间</span>
		<span class="token keyword">let</span> remaining <span class="token operator">=</span> delay <span class="token operator">-</span> <span class="token punctuation">(</span>curTime <span class="token operator">-</span> starttime<span class="token punctuation">)</span> 
		<span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
		<span class="token keyword">let</span> args <span class="token operator">=</span> arguments
		<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>remaining <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
			starttime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> remaining<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h3>
<blockquote>
<p>n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时</p>
</blockquote>
<ul>
<li>搜索框搜索输入。只需用户最后一次输入完，再发送请求</li>
<li>手机号、邮箱验证输入检测</li>
<li>窗口大小resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 简单版防抖</span>
<span class="token keyword">function</span> <span class="token function">fangdou</span><span class="token punctuation">(</span><span class="token parameter">fns<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> timer
	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
		timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
			<span class="token function">fns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// return function() {</span>
	<span class="token comment">// 	const context = this</span>
	<span class="token comment">// 	const arg = arguments</span>
		
	<span class="token comment">// 	if (timer) clearTimeout(timer)</span>
	<span class="token comment">// 	timer = setTimeout(function(){</span>
	<span class="token comment">// 		fns.apply(context, arg)</span>
	<span class="token comment">// 	},delay)</span>
	<span class="token comment">// }</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> timeout<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// timeout 不为null</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> callNow <span class="token operator">=</span> <span class="token operator">!</span>timeout<span class="token punctuation">;</span> <span class="token comment">// 第一次会立即执行，以后只有事件执行后才会再次触发</span>
			timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

<template><div><h1 id="call-bind-apply" tabindex="-1"><a class="header-anchor" href="#call-bind-apply" aria-hidden="true">#</a> call bind apply</h1>
<h2 id="作用和区别" tabindex="-1"><a class="header-anchor" href="#作用和区别" aria-hidden="true">#</a> 作用和区别</h2>
<ol>
<li>apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；</li>
<li>apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；</li>
<li>apply 、 call 、bind 三者都可以利用后续参数传参；<br>
bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。</li>
</ol>
<ul>
<li>第二个参数的区别：
<ul>
<li>call的参数是直接放进去的，第二第三第n个参数全都用逗号分隔，直接放到后面obj.myFun.call(db,'成都',...'string' );</li>
<li>apply的所有参数都必须放在一个数组里面传进去  obj.myFun.apply(db,['成都', ..., 'string' ]);</li>
<li>bind除了返回是<strong>函数</strong>以外，它的参数和call 一样。<br>
当然，三者的参数不限定是string类型，允许是各种类型，包括函数 、 object 等等！</li>
</ul>
</li>
</ul>
<h2 id="apply、call" tabindex="-1"><a class="header-anchor" href="#apply、call" aria-hidden="true">#</a> apply、call</h2>
<p>在 javascript 中，call 和 apply 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部 this 的指向。
JavaScript 的一大特点是，函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Color</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
<span class="token class-name">Color</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"My color is "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">var</span> cColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">;</span>
cColor<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//My color is red</span>

<span class="token keyword">const</span> myfruits <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'yellow'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>call apply 使用cColor的方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cColor<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>myfruits<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//My color is yellow</span>
cColor<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>myfruits<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//My color is yellow</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证是否是数组" tabindex="-1"><a class="header-anchor" href="#验证是否是数组" aria-hidden="true">#</a> 验证是否是数组</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">functionisArray</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'[object Array]'</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义一个-log-方法-让它可以代理-console-log-方法" tabindex="-1"><a class="header-anchor" href="#定义一个-log-方法-让它可以代理-console-log-方法" aria-hidden="true">#</a> 定义一个 log 方法，让它可以代理 console.log 方法</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>console<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//1</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//1 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如果要给log打印加个前缀" tabindex="-1"><a class="header-anchor" href="#如果要给log打印加个前缀" aria-hidden="true">#</a> 如果要给log打印加个前缀</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  args<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">'log content: '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>console<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h2>
<p>bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数</p>
<h3 id="bind-1" tabindex="-1"><a class="header-anchor" href="#bind-1" aria-hidden="true">#</a> bind</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> unboundSlice <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>slice<span class="token punctuation">;</span>
<span class="token keyword">var</span> slice <span class="token operator">=</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>unboundSlice<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bind返回一个新函数调用</span>
<span class="token function">slice</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="call-bind-apply实现" tabindex="-1"><a class="header-anchor" href="#call-bind-apply实现" aria-hidden="true">#</a> call bind apply实现</h2>
<h3 id="call的实现" tabindex="-1"><a class="header-anchor" href="#call的实现" aria-hidden="true">#</a> call的实现</h3>
<p>通过对象属性的方式调用函数，这个函数里面的this指向这个对象
每次调用新增一个symbol属性，调用完毕删除
这个symbol属性就是调用mycall方法的函数
函数形参中使用...arg是将多个形参都塞到一个数组里，在函数内部使用arg这个变量时，就是包含所有形参的数组
在调用 context<a href="...arg">fn</a>时候，...arg是为了展开数组，依次传入参数调用函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'临时属性'</span><span class="token punctuation">)</span>
	context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>
	context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">)</span>
	<span class="token keyword">delete</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apply实现" tabindex="-1"><a class="header-anchor" href="#apply实现" aria-hidden="true">#</a> apply实现</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'临时属性'</span><span class="token punctuation">)</span>
	context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>
	context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">)</span>
	<span class="token keyword">delete</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bind实现" tabindex="-1"><a class="header-anchor" href="#bind实现" aria-hidden="true">#</a> bind实现</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>firstarg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
	<span class="token keyword">const</span> <span class="token function-variable function">bindFn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>secoundarg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> that<span class="token punctuation">.</span><span class="token function">myCall</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token operator">...</span>firstarg<span class="token punctuation">,</span> <span class="token operator">...</span>secoundarg<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	bindFn<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>that<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
	<span class="token keyword">return</span> bindFn
<span class="token punctuation">}</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">objThis<span class="token punctuation">,</span> <span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> thisFn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 存储源函数以及上方的params(函数参数)</span>
	<span class="token comment">// 对返回的函数 secondParams 二次传参</span>
	<span class="token keyword">let</span> <span class="token function-variable function">fToBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>secondParams</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'secondParams'</span><span class="token punctuation">,</span> secondParams<span class="token punctuation">,</span> <span class="token operator">...</span>secondParams<span class="token punctuation">)</span>
     <span class="token comment">// this是否是fToBind的实例 也就是返回的fToBind是否通过new调用</span>
		<span class="token keyword">const</span> isNew <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">fToBind</span>
    <span class="token comment">// new调用就绑定到this上,否则就绑定到传入的objThis上</span>
		<span class="token keyword">const</span> context <span class="token operator">=</span> isNew <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> <span class="token function">Object</span><span class="token punctuation">(</span>objThis<span class="token punctuation">)</span> 
    <span class="token comment">// 用call调用源函数绑定this的指向并传递参数,返回执行结果</span>
		<span class="token keyword">return</span> <span class="token function">thisFn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token operator">...</span>params<span class="token punctuation">,</span> <span class="token operator">...</span>secondParams<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
   <span class="token comment">// 复制源函数的prototype给fToBind</span>
	fToBind<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>thisFn<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> fToBind<span class="token punctuation">;</span> <span class="token comment">// 返回拷贝的函数</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> fnbind <span class="token operator">=</span> test<span class="token punctuation">.</span><span class="token function">myBind</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token function">fnbind</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span><span class="token function">myCall</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

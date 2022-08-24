<template><div><h1 id="组件传值" tabindex="-1"><a class="header-anchor" href="#组件传值" aria-hidden="true">#</a> 组件传值</h1>
<h2 id="父组件给子组件传值" tabindex="-1"><a class="header-anchor" href="#父组件给子组件传值" aria-hidden="true">#</a> 父组件给子组件传值</h2>
<p>父组件中，通过给子组件标签v-bind绑定属性的方式传入值</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentName</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ComponentName</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>如果不使用v-bind传入的值为字符串，使用v-bind绑定传入的值为表达式。</p>
</blockquote>
<!-- more -->
<p>子组件中，通过props对象接收值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 接收父组件传入值</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token operator">||</span> <span class="token operator">...</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单向数据流" tabindex="-1"><a class="header-anchor" href="#单向数据流" aria-hidden="true">#</a> 单向数据流</h3>
<p>所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。</p>
<p><strong>子组件不能直接修改父组件传入的值</strong></p>
<p>这里有两种常见的试图改变一个 prop 的情形：</p>
<ol>
<li>这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'initialCounter'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>initialCounter
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'size'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">normalizedSize</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子组件派发事件和值给父组件" tabindex="-1"><a class="header-anchor" href="#子组件派发事件和值给父组件" aria-hidden="true">#</a> 子组件派发事件和值给父组件</h2>
<p><a href="https://cn.vuejs.org/v2/guide/components.html#%E7%9B%91%E5%90%AC%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BA%8B%E4%BB%B6" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a></p>
<p>子组件通过<code v-pre>$emit</code>派发事件和值给父组件（值可以有多个）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'fnX'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- more -->
<p>父组件通过<code v-pre>v-on</code>绑定子组件派发的事件，并触发一个新的事件，新的事件内可以接收传来的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>ComponentName @fnX<span class="token operator">=</span><span class="token string">"fnY"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ComponentName<span class="token operator">></span>

<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token function">fnY</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="父组件调用子组件方法传入值" tabindex="-1"><a class="header-anchor" href="#父组件调用子组件方法传入值" aria-hidden="true">#</a> 父组件调用子组件方法传入值</h2>
<p>通过<code v-pre>ref</code>引用调用子组件内的方法并传入参数</p>
<p>父组件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>子组件标签  ref<span class="token operator">=</span><span class="token string">"refName"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>子组件标签<span class="token operator">></span>

<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fnX</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>refName<span class="token punctuation">.</span><span class="token function">fnY</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// 调用子组件方法并传入值</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fnY</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="兄弟组件传值" tabindex="-1"><a class="header-anchor" href="#兄弟组件传值" aria-hidden="true">#</a> 兄弟组件传值</h2>
<p>子组件1中把值传到父组件,父组件获取值传入子组件2</p>
<p>父组件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>子组件<span class="token number">1</span> @方法名x<span class="token operator">=</span><span class="token string">"方法名y"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>子组件<span class="token number">1</span><span class="token operator">></span>
<span class="token operator">&lt;</span>子组件<span class="token number">2</span> <span class="token operator">:</span>值名称x<span class="token operator">=</span><span class="token string">"值x"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>子组件<span class="token number">2</span> <span class="token operator">></span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
	 <span class="token literal-property property">值x</span><span class="token operator">:</span> <span class="token string">''</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token function">方法名y</span><span class="token punctuation">(</span><span class="token parameter">值</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>值x <span class="token operator">=</span> 值
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件1：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'方法名x'</span><span class="token punctuation">,</span> 值<span class="token punctuation">)</span> <span class="token comment">// 传出值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>子组件2：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">值名称x</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 接收父组件传入值</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="非父子组件间传值" tabindex="-1"><a class="header-anchor" href="#非父子组件间传值" aria-hidden="true">#</a> 非父子组件间传值</h2>
<p>当组件的嵌套多时，非父子组件间传值就显得复杂，除了使用<a href="https://vuex.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">vuex<ExternalLinkIcon/></a>实现之外，还可以通过Bus（或者叫 总线/发布订阅模式/观察者模式）的方式实现非父子组件间传值。</p>
<!-- more -->
<div id="root">
		<child1 content="组件1：点我传出值"></child1>
		<child2 content="组件2"></child2>
	</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child1</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>组件1：点我传出值<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child2</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>组件2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// 每个Vue原型上都会有bus属性,而且指向同一个Vue实例</span>
	Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'child1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">content</span><span class="token operator">:</span> String
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;button @click="handleClick">{{content}}&lt;/button>'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token string">'我是组件1过来的~'</span><span class="token punctuation">)</span> <span class="token comment">// 触发change事件，传出值</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'child2'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">childVal</span><span class="token operator">:</span> <span class="token string">''</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">content</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;button>{{content}} + {{childVal}}&lt;/button>'</span><span class="token punctuation">,</span>
		<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 绑定change事件，执行函数接收值</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>childVal <span class="token operator">=</span> msg
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#root'</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，在Vue原型上绑定一个<code v-pre>bus</code>属性，指向一个Vue实例，之后每个Vue实例都会有一个<code v-pre>bus</code>属性。</p>
<blockquote>
<p>此方法传值，不限于兄弟组件之间，其他关系组件间都适用。</p>
</blockquote>
</div></template>

import{_ as e,r as t,o as i,c,a as n,d as a,b as p,e as o}from"./app.e4e1650e.js";const l={},r=n("h1",{id:"crontab-\u5B9A\u65F6\u4EFB\u52A1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#crontab-\u5B9A\u65F6\u4EFB\u52A1","aria-hidden":"true"},"#"),a(" Crontab \u5B9A\u65F6\u4EFB\u52A1")],-1),d=n("h2",{id:"\u57FA\u672C\u6982\u5FF5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u672C\u6982\u5FF5","aria-hidden":"true"},"#"),a(" \u57FA\u672C\u6982\u5FF5")],-1),u=n("p",null,"Hyperf \u652F\u6301\u79D2\u7EA7\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5176\u5B9A\u65F6\u8BBE\u7F6E\u89C4\u5219\u4E0E Linux \u91CC\u7684 crontab \u529F\u80FD\u4E00\u81F4\u3002",-1),v={href:"https://hyperf.wiki/2.2/#/zh-cn/crontab",target:"_blank",rel:"noopener noreferrer"},b=o(`<h2 id="\u524D\u7F6E\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u6761\u4EF6" aria-hidden="true">#</a> \u524D\u7F6E\u6761\u4EF6</h2><p>\u5B9A\u65F6\u4EFB\u52A1\u4F9D\u8D56 Hyperf \u7684\u8FDB\u7A0B\u529F\u80FD\uFF0C\u662F\u542F\u52A8\u4E86\u4E00\u4E2A\u5E38\u9A7B\u8FDB\u7A0B\u6765\u8C03\u5EA6\u5B9A\u65F6\u4EFB\u52A1\u3002</p><p>\u6B64\u5916\uFF0CHyperf \u5B98\u65B9\u63D0\u4F9B\u7684\u5B9A\u65F6\u4EFB\u52A1\u6709\u4E00\u4E9B\u4E0D\u592A\u5408\u7406\u7684\u5730\u65B9\uFF0C\u56E0\u6B64\u6211\u4EEC\u7684\u6846\u67B6\u4E2D\u505A\u51FA\u4E86\u4E00\u4E9B\u9488\u5BF9\u6027\u7684\u6539\u8FDB\u3002</p><blockquote><p>\u5B98\u65B9\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u597D\u591A\u4E1C\u897F\u90FD\u653E\u5728\u6CE8\u89E3\u91CC\u9762\uFF0C\u7F16\u5199\u8D77\u6765\u592A\u75DB\u82E6\u4E86 QAQ</p></blockquote><p>\u56E0\u6B64\uFF0C\u8981\u8BA9\u5B9A\u65F6\u4EFB\u52A1\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u9700\u8981\u4FDD\u8BC1\u5982\u4E0B\u524D\u63D0\u6761\u4EF6\uFF1A</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u901A\u5E38\u60C5\u51B5\u4E0B, \u8FD9\u4E9B\u4E1C\u897F\u5DF2\u7ECF\u9ED8\u8BA4\u914D\u597D\u4E86, \u5982\u679C\u53D1\u73B0\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C, \u8BF7\u6309\u7167\u4E0B\u65B9\u5185\u5BB9\u9010\u4E00\u6392\u67E5\u3002</p></div><h3 id="\u6253\u5F00\u8FDB\u7A0B\u5F00\u5173" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u8FDB\u7A0B\u5F00\u5173" aria-hidden="true">#</a> \u6253\u5F00\u8FDB\u7A0B\u5F00\u5173</h3><p>\u5728 <code>config/autoload/process_config.php</code> \u4E2D\uFF0C \u4EE4 <code>enable</code> \u952E\u7684\u503C\u4E3A <code>true</code>\u3002<br> \u5373\u4EE4 <code>config(&#39;process_config.enable&#39;)</code> \u4E3A <code>true</code>\u3002</p><p>\u4E3A\u65B9\u4FBF\u914D\u7F6E\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E2A\u914D\u7F6E\u503C\u653E\u5230\u4E86 .env \u6587\u4EF6\u4E2D\u3002</p><p>\u4F8B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>// config/autoload/process_config.php

<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u5168\u5C40\u8FDB\u7A0B\u5F00\u5173</span>
    <span class="token string single-quoted-string">&#39;enable&#39;</span>     <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token keyword type-casting">bool</span><span class="token punctuation">)</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;PROCESS_ENABLE&quot;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// \u5C4F\u853D\u8FDB\u7A0B\u542F\u52A8</span>
    <span class="token string single-quoted-string">&#39;block_list&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>Process<span class="token punctuation">\\</span>DemoProcess</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>


</span></code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// .env

# \u5168\u5C40\u8FDB\u7A0B\u5F00\u5173
PROCESS_ENABLE=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F00\u542F\u5B9A\u65F6\u4EFB\u52A1\u8C03\u5EA6\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u5B9A\u65F6\u4EFB\u52A1\u8C03\u5EA6\u8FDB\u7A0B" aria-hidden="true">#</a> \u5F00\u542F\u5B9A\u65F6\u4EFB\u52A1\u8C03\u5EA6\u8FDB\u7A0B</h3><p>\u5728 <code>config/autoload/process.php</code> \u4E2D\uFF0C\u52A0\u5165\u5B9A\u65F6\u4EFB\u52A1\u8C03\u5EA6\u8FDB\u7A0B\u7C7B\uFF0C\u4F8B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">[</span>
  <span class="token class-name class-name-fully-qualified static-context">Hyperf<span class="token punctuation">\\</span>Crontab<span class="token punctuation">\\</span>Process<span class="token punctuation">\\</span>CrontabDispatcherProcess</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6253\u5F00\u5B9A\u65F6\u4EFB\u52A1\u5F00\u5173" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u5B9A\u65F6\u4EFB\u52A1\u5F00\u5173" aria-hidden="true">#</a> \u6253\u5F00\u5B9A\u65F6\u4EFB\u52A1\u5F00\u5173</h3><p>\u5728 <code>config/autoload/crontab.php</code> \u4E2D\uFF0C\u4EE4 <code>enable</code> \u952E\u7684\u503C\u4E3A <code>true</code>\u3002<br> \u5373\u4EE4 <code>config(&#39;crontab.enable&#39;)</code> \u4E3A <code>true</code>\u3002</p><p>\u4E3A\u65B9\u4FBF\u914D\u7F6E\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E2A\u914D\u7F6E\u503C\u653E\u5230\u4E86 .env \u6587\u4EF6\u4E2D\u3002</p><p>\u4F8B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// config/autoload/crontab.php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>

    <span class="token comment">// \u662F\u5426\u5F00\u542F\u5B9A\u65F6\u4EFB\u52A1</span>
    <span class="token string single-quoted-string">&#39;enable&#39;</span>     <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token keyword type-casting">bool</span><span class="token punctuation">)</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;CRONTAB_ENABLE&quot;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token string single-quoted-string">&#39;crontab&#39;</span>    <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u5C4F\u853D\u542F\u52A8</span>
    <span class="token string single-quoted-string">&#39;block_list&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>Crontab<span class="token punctuation">\\</span>Demo<span class="token punctuation">\\</span>DemoEchoCron</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// .env

# \u5168\u5C40\u5B9A\u65F6\u5F00\u5173
CRONTAB_ENABLE=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u76EE\u5F55\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u89C4\u8303" aria-hidden="true">#</a> \u76EE\u5F55\u89C4\u8303</h2><h3 id="\u5B58\u653E\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B58\u653E\u4F4D\u7F6E" aria-hidden="true">#</a> \u5B58\u653E\u4F4D\u7F6E</h3><p>\u5B9A\u65F6\u4EFB\u52A1\u4EE3\u7801\uFF0C\u4F4D\u4E8E app/Crontab \u76EE\u5F55\u3002</p><h3 id="\u591A\u7AEF\u524D\u7F00" tabindex="-1"><a class="header-anchor" href="#\u591A\u7AEF\u524D\u7F00" aria-hidden="true">#</a> \u591A\u7AEF\u524D\u7F00</h3><p>\u6B64\u5904\u76EE\u5F55\u524D\u7F00\u89C4\u8303\u4E0E Controller \u63A7\u5236\u5668\u4E00\u81F4\u3002</p><h3 id="\u529F\u80FD\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u6A21\u5757" aria-hidden="true">#</a> \u529F\u80FD\u6A21\u5757</h3><p>\u6B64\u5904\u76EE\u5F55\u89C4\u8303\u4E0E Controller \u63A7\u5236\u5668\u4E00\u81F4\u3002</p><p>\u7C7B\u540D\u4EE5 Cron \u4E3A\u540E\u7F00\u3002</p><h2 id="\u4EE3\u7801\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u89C4\u8303" aria-hidden="true">#</a> \u4EE3\u7801\u89C4\u8303</h2><h3 id="\u57FA\u672C\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6846\u67B6" aria-hidden="true">#</a> \u57FA\u672C\u6846\u67B6</h3><p>\u4E0B\u65B9\u662F\u4E00\u4E2A\u6700\u5C0F\u5316\u7684 Crontab \u4EE3\u7801\u7247\u6BB5</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Crontab<span class="token punctuation">\\</span>Demo</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Concern<span class="token punctuation">\\</span>Hyperf<span class="token punctuation">\\</span>Crontab<span class="token punctuation">\\</span>AbstractCrontab</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Hyperf<span class="token punctuation">\\</span>Crontab<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>Crontab</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Crontab()
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">DemoEchoCron</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractCrontab</span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token variable">$rule</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;* * * * * *&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">execute</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF1A</p><ul><li>\u901A\u8FC7\u6CE8\u89E3 <code>@Crontab</code> \u6765\u6807\u8BC6\u5B83\u662F\u4E00\u4EFD\u5B9A\u65F6\u4EFB\u52A1\u4EE3\u7801</li><li>\u7EE7\u627F <code>\\App\\Concern\\Hyperf\\Crontab\\AbstractCrontab</code> \u7C7B\u540D</li><li><code>$rule</code> \u662F\u5B9A\u65F6\u89C4\u5219</li><li><code>function execute ()</code> \u662F\u6267\u884C\u7684\u4EE3\u7801\u5165\u53E3</li></ul><h3 id="\u5BF9\u5E94\u7684\u547D\u4EE4\u884C\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u5E94\u7684\u547D\u4EE4\u884C\u5165\u53E3" aria-hidden="true">#</a> \u5BF9\u5E94\u7684\u547D\u4EE4\u884C\u5165\u53E3</h3><p>\u4E3A\u4E86\u65B9\u4FBF\u8FDB\u884C\u529F\u80FD\u8C03\u8BD5\uFF0C\u4EE5\u53CA\u5FC5\u8981\u7684\u65F6\u5019\u624B\u52A8\u89E6\u53D1\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5BF9\u4E8E\u6240\u6709\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u9700\u8981\u6709\u4E00\u4EFD\u529F\u80FD\u5B8C\u5168\u76F8\u540C\u7684\u547D\u4EE4\u884C\u3002</p><h3 id="\u4E1A\u52A1\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u4EE3\u7801" aria-hidden="true">#</a> \u4E1A\u52A1\u4EE3\u7801</h3><p>\u4E0E\u547D\u4EE4\u884C\u89C4\u5219\u4E00\u81F4\u3002</p><h2 id="\u6452\u5F03\u7684\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u6452\u5F03\u7684\u65B9\u6848" aria-hidden="true">#</a> \u6452\u5F03\u7684\u65B9\u6848</h2><h3 id="\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u5B9A\u4E49\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u5B9A\u4E49\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> \u274C \u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u5B9A\u4E49\u5B9A\u65F6\u4EFB\u52A1</h3><p>\u7406\u7531\uFF1A\u4E0D\u65B9\u4FBF\u7EF4\u62A4\u3002</p><h3 id="\u5B98\u65B9\u793A\u4F8B\u7684\u5B9A\u65F6\u4EFB\u52A1\u7F16\u5199\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B98\u65B9\u793A\u4F8B\u7684\u5B9A\u65F6\u4EFB\u52A1\u7F16\u5199\u65B9\u5F0F" aria-hidden="true">#</a> \u274C \u5B98\u65B9\u793A\u4F8B\u7684\u5B9A\u65F6\u4EFB\u52A1\u7F16\u5199\u65B9\u5F0F</h3><p>\u7406\u7531\uFF1A\u5F88\u591A\u4E1C\u897F\u5199\u5728\u6CE8\u89E3\u91CC\u9762\uFF0C\u4E0D\u65B9\u4FBF\u7F16\u5199\u4E5F\u4E0D\u65B9\u4FBF\u9605\u8BFB\u3002</p>`,44);function h(k,m){const s=t("ExternalLinkIcon");return i(),c("div",null,[r,d,u,n("p",null,[a("\u66F4\u591A\u7EC6\u8282\u5185\u5BB9\u8BF7\u67E5\u770B "),n("a",v,[a("\u5B98\u65B9\u6587\u6863"),p(s)])]),b])}const f=e(l,[["render",h],["__file","crontab.html.vue"]]);export{f as default};
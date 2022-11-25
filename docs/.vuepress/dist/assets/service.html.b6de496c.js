import{_ as e,o as a,c as n,e as i}from"./app.297635da.js";const s={},r=i(`<h1 id="service-\u4E1A\u52A1\u5C42" tabindex="-1"><a class="header-anchor" href="#service-\u4E1A\u52A1\u5C42" aria-hidden="true">#</a> Service \u4E1A\u52A1\u5C42</h1><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4E0B\u5217\u63D0\u5230\u7684\u9879\u76EE\u4FE1\u606F\u4EC5\u4F9B\u793A\u8303\uFF0C\u4EE5\u5B9E\u9645\u9879\u76EE\u4E3A\u51C6</p></div><h2 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u57FA\u672C\u6982\u5FF5</h2><p>\u4E1A\u52A1\u5C42\u7528\u4E8E\u7F16\u5199\u5B9E\u9645\u7684\u4E1A\u52A1\u903B\u8F91\u3002</p><h2 id="\u76EE\u5F55\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u89C4\u8303" aria-hidden="true">#</a> \u76EE\u5F55\u89C4\u8303</h2><p>\u4E1A\u52A1\u4F4D\u4E8E Service \u76EE\u5F55\u4E0B\u3002</p><h3 id="\u591A\u7AEF\u524D\u7F00" tabindex="-1"><a class="header-anchor" href="#\u591A\u7AEF\u524D\u7F00" aria-hidden="true">#</a> \u591A\u7AEF\u524D\u7F00</h3><p>\u6B64\u5904\u76EE\u5F55\u524D\u7F00\u89C4\u8303\u4E0E Controller \u63A7\u5236\u5668\u4E00\u81F4\u3002</p><h3 id="\u529F\u80FD\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u6A21\u5757" aria-hidden="true">#</a> \u529F\u80FD\u6A21\u5757</h3><p>\u6B64\u5904\u76EE\u5F55\u89C4\u8303\u4E0E Controller \u63A7\u5236\u5668\u4E00\u76F4\u3002</p><p>\u6587\u4EF6\u540D\u5747\u4EE5 Service.php \u4E3A\u540E\u7F00\u3002</p><p>\u4F8B\uFF1A</p><p>\u7BA1\u7406\u540E\u53F0-\u6D3B\u52A8\u53C2\u4E0E-\u67E5\u8BE2\u7684\u76EE\u5F55\uFF0C\u53EF\u4EE5\u6709\u4E0B\u9762\u51E0\u79CD\u5206\u6CD5</p><p><code>/app/Service/Manage/Activity/ActivityRecordQueryService.php</code></p><p><code>/app/Service/Manage/Activity/Record/RecordQueryService.php</code></p><p><code>/app/Service/Manage/Activity/RecordQueryService.php</code></p><h4 id="\u5355\u4E00\u529F\u80FD\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E00\u529F\u80FD\u539F\u5219" aria-hidden="true">#</a> \u5355\u4E00\u529F\u80FD\u539F\u5219</h4><p>\u5728\u903B\u8F91\u8F83\u4E3A\u590D\u6742\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2AService\u5E94\u5F53\u4E13\u6CE8\u5B8C\u6210\u4E00\u79CD\u751A\u81F3\u662F\u4E00\u4E2A\u4E1A\u52A1\u903B\u8F91\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u4E2A\u7C7B\u53EA\u6709\u4E00\u4E2A\u64CD\u4F5C\u662F\u53EF\u80FD\u7684\u3002</p><p>\u4E0D\u5FC5\u62C5\u5FC3\u8FD9\u79CD\u8BBE\u8BA1\u4F1A\u8BA9\u4EE3\u7801\u770B\u8D77\u6765\u5F88\u7B80\u964B\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u590D\u6742\u7684\u903B\u8F91\uFF0C\u5FC5\u5B9A\u5305\u542B\u5927\u91CF\u7684\u79C1\u6709\u65B9\u6CD5\u3002\u56E0\u6B64\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5373\u4F7F\u4E00\u4E2A\u7C7B\u4E2D\u53EA\u6709\u4E00\u4E2A\u64CD\u4F5C\uFF08\u516C\u6709\u65B9\u6CD5\uFF09\uFF0C\u4F46\u7531\u4E8E\u6709\u591A\u4E2A\u79C1\u6709\u65B9\u6CD5\uFF0C\u6240\u4EE5\u5B9E\u9645\u4E0A\u5B83\u5E76\u4E0D\u7B80\u964B\u3002</p><h5 id="\u4F8B-\u4E00\u79CD\u4E1A\u52A1\u903B\u8F91\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u4F8B-\u4E00\u79CD\u4E1A\u52A1\u903B\u8F91\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u4F8B\uFF1A\u4E00\u79CD\u4E1A\u52A1\u903B\u8F91\u7684\u60C5\u51B5</h5><p>\u67E5\u8BE2\u76F8\u5173\u653E\u5728 *QueryService.php \u91CC</p><p>\u5BFC\u51FA\u76F8\u5173\u653E\u5728 *ExportService.php \u91CC</p><h5 id="\u4F8B-\u4E00\u4E2A\u4E1A\u52A1\u903B\u8F91\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u4F8B-\u4E00\u4E2A\u4E1A\u52A1\u903B\u8F91\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u4F8B\uFF1A \u4E00\u4E2A\u4E1A\u52A1\u903B\u8F91\u7684\u60C5\u51B5</h5><p>\u6D3B\u52A8\u62A5\u540D\u8BA2\u5355\u652F\u4ED8 ActivityOrderPayService::handle</p><h2 id="\u4EE3\u7801\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u89C4\u8303" aria-hidden="true">#</a> \u4EE3\u7801\u89C4\u8303</h2><h3 id="\u8FD4\u56DE-resultvo-\u503C\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE-resultvo-\u503C\u5BF9\u8C61" aria-hidden="true">#</a> \u8FD4\u56DE ResultVo \u503C\u5BF9\u8C61</h3><p>Service\u5C42\u7684\u516C\u6709\u51FD\u6570\uFF0C\u8FD4\u56DE ResultVo \u503C\u5BF9\u8C61\u3002</p><h3 id="\u51FD\u6570\u540D\u548C\u53D8\u91CF\u540D" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u540D\u548C\u53D8\u91CF\u540D" aria-hidden="true">#</a> \u51FD\u6570\u540D\u548C\u53D8\u91CF\u540D</h3><p>\u51FD\u6570\u540D\u548C\u53D8\u91CF\u540D\uFF0C\u7EDF\u4E00\u4F7F\u7528\u9A7C\u5CF0\u547D\u540D\u6CD5\uFF0C\u901A\u5E38\u9996\u5B57\u6BCD\u5C0F\u5199\u3002</p><p>\u5E38\u91CF\uFF0C\u91C7\u7528\u5168\u5927\u5199\u7684\u4E0B\u5212\u7EBF\u547D\u540D\u3002</p><p>\u4F8B\u5916\uFF1A</p><ul><li>\u6210\u5458\u53D8\u91CF\uFF0C\u5982\u679C\u5B83\u7684\u7528\u9014\u662F\u4E00\u4E2A\u914D\u7F6E\uFF0C\u90A3\u4E48\u91C7\u7528\u4E0B\u5212\u7EBF\u547D\u540D\u6CD5\u3002</li><li>\u5BF9\u8C61\u6CE8\u5165\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u590D\u5236\uFF0C\u5176\u53D8\u91CF\u540D\u901A\u5E38\u4E0E\u6CE8\u5165\u7C7B\u540D\u4E00\u81F4\uFF0C\u81EA\u7136\u800C\u7136\u9996\u5B57\u6BCD\u4E5F\u662F\u5927\u5199\u3002</li></ul><p>\u5E38\u7528\u8BCD\u7F29\u5199\u89C6\u4E3A\u6B63\u5E38\u5355\u8BCD\uFF0C\u4F8B\u5982 Json\u3001Xml\u3001Html\u3001Id\u3001Tcp\u3002</p><p>\u4E0D\u8981\u968F\u610F\u5236\u9020\u7F29\u5199\uFF0C\u4E0D\u7136\u5176\u4ED6\u4EBA\u770B\u4E0D\u61C2\uFF0C\u540D\u5B57\u957F\u4E00\u70B9\u4E5F\u6CA1\u6709\u95EE\u9898\u7684\uFF0C\u53CD\u6B63\u6709\u81EA\u52A8\u8865\u5168\u3002</p><p><strong>\u53CD\u4F8B\uFF1A</strong></p><ul><li>\u62D2\u4ED8\uFF1Adishonor -&gt; dis</li></ul><p>\u4F18\u5148\u91C7\u7528\u82F1\u8BED\u547D\u540D\uFF0C\u82E5\u5B9E\u5728\u60F3\u4E0D\u5230\u7B26\u5408\u542B\u4E49\u7684\u82F1\u6587\u540D\u79F0\uFF0C\u53EF\u9000\u800C\u91C7\u7528\u62FC\u97F3\u547D\u540D\u3002</p><p>\u53D8\u91CF\u3001\u65B9\u6CD5\u540D\u9650\u5236\u4F7F\u7528ASCII\u5B57\u7B26\u3002</p><p>public \u51FD\u6570\u3001\u53D8\u91CF\u65E0\u524D\u7F00\uFF0C\u4F8B\uFF1A <code>Foo::bar()</code>\u3002</p><p>protected \u51FD\u6570\u3001\u53D8\u91CF\u5355\u4E0B\u5212\u7EBF\u524D\u7F00\uFF0C\u4F8B\uFF1A<code>Foo::_bar()</code> \u3002</p><p>private \u51FD\u6570\u3001\u53D8\u91CF\u53CC\u4E0B\u5212\u7EBF\u524D\u7F00\uFF0C\u4F8B\uFF1A<code>Foo::__bar()</code> \u3002</p><h3 id="\u4EE3\u7801\u5F15\u7528\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5F15\u7528\u9650\u5236" aria-hidden="true">#</a> \u4EE3\u7801\u5F15\u7528\u9650\u5236</h3><p>Service\u5C42\u4E0D\u80FD\u8C03\u7528\u6BD4\u81EA\u5DF1\u4E0A\u4E00\u5C42\u7684\u4EE3\u7801\uFF0C\u4F8B\u5982\u6240\u6709\u7684\u5165\u53E3\u4EE3\u7801</p><ul><li><p>Controller \u63A7\u5236\u5668</p></li><li><p>Command \u547D\u4EE4</p></li><li><p>Process \u8FDB\u7A0B</p></li><li><p>Crontab \u5B9A\u65F6\u4EFB\u52A1</p></li><li><p>\u2026\u2026</p></li></ul><p>Service\u5C42\u53EF\u4EE5\u8C03\u7528\u540C\u4E00\u5C42\u7EA7\uFF08\u5373Service\u5C42\uFF09\u7684\u4EE3\u7801\uFF0C\u4F46\u4E0D\u63D0\u5021\u6CE8\u5165\u6210\u5458\u53D8\u91CF\uFF0C\u5BB9\u6613\u4EA7\u751F\u5FAA\u73AF\u4F9D\u8D56\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7<code>di</code>\u51FD\u6570\u83B7\u53D6\u6307\u5B9A\u5BF9\u8C61\u5E76\u8C03\u7528\u3002</p><p>Service\u5C42\u53EF\u4EE5\u8C03\u7528\u4E0B\u5C42\u7EA7\u7684\u4EE3\u7801\uFF0C\u4F8B\u5982Model\u5C42\u7684\u4EE3\u7801\uFF0C\u63D0\u5021\u6CE8\u5165\uFF0C\u4E5F\u53EF\u4EE5\u7528 <code>di</code> \u51FD\u6570\u3002</p><ul><li>Dao \u6570\u636E\u8BBF\u95EE\u5BF9\u8C61</li><li>Entity \u6570\u636E\u5B9E\u4F53</li><li>\u2026\u2026</li></ul><h3 id="\u914D\u7F6E-config-\u8BFB\u53D6\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-config-\u8BFB\u53D6\u65B9\u5F0F" aria-hidden="true">#</a> \u914D\u7F6E config \u8BFB\u53D6\u65B9\u5F0F</h3><p>\u914D\u7F6E\u8BFB\u53D6\u7EDF\u4E00\u91C7\u7528 @Value \u6CE8\u5165\uFF0C\u4E0D\u5EFA\u8BAE\u7528 config \u51FD\u6570\u3002</p><p>\u56E0\u4E3A\u6CE8\u5165\u53EF\u4EE5\u5728\u542F\u52A8\u7684\u65F6\u5019\u68C0\u67E5\uFF0C\u6709\u65E0\u758F\u6F0F\u7684\u914D\u7F6E\uFF0Cconfig \u51FD\u6570\u53EA\u6709\u6267\u884C\u5230\u624D\u80FD\u53D1\u73B0\u95EE\u9898\u3002</p><p>\u4F8B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">ImageActionService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     * @Value(key=&quot;app_base_url&quot;)
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$app_base_url</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     * @Value(key=&quot;qiniu.default.access_key&quot;)
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$access_key</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     * @Value(key=&quot;qiniu.default.secret_key&quot;)
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$secret_key</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E0D\u8981\u5728\u4EE3\u7801\u4E2D\u7528-env-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u8981\u5728\u4EE3\u7801\u4E2D\u7528-env-\u51FD\u6570" aria-hidden="true">#</a> \u4E0D\u8981\u5728\u4EE3\u7801\u4E2D\u7528 env \u51FD\u6570</h3><p>\u5728 /config/ \u76EE\u5F55\u4E0B\u7684\u914D\u7F6E\uFF0C\u53EF\u4EE5\u7528 env \u51FD\u6570\u8BFB\u53D6\u73AF\u5883\u53D8\u91CF\u3002</p><p>\u4F46 /app/ \u4E0B\u7684\u4EE3\u7801\uFF0C\u5E94\u5F53\u8BFB\u53D6 /config/ \u76EE\u5F55\u4E0B\u7684\u914D\u7F6E\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u901A\u8FC7 env \u8BFB\u53D6\u3002</p><p>\u8FD9\u662F\u4E3A\u4E86\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6DF7\u4E71\u3002</p>`,58),c=[r];function p(d,l){return a(),n("div",null,c)}const t=e(s,[["render",p],["__file","service.html.vue"]]);export{t as default};

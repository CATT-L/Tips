import{_ as s,o as a,c as e,e as n}from"./app.326f5f8c.js";const i={},d=n(`<h1 id="centos-\u5B89\u88C5-squid-\u5B9E\u73B0-http-\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#centos-\u5B89\u88C5-squid-\u5B9E\u73B0-http-\u4EE3\u7406" aria-hidden="true">#</a> CentOS \u5B89\u88C5 Squid \u5B9E\u73B0 HTTP \u4EE3\u7406</h1><h4 id="\u5B89\u88C5squid" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5squid" aria-hidden="true">#</a> \u5B89\u88C5squid</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> squid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/squid/squid.conf

<span class="token comment"># \u8FDB\u5165\u6587\u4EF6\u6309\u9700\u4FEE\u6539\u5982\u4E0B\u914D\u7F6E</span>
<span class="token comment"># -----------------------------</span>

http_port <span class="token number">12345</span> <span class="token comment"># \u4EE3\u7406\u670D\u52A1\u7AEF\u53E3\u53F7</span>

<span class="token comment"># \u5BC6\u7801\u6821\u9A8C</span>
auth_param basic program /usr/lib64/squid/basic_ncsa_auth /etc/squid/passwords
acl auth_user proxy_auth REQUIRED

<span class="token comment"># \u5141\u8BB8\u5E26\u5BC6\u7801\u7528\u6237\u4F7F\u7528\u4EE3\u7406</span>
http_access allow auth_user

<span class="token comment"># \u6CE8: \u4E0A\u8FF0\u6388\u6743\u4EE3\u7801 \u8981\u653E\u5728 http_access deny all \u4E4B\u524D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u521B\u5EFA\u5BC6\u7801\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5BC6\u7801\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u5BC6\u7801\u6587\u4EF6</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>htpasswd <span class="token parameter variable">-c</span> <span class="token parameter variable">-d</span> /etc/squid/passwords \u7528\u6237\u540D

<span class="token comment"># \u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u6307\u4EE4,\u53EF\u901A\u8FC7\u4E0B\u5217\u8BED\u53E5\u5B89\u88C5</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u542F\u7528squid\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528squid\u670D\u52A1" aria-hidden="true">#</a> \u542F\u7528squid\u670D\u52A1</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> squid start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u5BA2\u6237\u7AEF\u4F7F\u7528\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u4F7F\u7528\u4EE3\u7406" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF\u4F7F\u7528\u4EE3\u7406</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> cip.cc <span class="token parameter variable">--proxy</span> user:password@127.0.0.1:12345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),l=[d];function c(r,t){return a(),e("div",null,l)}const o=s(i,[["render",c],["__file","CentOS \u5B89\u88C5 Squid \u5B9E\u73B0 HTTP \u4EE3\u7406.html.vue"]]);export{o as default};

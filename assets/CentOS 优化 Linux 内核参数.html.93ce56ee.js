import{_ as e,o as n,c as i,e as s}from"./app.326f5f8c.js";const a={},l=s(`<h1 id="centos-\u4F18\u5316-linux-\u5185\u6838\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#centos-\u4F18\u5316-linux-\u5185\u6838\u53C2\u6570" aria-hidden="true">#</a> CentOS \u4F18\u5316 Linux \u5185\u6838\u53C2\u6570</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/sysctl.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u672B\u5C3E\u8FFD\u52A0\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># Add
net.ipv4.tcp_max_syn_backlog = 65536
net.core.netdev_max_backlog =  32768
net.core.somaxconn = 32768

net.core.wmem_default = 8388608
net.core.rmem_default = 8388608
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216

net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syn_retries = 2

net.ipv4.tcp_tw_recycle = 1
#net.ipv4.tcp_tw_len = 1
net.ipv4.tcp_tw_reuse = 1

net.ipv4.tcp_mem = 94500000 915000000 927000000
net.ipv4.tcp_max_orphans = 3276800

#net.ipv4.tcp_fin_timeout = 30
#net.ipv4.tcp_keepalive_time = 120
net.ipv4.ip_local_port_range = 1024  65535
fs.file-max = 65536
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u914D\u7F6E\u7ACB\u5373\u751F\u6548</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),c=[l];function d(t,v){return n(),i("div",null,c)}const m=e(a,[["render",d],["__file","CentOS \u4F18\u5316 Linux \u5185\u6838\u53C2\u6570.html.vue"]]);export{m as default};

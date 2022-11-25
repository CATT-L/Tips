import{_ as i,o as n,c as e,e as l}from"./app.8bf42852.js";const s={},t=l(`<h1 id="centos-\u4FEE\u6539-vim-\u7F16\u8F91\u5668\u914D\u8272" tabindex="-1"><a class="header-anchor" href="#centos-\u4FEE\u6539-vim-\u7F16\u8F91\u5668\u914D\u8272" aria-hidden="true">#</a> CentOS \u4FEE\u6539 Vim \u7F16\u8F91\u5668\u914D\u8272</h1><p>\u7F16\u8F91 <code>~/.vimrc</code>, \u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>set nocompatible
set t_Co=256    &quot; \u5F00\u542F256\u8272\u652F\u6301
set nu			&quot; \u5F00\u542F\u884C\u53F7\u663E\u793A
set cindent
set autoindent
set tabstop=4
set shiftwidth=4
set softtabstop=4

&quot; \u7F29\u8FDB\u5B57\u7B26\u663E\u793A
set list listchars=tab:\\|\xB7

&quot; \u5F00\u542F\u8BED\u6CD5\u9AD8\u4EAE
syntax on

&quot; \u8BBE\u7F6E\u9AD8\u4EAE\u884C\u5217
set cursorcolumn
set cursorline

&quot; \u8BBE\u7F6E\u989C\u8272\u914D\u7F6E
highlight CursorLine cterm=bold  ctermbg=234 ctermfg=None guibg=NONE guifg=NONE
highlight CursorColumn cterm=bold ctermbg=234 ctermfg=207 guibg=NONE guifg=NONE
highlight comment ctermfg=198,darkgray
highlight LineNr ctermfg=198,darkgray


hi CursorLine cterm=bold  ctermbg=234 ctermfg=None guibg=NONE guifg=NONE
hi comment ctermfg=242
hi LineNr ctermfg=102 ctermbg=237 cterm=NONE guifg=#90908a guibg=#3c3d37 gui=NONE
hi Number ctermfg=141 ctermbg=NONE cterm=NONE guifg=#ae81ff guibg=NONE gui=NONE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u8FD8\u6709\u62EC\u53F7\u8865\u5168\u7684, \u4F46\u662F\u8FD8\u6709\u95EE\u9898, \u4E0D\u597D\u4F7F</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>&quot; \u62EC\u53F7\u8865\u5168
inoremap ( ()&lt;Esc&gt;i
inoremap [ []&lt;Esc&gt;i
inoremap { {&lt;CR&gt;}&lt;Esc&gt;O
autocmd Syntax html,vim inoremap &lt; &lt;lt&gt;&gt;&lt;Esc&gt;i| inoremap &gt; &lt;c-r&gt;=ClosePair(&#39;&gt;&#39;)&lt;CR&gt;
inoremap ) &lt;c-r&gt;=ClosePair(&#39;)&#39;)&lt;CR&gt;
inoremap ] &lt;c-r&gt;=ClosePair(&#39;]&#39;)&lt;CR&gt;
inoremap } &lt;c-r&gt;=CloseBracket()&lt;CR&gt;
inoremap &quot; &lt;c-r&gt;=QuoteDelim(&#39;&quot;&#39;)&lt;CR&gt;
inoremap &#39; &lt;c-r&gt;=QuoteDelim(&quot;&#39;&quot;)&lt;CR&gt;

function ClosePair(char)
	if etline(&#39;.&#39;)[col(&#39;.&#39;) - 1] == a:char
	return &quot;\\&lt;Right&gt;&quot;
	else
	return a:char
	endif
endf

function CloseBracket()
	if match(getline(line(&#39;.&#39;) + 1), &#39;\\s*}&#39;) &lt; 0
	return &quot;\\&lt;CR&gt;}&quot;
	else
	return &quot;\\&lt;Esc&gt;j0f}a&quot;
	endif
endf

function QuoteDelim(char)
	let line = getline(&#39;.&#39;)
	let col = col(&#39;.&#39;)
	if line[col - 2] == &quot;\\\\&quot;
	return a:char
	elseif line[col - 1] == a:char
	return &quot;\\&lt;Right&gt;&quot;
	else
	return a:char.a:char.&quot;\\&lt;Esc&gt;i&quot;
	endif
endf

func SkipPair()  
    if getline(&#39;.&#39;)[col(&#39;.&#39;) - 1] == &#39;)&#39; || getline(&#39;.&#39;)[col(&#39;.&#39;) - 1] == &#39;]&#39; || getline(&#39;.&#39;)[col(&#39;.&#39;) - 1] == &#39;&quot;&#39; || getline(&#39;.&#39;)[col(&#39;.&#39;) - 1] == &quot;&#39;&quot; || getline(&#39;.&#39;)[col(&#39;.&#39;) - 1] == &#39;}&#39;  
        return &quot;\\&lt;ESC&gt;la&quot;  
    else  
        return &quot;\\t&quot;  
    endif  
endfunc  

&quot; \u5C06tab\u952E\u7ED1\u5B9A\u4E3A\u8DF3\u51FA\u62EC\u53F7  
inoremap &lt;TAB&gt; &lt;c-r&gt;=SkipPair()&lt;CR&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[t];function r(c,v){return n(),e("div",null,d)}const u=i(s,[["render",r],["__file","CentOS \u4FEE\u6539 Vim \u7F16\u8F91\u5668\u914D\u8272.html.vue"]]);export{u as default};

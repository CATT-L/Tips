# CentOS 修改 Vim 编辑器配色

编辑 `~/.vimrc`, 输入以下内容

```conf
set nocompatible
set t_Co=256    " 开启256色支持
set nu			" 开启行号显示
set cindent
set autoindent
set tabstop=4
set shiftwidth=4
set softtabstop=4

" 缩进字符显示
set list listchars=tab:\|·

" 开启语法高亮
syntax on

" 设置高亮行列
set cursorcolumn
set cursorline

" 设置颜色配置
highlight CursorLine cterm=bold  ctermbg=234 ctermfg=None guibg=NONE guifg=NONE
highlight CursorColumn cterm=bold ctermbg=234 ctermfg=207 guibg=NONE guifg=NONE
highlight comment ctermfg=198,darkgray
highlight LineNr ctermfg=198,darkgray


hi CursorLine cterm=bold  ctermbg=234 ctermfg=None guibg=NONE guifg=NONE
hi comment ctermfg=242
hi LineNr ctermfg=102 ctermbg=237 cterm=NONE guifg=#90908a guibg=#3c3d37 gui=NONE
hi Number ctermfg=141 ctermbg=NONE cterm=NONE guifg=#ae81ff guibg=NONE gui=NONE

```



下面还有括号补全的, 但是还有问题, 不好使

```conf
" 括号补全
inoremap ( ()<Esc>i
inoremap [ []<Esc>i
inoremap { {<CR>}<Esc>O
autocmd Syntax html,vim inoremap < <lt>><Esc>i| inoremap > <c-r>=ClosePair('>')<CR>
inoremap ) <c-r>=ClosePair(')')<CR>
inoremap ] <c-r>=ClosePair(']')<CR>
inoremap } <c-r>=CloseBracket()<CR>
inoremap " <c-r>=QuoteDelim('"')<CR>
inoremap ' <c-r>=QuoteDelim("'")<CR>

function ClosePair(char)
	if etline('.')[col('.') - 1] == a:char
	return "\<Right>"
	else
	return a:char
	endif
endf

function CloseBracket()
	if match(getline(line('.') + 1), '\s*}') < 0
	return "\<CR>}"
	else
	return "\<Esc>j0f}a"
	endif
endf

function QuoteDelim(char)
	let line = getline('.')
	let col = col('.')
	if line[col - 2] == "\\"
	return a:char
	elseif line[col - 1] == a:char
	return "\<Right>"
	else
	return a:char.a:char."\<Esc>i"
	endif
endf

func SkipPair()  
    if getline('.')[col('.') - 1] == ')' || getline('.')[col('.') - 1] == ']' || getline('.')[col('.') - 1] == '"' || getline('.')[col('.') - 1] == "'" || getline('.')[col('.') - 1] == '}'  
        return "\<ESC>la"  
    else  
        return "\t"  
    endif  
endfunc  

" 将tab键绑定为跳出括号  
inoremap <TAB> <c-r>=SkipPair()<CR>
```


import{_ as s,o as a,c as n,N as p}from"./chunks/framework.5124499d.js";const A=JSON.parse('{"title":"ES5和ES6的介绍","description":"","frontmatter":{"title":"ES5和ES6的介绍"},"headers":[],"relativePath":"javascript/es6/index.md"}'),l={name:"javascript/es6/index.md"},o=p(`<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><h2 id="ecmascript-简介" tabindex="-1">ECMAScript 简介 <a class="header-anchor" href="#ecmascript-简介" aria-label="Permalink to &quot;ECMAScript 简介&quot;">​</a></h2><p>ES 的全称是 ECMAScript，它是由 ECMA 国际标准化组织 制定的一套<strong>脚本语言的标准化规范</strong>。</p><p>详细来说，ES 是由 ECMA 的第 39 号技术专家委员会（Technical Committee 39，简称 TC39）负责制订 ECMAScript 标准，成员包括 Microsoft、Mozilla、Google 等公司。</p><p>简单来说，ECMAScript 是 JS 的语言标准。当然，ECMAScript 还包括其他脚本语言的语言标准。</p><h2 id="ecmascript-版本发布记录" tabindex="-1">ECMAScript 版本发布记录 <a class="header-anchor" href="#ecmascript-版本发布记录" aria-label="Permalink to &quot;ECMAScript 版本发布记录&quot;">​</a></h2><ul><li><p>1995 年：ECMAScript 诞生。</p></li><li><p>1997 年：ECMAScript 标准确立。ECMA 发布 ECMA-262 标准，推出浏览器标准语言 ECMAScript 1.0。</p></li><li><p>1999 年：发布 ES3；与此同时，IE5 风靡一时。</p></li><li><p><strong>2009 年</strong>：发布 ECMAScript 5.0（简称 <strong>ES5</strong>）。例如 foreach、Object.keys、Object.create 和 json 标准。</p></li><li><p>2011 年：发布 ECMAScript5.1，成为 ISO <strong>国际标准</strong>，从而推动所有浏览器都支持。</p></li><li><p><strong>2015</strong> 年 6 月：发布 ECMAScript 6（简称 <strong>ES6</strong>），即 ECMAScript 2015。（注意，<strong>前者是按版本号区分，后者是按年份区分</strong>。ES 的后续版本，请尽量用<strong>年份</strong>来命名。）</p></li><li><p>2016 年 6 月：发布 ECMAScript 7，即 ECMAScript 2016。</p></li><li><p>2017 年 6 月：发布 ECMAScript 8，即 ECMAScript 2017。</p></li><li><p>2018 年 6 月：发布 ECMAScript 9，即 ECMAScript 2018。</p></li><li><p>2019 年 6 月：发布 ECMAScript 10，即 ECMAScript 2019。</p></li><li><p>2020 年 6 月：发布 ECMAScript 11，即 ECMAScript 2020。</p></li><li><p>......</p></li></ul><ul><li>此后，每年更新一版。</li></ul><h2 id="ecmascript5-1简介" tabindex="-1">ECMAScript5.1简介 <a class="header-anchor" href="#ecmascript5-1简介" aria-label="Permalink to &quot;ECMAScript5.1简介&quot;">​</a></h2><p>ECMAScript 5.1是ECMAScript标准的最新修正版本，所以这个版本非常重要。与ECMAScript 5.0 相比，ECMAScript 5.1的改进如下：</p><ul><li>对于此前不合理的地方进行了修正。</li><li>新增了一些新的方法。</li><li>新增了<strong>严格模式</strong>的语法。（我们将在下一篇文章讲严格模式）</li></ul><p>推荐阅读链接：</p><ul><li><a href="https://yanhaijing.com/es5" target="_blank" rel="noreferrer">ECMAScript5.1规范中文版.pdf</a></li><li><a href="https://www.zhangxinxu.com/wordpress/2012/01/introducing-ecmascript-5-1/" target="_blank" rel="noreferrer">张鑫旭翻译：ECMAScript 5.1简介</a></li></ul><h2 id="es6-简介" tabindex="-1">ES6 简介 <a class="header-anchor" href="#es6-简介" aria-label="Permalink to &quot;ES6 简介&quot;">​</a></h2><p>从上面的 ES 的版本记录可以看出：2015 年 6 月，ES6 正式发布。如果用年份来命名版本号，也可以称之为 ES2015。</p><p>ES6 是新的 JS 语法标准。<strong>ES6 实际上是一个泛指，泛指 ES 2015 及后续的版本</strong>。</p><p>很多人在做业务选型的时候，会倾向于选 jQuery。其实 jQuery 的语法是偏向于 ES3 的。而现在主流的框架 Vue.js 和 React.js 的默认语法，都是用的 ES6。</p><p>ES6 的改进如下：</p><ul><li><p>ES6 之前的变量提升，会导致程序在运行时有一些不可预测性。而 ES6 中通过 let、const 变量优化了这一点。</p></li><li><p>ES6 增加了很多功能，比如：<strong>常量、作用域、对象代理、异步处理、类、继承</strong>等。这些在 ES5 中想实现，比较复杂，但是 ES6 对它们进行了封装。</p></li><li><p>ES6 之前的语法过于松散，实现相同的功能，不同的人可能会写出不同的代码。</p></li></ul><p>ES6 的目标是：让 JS 语言可以编写复杂的大型应用程序，成为企业级开发语言。</p><p>推荐阅读链接：</p><ul><li>阮一峰 | ES6 入门教程：<a href="https://es6.ruanyifeng.com/" target="_blank" rel="noreferrer">https://es6.ruanyifeng.com/</a></li></ul><h2 id="es各个版本的浏览器兼容性情况" tabindex="-1">ES各个版本的浏览器兼容性情况 <a class="header-anchor" href="#es各个版本的浏览器兼容性情况" aria-label="Permalink to &quot;ES各个版本的浏览器兼容性情况&quot;">​</a></h2><p>关于 ECMAScript各个版本的浏览器兼容性情况，可以看看 Juriy Zaytsev 统计的兼容性表格：<a href="https://kangax.github.io/compat-table/es5/" target="_blank" rel="noreferrer">https://kangax.github.io/compat-table/es5/</a></p><p>这个网站很实用，而且还列出了每个版本里新增的主要API有哪些。</p><p>比如说，ES5的兼容性是比较好的：</p><p><img src="https://img.smyhvae.com/20211028_2115.png" alt="20211028_2115"></p><p>ES6在IE 11浏览器里就不兼容：</p><p><img src="http://img.smyhvae.com/20211028_2117.png" alt="20211028_2117"></p><p>另外，如果我们想在ES5环境中支持ES6的API，可以通过 <a href="https://github.com/es-shims/es5-shim" target="_blank" rel="noreferrer">ES5-shim</a> 这样的工具来实现。</p><h2 id="将es6的语法转为es5-为了兼容-es5" tabindex="-1">将ES6的语法转为ES5（为了兼容 ES5） <a class="header-anchor" href="#将es6的语法转为es5-为了兼容-es5" aria-label="Permalink to &quot;将ES6的语法转为ES5（为了兼容 ES5）&quot;">​</a></h2><blockquote><p>掌握 ES6 之后，如果你的业务需要考虑 ES5 的兼容性，则可以这样做：写 ES6 语法的 js 代码，然后通过 <code>Babel</code>将 ES6 转换为 ES5。如果没有这样的需要，那么下面的内容，了解即可。</p></blockquote><p>babel 的作用是将 ES6 语法转为 ES5 语法，支持低端浏览器。</p><p>但是，在这之前，我们需要配置一下相关的环境。</p><h2 id="建立工程目录" tabindex="-1">建立工程目录 <a class="header-anchor" href="#建立工程目录" aria-label="Permalink to &quot;建立工程目录&quot;">​</a></h2><p>（1）先建立一个空的工程目录 <code>ES6Demo</code>，并在目录下建立两个文件夹 <code>src</code>和 <code>dist</code>：</p><ul><li><p><code>src</code>：书写 ES6 代码，我们写的 js 程序都放在这里。</p></li><li><p><code>dist</code>：利用 Babel 编译生成的 ES5 代码。<strong>我们在 HTML 页面需要引入 dist 里的 js 文件</strong>。</p></li></ul><p>（2）在 src 里新建文件 <code>index.html</code>：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ie=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">&lt;!-- 我们引入 ES5 中的 js 文件，而不是引入 ES6 中的 js 文件。 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./dist/index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>注意</strong>，上方代码中，我们引入的是<code>dist</code>目录下的 js 文件。</p><p>然后我们新建文件 <code>src/index.js</code>：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">smyhvae</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qianguyihao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(b)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>这个文件是一个 ES6 语法 的 js 文件，稍后，我们尝试把这个 ES6 语法的 js 文件转化为 ES5 的 js 文件。</p><p>PS：我们在写代码时，能用单引号尽量用单引号，而不是双引号，前者在压缩之后，程序执行会更快。</p><h2 id="全局安装-babel-cli" tabindex="-1">全局安装 Babel-cli <a class="header-anchor" href="#全局安装-babel-cli" aria-label="Permalink to &quot;全局安装 Babel-cli&quot;">​</a></h2><p>（1）初始化项目：</p><p>在安装 Babel 之前，需要先用 npm init 先初始化我们的项目。打开终端或者通过 cmd 打开命令行工具，进入项目目录，输入如下命令：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span></span>
<span class="line"></span></code></pre></div><p>上方代码中，<code>-y</code> 代表全部默认同意，就不用一次次按回车了（稍后再根据需要，在文件中手动修改）。命令执行完成后，会在项目的根目录下生成 package.json 文件：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">es6demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">echo </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">Error: no test specified</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;"> &amp;&amp; exit 1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">smyhvae</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">license</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ISC</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>PS：VS Code 里打开终端的快捷键是：<code>Contol + ~</code>。</p><p>（2）全局安装 Babel-cli：</p><p>在终端中输入以下命令：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">babel-cli</span></span>
<span class="line"></span></code></pre></div><p><img src="http://img.smyhvae.com/20180304_1305.png" alt=""></p><p>如果安装比较慢的话，Mac 下可以使用<code>cnpm</code>进行安装 ，windows 下可以使用<code>nrm</code>切换到 taobao 的镜像。</p><p>（3）本地安装 babel-preset-es2015 和 babel-cli：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--save-dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">babel-preset-es2015</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">babel-cli</span></span>
<span class="line"></span></code></pre></div><p><img src="http://img.smyhvae.com/20180304_1307.png" alt=""></p><p>安装完成后，会发现<code>package.json</code>文件，已经多了 devDependencies 选项：</p><p><img src="https://img.smyhvae.com/20180304_1308.png" alt=""></p><p>（4）新建.babelrc：</p><p>在根目录下新建文件<code>.babelrc</code>，输入如下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;presets&quot;:[</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;es2015&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;plugins&quot;:[]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>（5）开始转换：</p><p>现在，我们应该可以将 ES6 的文件转化为 ES5 的文件了，命令如下：（此命令略显复杂）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	babel src/index.js -o dist/index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>我们可以将上面这个命令进行简化一下。操作如下：</p><p>在文件 <code>package.json</code> 中修改键 <code>scripts</code>中的内容：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">babel src/index.js -o dist/index.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span></code></pre></div><p>修改后的效果如下：</p><p><img src="https://img.smyhvae.com/20180304_1315.png" alt=""></p><p>目前为止，环境配置好了。以后，我们执行如下命令，即可将<code>src/index.js</code>这个 ES6 文件转化为 <code>dist/index.js</code>这个 ES5 文件：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span></code></pre></div><p>我们执行上面的命令之后，会发现， dist 目录下会生成 ES5 的 js 文件：</p><p>index.js：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">use strict</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">smyhvae</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qianguyihao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(b)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>当我们打开网页后，就可以在浏览器的控制台，看到代码的输出结果。</p>`,78),e=[o];function t(c,r,i,D,y,F){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};

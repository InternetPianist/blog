import{_ as e,o as a,c as i,N as n}from"./chunks/framework.e2c53219.js";const t="/blog/assets/front-end-engineering.a0f915ba.png",o="/blog/assets/component-engineering.36904b8d.png",f=JSON.parse('{"title":"前言","description":"","frontmatter":{},"headers":[],"relativePath":"front-end-engineering/index.md"}'),l={name:"front-end-engineering/index.md"},r=n('<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><p>随着这些年互联网的高速发展，前端岗位所需要最基础的技术栈也从最开始的只需要熟悉，html、css、js，的三驾马车，变成了熟悉前端的主流三大框架：vue、react、angular。那么首先我们要考虑的是为什么这些框架会火，其次我们要了解这些框架的演变过程以及在这些项目火了之后我们又需要如何的去很好的与其协作配合上来，来适配不同的技术选型下最适合团队所需要的场景，这是一个Leader所需要考虑、同时也是需要去执行的事情，本期专栏围绕前端工程化，来讲讲如果作为一个团队Leader，可以怎么做，去从工程化的角度上，帮助你和你的团队得到一些帮助与发展。</p><p>近些年来看，前端的项目随着项目的复杂度越来越高，前端工程化的这个概念也就变的越来越被重视，但从业务或者团队的范围来看，前端工程化俨然已经成为一个前端团队的标配，稍具规模的团队都会根据自身业务设计出一套符合当前业务需求的前端架构出来，同时其也是区分初级前端和高级前端的分界线，普通开发日常中接触不到这些场景，只需要负责编写业务代码，但是当机会真正出现的时候，又苦于没有能力接手下来而错失良机，而高级或者资深前端则可以使用前端工程化解决问题问题，从而去接触更为高层次的前端架构设计，从而向技术管理晋升。 当很多开发者已经对vue、react，angular等这些主流框架非常熟练的时候也无法实现升职加薪的时候，就是因为缺少了这种全面的工程化知识，无法实现真正的独当一面，不能真正的实现带领团队一起发展，共同进步，所以现在我们开始走入工程化的学习吧！</p><h2 id="什么是前端工程化" tabindex="-1">什么是前端工程化？ <a class="header-anchor" href="#什么是前端工程化" aria-label="Permalink to &quot;什么是前端工程化？&quot;">​</a></h2><p>在上面的思考你是否已经有了答案了呢，这个问题不管怎么说其实都有理有据，就像一道语文的问道题，怎么回答都行，都有分，所以这个问题本身就是仁者见仁，智者见智，而且我认为这个问题，在不同的人身上必然会不一样，他也是每个人在不同的公司，不同的岗位和其身边的经历所决定的，所以我们只需要学习自己觉得适合自己的，自己觉得对的即可，很多东西即使再好，不适合自己团队公司的场景也只能是纸上谈兵，并不是好的对于目前的我们就一定是对的，我们可以了解、学习，而不是必须的。 前端的一整套东西覆盖也非常广泛，从开发、规范、测试、lint、构建、部署、监控、集成、微服务等等链路都隶属于前端工程化，所以一看这么长的链路再去考虑如何总结这个问题就显得务虚了，我们需要尽量将其简化，来逐个击破。逐渐完善我们对工程化的认知。</p><div class="tip custom-block"><p class="custom-block-title">简单来讲：前端工程化指的是:在企业级的前端项目开发中，把前端开发所需的工具、技术、流程、经验等进行规范化、标准化。最终落实到细节上，从而实现前端的4 个现代化:模块化、组件化、规范化、自动化</p></div><p>这段话也是在不同的文章下面经常看到的一句总结，我们可以对这句话进行一些记忆，然后呢，在后续的学习中自我去理解，然后加深印象吧:</p><p><img src="'+t+'" alt="front-end-engineering"> 前端工程化就是通过各种工具和技术，提升前端开发效率的过程。我们通过这句话可以更好理解，突出了两点</p><ol><li>前端工程化的内容：各种工具和技术</li><li>前端工程化的作用：通过使用工具，提升开发效率</li></ol><p>这样来看似乎更加容易理解了，但凡日常中你觉得方便的，提升了自己效率的事情，小到书写了几行注释，我们都认为其是前端工程化中的重要组成部分，但是这似乎过于单一，我们需要将其组织起来，形成一些约定，将这些我们利索当然的事情加入大家共同制定通过的准则，便能成功成为工程化中的一角。 那么首先我们看看，我们日常中可能哪些场景会让你觉得开发并不愉快，或者说，下面的这些问题，你遇到了多少。</p><h2 id="你遇到了哪些问题" tabindex="-1">你遇到了哪些问题？ <a class="header-anchor" href="#你遇到了哪些问题" aria-label="Permalink to &quot;你遇到了哪些问题？&quot;">​</a></h2><ol><li><p>构建配置、打包配置等等涉及项目的配置文件每次新开项目都需要去复制粘贴。</p></li><li><p>公共工具函数，代码片段、等等复用成本较高，需要自己在不同项目反复寻找已经使用过的东西。</p></li><li><p>团队公共组件没有办法方便引入，版本升级迭代对不用业务的影响无法评估，组件维护升级提心吊胆。</p></li><li><p>团队编码风格大相捷径，新拉下的代码一篇爆红，不敢随便更改团队其他成员代码，害怕承担责任，屎山代码越积越大，越积越多。</p></li><li><p>团队开发环境、 开发编辑器、开发习惯、格式化格式不同，每次格式化变化巨大，codeReview代码难度变大。</p></li><li><p>成员不敢主动让团队其他人CodeReview代码，会觉得不好意思，不敢让别人主动指出自己错误，也就导致团队没法定期互相code review，诸如此类的流程就很难继续下去。</p></li><li><p>团队协作的规范、模块、环境、仓库、文档、各类基建轮子过多，新同学进入团队无从下手，不易快速融入团队。</p></li><li><p>随着需求日益增加复杂，很多小的问题逐渐被放大，项目被迫走上重构的道路！</p></li></ol><h2 id="如何系统化学习前端工程化" tabindex="-1">如何系统化学习前端工程化 <a class="header-anchor" href="#如何系统化学习前端工程化" aria-label="Permalink to &quot;如何系统化学习前端工程化&quot;">​</a></h2><p>想要系统化的学习前端工程化并非易事，很多错学在初入前端不久的时间中会因为某个技术栈日常使用频率较高就错误的认为，这一个技术栈就是工程化，会觉得webpack就是工程化，会觉得我会封装组件就是工程化，但是前端可不仅仅只是会封装个组建就算是工程化了。 首先，目前公司主流都是基于前后端分离而进行开发业务，那么你得非常清楚，什么当前任务属于前端还是属于后端，完好的任务分工可以让你在接入前端工程化的时候更加得心应手，这就是解决很多前端问题的基础，而不是在分不清任务的前提下对着某一个自己不擅长的领域死磕，这样的意义是不大且浪费时间的。 其次我们需要对项目的全链路方方面面的了解加实践，好记性不如烂笔头，在程序员的世界同样如此，多练习实践便是最快进步的道路。 虽然现在各类前端社区都有很多前端工程化的知识，但是总是零零散散的，断层式的学习没有办法帮我们建议一张完整的脉络，无法帮我们体系化学习知识，所以本期专栏以实践为基础，将前端组件库作为一个项目，从零开始开发同时接入前端工程化，让大家不仅学会前端工程化，也能熟悉一整个项目的生命周期，加深自己的印象。</p><p><img src="'+o+'" alt="component-engineering"></p>',15),p=[r];function s(c,d,_,h,g,m){return a(),i("div",null,p)}const b=e(l,[["render",s]]);export{f as __pageData,b as default};

"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["1525"],{6674:function(e,a,n){n.r(a),n.d(a,{metadata:()=>t,contentTitle:()=>r,default:()=>l,assets:()=>d,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"DonateCase/API/register-animations","title":"Register Animations","description":"To create an animation class, we will use the JavaAnimation abstract class","source":"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/DonateCase/API/animations.md","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/register-animations","permalink":"/JodexIndustriesWiki/en/docs/1.0.0/DonateCase/API/register-animations","draft":false,"unlisted":false,"tags":[],"version":"1.0.0","sidebarPosition":6,"frontMatter":{"id":"register-animations","title":"Register Animations","sidebar_position":6},"sidebar":"sidebar","previous":{"title":"CaseManager","permalink":"/JodexIndustriesWiki/en/docs/1.0.0/DonateCase/API/casemanager"},"next":{"title":"Register Sub Commands","permalink":"/JodexIndustriesWiki/en/docs/1.0.0/DonateCase/API/register-subcommands"}}'),i=n("5893"),s=n("65");let o={id:"register-animations",title:"Register Animations",sidebar_position:6},r="Register custom animations",d={},c=[{value:"Pay attention to the methods: Case#animationPreEnd and Case#animationEnd",id:"pay-attention-to-the-methods-caseanimationpreend-and-caseanimationend",level:5}];function m(e){let a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"register-custom-animations",children:"Register custom animations"})}),"\n",(0,i.jsxs)(a.p,{children:["To create an animation class, we will use the ",(0,i.jsx)(a.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/data/JavaAnimation.html",children:"JavaAnimation"})," abstract class"]}),"\n",(0,i.jsxs)(a.h5,{id:"pay-attention-to-the-methods-caseanimationpreend-and-caseanimationend",children:["Pay attention to the methods: ",(0,i.jsx)(a.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/Case.html#animationPreEnd(com.jodexindustries.donatecase.api.data.CaseData,org.bukkit.OfflinePlayer,boolean,com.jodexindustries.donatecase.api.data.CaseData.Item,org.bukkit.Location)",children:"Case#animationPreEnd"})," and ",(0,i.jsx)(a.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/Case.html#animationEnd(com.jodexindustries.donatecase.api.data.CaseData,org.bukkit.entity.Player,java.util.UUID,com.jodexindustries.donatecase.api.data.CaseData.Item)",children:"Case#animationEnd"})]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/Case.html#animationPreEnd(com.jodexindustries.donatecase.api.data.CaseData,org.bukkit.entity.Player,boolean,com.jodexindustries.donatecase.api.data.CaseData.Item)",children:"Case#animationPreEnd"})," is called to grant a group, send a message, and more."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/Case.html#animationEnd(com.jodexindustries.donatecase.api.data.CaseData,org.bukkit.entity.Player,java.util.UUID,com.jodexindustries.donatecase.api.data.CaseData.Item)",children:"Case#animationEnd"})," is called to completely end the animation."]}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"TestAnimation class"}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-java",children:"import com.jodexindustries.donatecase.api.Case;\r\nimport com.jodexindustries.donatecase.api.data.JavaAnimation;\r\nimport org.bukkit.Bukkit;\r\n\r\npublic class TestAnimation extends JavaAnimation {\r\n    @Override\r\n    public void start() {\r\n        Case.animationPreEnd(getCaseData(), getPlayer(), getUuid(), getWinItem());\r\n        Bukkit.getScheduler().runTaskLater(Case.getInstance(), () -> Case.animationEnd(getCaseData(), getPlayer(), getUuid(), getWinItem()),20L);\r\n    }\r\n}\r\n\r\n\n"})}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Main class"}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-java",children:'    @Override\r\n    public void onEnable() {\r\n        // getting CaseManager for addon\r\n        CaseManager api = new CaseManager(this);\r\n        // register animation\r\n        AnimationManager animationManager = api.getAnimationManager();\r\n        animationManager.registerAnimation("test", TestAnimation.class);\r\n    }\n'})})]})}function l(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},65:function(e,a,n){n.d(a,{Z:function(){return r},a:function(){return o}});var t=n(7294);let i={},s=t.createContext(i);function o(e){let a=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);
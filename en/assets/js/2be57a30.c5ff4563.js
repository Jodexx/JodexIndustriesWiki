"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["4938"],{419:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>p,assets:()=>o,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"DonateCase/API/implementing","title":"Implementing","description":"Example with an external Plugin","source":"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/DonateCase/API/implementing.md","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/implementing","permalink":"/JodexIndustriesWiki/en/docs/1.0.0/DonateCase/API/implementing","draft":false,"unlisted":false,"tags":[],"version":"1.0.0","sidebarPosition":3,"frontMatter":{"id":"implementing","title":"Implementing","sidebar_position":3},"sidebar":"sidebar","previous":{"title":"Install","permalink":"/JodexIndustriesWiki/en/docs/1.0.0/DonateCase/API/install"},"next":{"title":"Register Events","permalink":"/JodexIndustriesWiki/en/docs/1.0.0/DonateCase/API/register-events"}}'),a=t("5893"),r=t("65");let l={id:"implementing",title:"Implementing",sidebar_position:3},s="Implementing",o={},d=[{value:"Example with an external Plugin",id:"example-with-an-external-plugin",level:2},{value:"Example without an external plugin",id:"example-without-an-external-plugin",level:2}];function c(e){let n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"implementing",children:"Implementing"})}),"\n",(0,a.jsx)(n.h2,{id:"example-with-an-external-plugin",children:"Example with an external Plugin"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"TestDonateCaseAPI.java"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import com.jodexindustries.donatecase.api.Case;\r\nimport org.bukkit.plugin.java.JavaPlugin;\r\n\r\npublic final class TestDonateCaseAPI extends JavaPlugin {\r\n\r\n    @Override\r\n    public void onEnable() {\r\n      int playerKeys = Case.getKeys("case", "_Jodex__");\r\n      getLogger().info(String.valueOf(playerKeys));\r\n    }\r\n}\r\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"plugin.yml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"depend:\r\n  - DonateCase\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-without-an-external-plugin",children:"Example without an external plugin"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"TestAddon.java"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import com.jodexindustries.donatecase.api.addon.internal.InternalJavaAddon;\r\n\r\npublic class TestAddon extends InternalJavaAddon {\r\n    @Override\r\n    public void onEnable() {\r\n        getLogger().info("TestAddon enabled!");\r\n    }\r\n\r\n    @Override\r\n    public void onDisable() {\r\n        getLogger().info("TestAddon disabled!");\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"addon.yml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"name: TestAddon\r\nmain: com.jodexindustries.testaddon.Main\r\nversion: 1.0\n"})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},65:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var i=t(7294);let a={},r=i.createContext(a);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
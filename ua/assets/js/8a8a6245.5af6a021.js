"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[898],{8527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"DonateCase/API/implementing","title":"\u0412\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f","description":"\u041f\u0440\u0438\u043a\u043b\u0430\u0434 \u0456\u0437 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u043c \u043f\u043b\u0430\u0433\u0456\u043d\u043e\u043c","source":"@site/i18n/ua/docusaurus-plugin-content-docs/current/DonateCase/API/implementing.md","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/implementing","permalink":"/JodexIndustriesWiki/ua/docs/DonateCase/API/implementing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"implementing","title":"\u0412\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f","permalink":"/JodexIndustriesWiki/ua/docs/DonateCase/API/install"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u0456\u0432\u0435\u043d\u0442\u0456\u0432","permalink":"/JodexIndustriesWiki/ua/docs/DonateCase/API/register-events"}}');var r=t(4848),s=t(8453);const a={id:"implementing",title:"\u0412\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f",sidebar_position:3},o="\u0412\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f",d={},l=[{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434 \u0456\u0437 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u043c \u043f\u043b\u0430\u0433\u0456\u043d\u043e\u043c",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434-\u0456\u0437-\u0437\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u043c-\u043f\u043b\u0430\u0433\u0456\u043d\u043e\u043c",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434 \u0431\u0435\u0437 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u044c\u043e\u0433\u043e \u043f\u043b\u0430\u0433\u0456\u043d\u0443",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434-\u0431\u0435\u0437-\u0437\u043e\u0432\u043d\u0456\u0448\u043d\u044c\u043e\u0433\u043e-\u043f\u043b\u0430\u0433\u0456\u043d\u0443",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f",children:"\u0412\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f"})}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434-\u0456\u0437-\u0437\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u043c-\u043f\u043b\u0430\u0433\u0456\u043d\u043e\u043c",children:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434 \u0456\u0437 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u043c \u043f\u043b\u0430\u0433\u0456\u043d\u043e\u043c"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"TestDonateCaseAPI \u043a\u043b\u0430\u0441"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import com.jodexindustries.donatecase.api.Case;\r\nimport org.bukkit.plugin.java.JavaPlugin;\r\n\r\npublic final class TestDonateCaseAPI extends JavaPlugin {\r\n\r\n    @Override\r\n    public void onEnable() {\r\n      int playerKeys = Case.getKeys("case", "_Jodex__");\r\n      getLogger().info(String.valueOf(playerKeys));\r\n    }\r\n}\r\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"plugin.yml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"depend:\r\n  - DonateCase\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434-\u0431\u0435\u0437-\u0437\u043e\u0432\u043d\u0456\u0448\u043d\u044c\u043e\u0433\u043e-\u043f\u043b\u0430\u0433\u0456\u043d\u0443",children:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434 \u0431\u0435\u0437 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u044c\u043e\u0433\u043e \u043f\u043b\u0430\u0433\u0456\u043d\u0443"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"TestAddon \u043a\u043b\u0430\u0441"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import com.jodexindustries.donatecase.api.addon.internal.InternalJavaAddon;\r\n\r\npublic class TestAddon extends InternalJavaAddon {\r\n    @Override\r\n    public void onEnable() {\r\n        getLogger().info("TestAddon enabled!");\r\n    }\r\n\r\n    @Override\r\n    public void onDisable() {\r\n        getLogger().info("TestAddon disabled!");\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"addon.yml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"name: TestAddon\r\nmain: com.jodexindustries.testaddon.Main\r\nversion: 1.0\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
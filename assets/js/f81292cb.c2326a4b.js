"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["9638"],{1993:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>o});var i=JSON.parse('{"id":"DonateCase/API/implementing","title":"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F","description":"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0456\u0437 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u043C \u043F\u043B\u0430\u0433\u0456\u043D\u043E\u043C","source":"@site/versioned_docs/version-1.0.0/DonateCase/API/implementing.md","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/implementing","permalink":"/docs/1.0.0/DonateCase/API/implementing","draft":false,"unlisted":false,"tags":[],"version":"1.0.0","sidebarPosition":3,"frontMatter":{"id":"implementing","title":"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F","sidebar_position":3},"sidebar":"sidebar","previous":{"title":"\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F","permalink":"/docs/1.0.0/DonateCase/API/install"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432","permalink":"/docs/1.0.0/DonateCase/API/register-events"}}'),a=t("5893"),s=t("65");let o={id:"implementing",title:"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F",sidebar_position:3},r="\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F",d={},l=[{value:"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0456\u0437 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u043C \u043F\u043B\u0430\u0433\u0456\u043D\u043E\u043C",id:"\u043F\u0440\u0438\u043A\u043B\u0430\u0434-\u0456\u0437-\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u043C-\u043F\u043B\u0430\u0433\u0456\u043D\u043E\u043C",level:2},{value:"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0431\u0435\u0437 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u043F\u043B\u0430\u0433\u0456\u043D\u0443",id:"\u043F\u0440\u0438\u043A\u043B\u0430\u0434-\u0431\u0435\u0437-\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u044C\u043E\u0433\u043E-\u043F\u043B\u0430\u0433\u0456\u043D\u0443",level:2}];function c(e){let n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u0432\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F",children:"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F"})}),"\n",(0,a.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043A\u043B\u0430\u0434-\u0456\u0437-\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u043C-\u043F\u043B\u0430\u0433\u0456\u043D\u043E\u043C",children:"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0456\u0437 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u043C \u043F\u043B\u0430\u0433\u0456\u043D\u043E\u043C"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"TestDonateCaseAPI \u043A\u043B\u0430\u0441"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import com.jodexindustries.donatecase.api.Case;\nimport org.bukkit.plugin.java.JavaPlugin;\n\npublic final class TestDonateCaseAPI extends JavaPlugin {\n\n    @Override\n    public void onEnable() {\n      int playerKeys = Case.getKeys("case", "_Jodex__");\n      getLogger().info(String.valueOf(playerKeys));\n    }\n}\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"plugin.yml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"depend:\n  - DonateCase\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043A\u043B\u0430\u0434-\u0431\u0435\u0437-\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u044C\u043E\u0433\u043E-\u043F\u043B\u0430\u0433\u0456\u043D\u0443",children:"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0431\u0435\u0437 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u043F\u043B\u0430\u0433\u0456\u043D\u0443"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"TestAddon \u043A\u043B\u0430\u0441"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import com.jodexindustries.donatecase.api.addon.internal.InternalJavaAddon;\n\npublic class TestAddon extends InternalJavaAddon {\n    @Override\n    public void onEnable() {\n        getLogger().info("TestAddon enabled!");\n    }\n\n    @Override\n    public void onDisable() {\n        getLogger().info("TestAddon disabled!");\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"addon.yml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"name: TestAddon\nmain: com.jodexindustries.testaddon.Main\nversion: 1.0\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},65:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var i=t(7294);let a={},s=i.createContext(a);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
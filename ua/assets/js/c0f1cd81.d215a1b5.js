"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[133],{5017:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"DonateCase/API/register-events","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u0456\u0432\u0435\u043d\u0442\u0456\u0432","description":"\u0406\u0432\u0435\u043d\u0442\u0438 DonateCase \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u044e\u0442\u044c\u0441\u044f \u0442\u0430\u043a \u0441\u0430\u043c\u043e, \u044f\u043a \u0456 \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u0456 \u0456\u0432\u0435\u043d\u0442\u0438 Bukkit","source":"@site/i18n/ua/docusaurus-plugin-content-docs/current/DonateCase/API/events.md","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/register-events","permalink":"/ua/docs/DonateCase/API/register-events","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"register-events","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u0456\u0432\u0435\u043d\u0442\u0456\u0432","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\u0412\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f","permalink":"/ua/docs/DonateCase/API/implementing"},"next":{"title":"CaseManager","permalink":"/ua/docs/DonateCase/API/casemanager"}}');var r=t(4848),a=t(8453);const i={id:"register-events",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u0456\u0432\u0435\u043d\u0442\u0456\u0432",sidebar_position:4},o="\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u0456\u0432\u0435\u043d\u0442\u0456\u0432",c={},l=[];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f-\u0456\u0432\u0435\u043d\u0442\u0456\u0432",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u0456\u0432\u0435\u043d\u0442\u0456\u0432"})}),"\n",(0,r.jsx)(n.p,{children:"\u0406\u0432\u0435\u043d\u0442\u0438 DonateCase \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u044e\u0442\u044c\u0441\u044f \u0442\u0430\u043a \u0441\u0430\u043c\u043e, \u044f\u043a \u0456 \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u0456 \u0456\u0432\u0435\u043d\u0442\u0438 Bukkit"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"EventListener \u043a\u043b\u0430\u0441"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class EventListener implements Listener {\r\n    @EventHandler\r\n    public void onCaseInteract(CaseInteractEvent e) {\r\n        Player p = e.getPlayer();\r\n        p.sendMessage(e.getClickedBlock().getLocation().toString());\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Main \u043a\u043b\u0430\u0441"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class Main extends JavaPlugin {\r\n    @Override\r\n    public void onEnable() {\r\n        getServer().getPluginManager().registerEvents(new EventListener(), this);\r\n    }\r\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
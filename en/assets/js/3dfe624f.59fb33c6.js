"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["5035"],{2841:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>a});var s=JSON.parse('{"id":"DonateCase/API/install","title":"Install","description":"Maven","source":"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/DonateCase/API/install.md","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/install","permalink":"/JodexIndustriesWiki/en/docs/1.0.0/DonateCase/API/install","draft":false,"unlisted":false,"tags":[],"version":"1.0.0","sidebarPosition":2,"frontMatter":{"id":"install","title":"Install","sidebar_position":2},"sidebar":"sidebar","previous":{"title":"API Index","permalink":"/JodexIndustriesWiki/en/docs/1.0.0/DonateCase/API/donatecase-api-main"},"next":{"title":"Implementing","permalink":"/JodexIndustriesWiki/en/docs/1.0.0/DonateCase/API/implementing"}}'),r=t("5893"),i=t("65");let a={id:"install",title:"Install",sidebar_position:2},o="Install",d={},l=[];function c(e){let n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"install",children:"Install"})}),"\n",(0,r.jsx)(n.p,{children:"Maven"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<repository>\r\n    <id>JodexIndustries</id>\r\n    <name>JodexIndustries Repo</name>\r\n    <url>https://repo.jodexindustries.xyz/releases</url>\r\n</repository>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\r\n  <groupId>com.jodexindustries.donatecase</groupId>\r\n  <artifactId>spigot</artifactId>\r\n  <version>2.2.6.7</version>\r\n  <scope>provided</scope>\r\n</dependency>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Gradle"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gradle",children:'maven {\r\n    name "JodexIndustries"\r\n    url "https://repo.jodexindustries.xyz/releases"\r\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gradle",children:'compileOnly("com.jodexindustries.donatecase:spigot:2.2.6.7")\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},65:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var s=t(7294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
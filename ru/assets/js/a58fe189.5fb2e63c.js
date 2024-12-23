"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["6924"],{5705:function(e,s,t){t.r(s),t.d(s,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>u,toc:()=>p,frontMatter:()=>l});var i=JSON.parse('{"id":"DonateCase/API/install","title":"\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F","description":"\u041C\u043E\u0434\u0443\u043B\u0456 DonateCase API:","source":"@site/docs/DonateCase/API/install.mdx","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/install","permalink":"/JodexIndustriesWiki/ru/docs/2.0.0/DonateCase/API/install","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"install","title":"\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F","sidebar_position":1},"sidebar":"defaultSidebar","previous":{"title":"\u0413\u043E\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u044B","permalink":"/JodexIndustriesWiki/ru/docs/2.0.0/DonateCase/holograms"},"next":{"title":"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F","permalink":"/JodexIndustriesWiki/ru/docs/2.0.0/DonateCase/API/Spigot/implementing"}}'),n=t("5893"),a=t("65"),r=t("7294");function d(){let[e,s]=(0,r.useState)("loading");return(0,r.useEffect)(()=>{(async function e(){try{let e=await fetch("https://repo.jodexindustries.xyz/api/maven/latest/version/releases/com/jodexindustries/donatecase/api?type=raw"),t=await e.text();s(t)}catch(e){s("Error fetching version")}})()},[]),(0,n.jsx)("strong",{children:e})}var o=t("5056");let l={id:"install",title:"\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F",sidebar_position:1},c="\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F",u={},p=[];function x(e){let s={code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F",children:"\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F"})}),"\n",(0,n.jsx)(s.p,{children:"\u041C\u043E\u0434\u0443\u043B\u0456 DonateCase API:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"api"})," - \u0433\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u043C\u043E\u0434\u0443\u043B\u044C, \u044F\u043A\u0438\u0439 \u043C\u0456\u0441\u0442\u0438\u0442\u044C \u0432 \u0441\u043E\u0431\u0456 \u043E\u0441\u043D\u043E\u0432\u043D\u0456 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457 \u0434\u043B\u044F \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u0457 \u0437 DonateCase. \u041D\u0435\u043C\u0430\u0454 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0435\u0439."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"spigot-api"})," - \u043C\u043E\u0434\u0443\u043B\u044C \u0434\u043B\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438 ",(0,n.jsx)(s.code,{children:"spigot"}),", \u043C\u0456\u0441\u0442\u0438\u0442\u044C \u0432 \u0441\u043E\u0431\u0456 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457 \u0434\u043B\u044F \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u0457 \u0437 \u043F\u043B\u0430\u0433\u0456\u043D\u043E\u043C. \u0404 \u0437\u0430\u043B\u0435\u0436\u043D\u0456\u0441\u0442\u044C \u0432\u0456\u0434 Spigot 1.16.5."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u041F\u043E\u0442\u043E\u0447\u043D\u0430 \u0432\u0435\u0440\u0441\u0456\u044F: ",(0,n.jsx)(d,{})]}),"\n",(0,n.jsx)(o.Z,{language:"xml",title:"Maven",children:`<repository>
  <id>JodexIndustries</id>
  <name>JodexIndustries Repo</name>
  <url>https://repo.jodexindustries.xyz/releases</url>
</repository>`}),"\n",(0,n.jsx)(o.Z,{language:"xml",title:"Maven",children:`<dependency>
  <groupId>com.jodexindustries.donatecase</groupId>
  <artifactId>\u{43C}\u{43E}\u{434}\u{443}\u{43B}\u{44C}</artifactId>
  <version>\u{432}\u{435}\u{440}\u{441}\u{456}\u{44F}</version>
  <scope>provided</scope>
</dependency>
`}),"\n",(0,n.jsx)(o.Z,{language:"gradle",title:"Gradle",children:`maven {
  name "JodexIndustries"
  url "https://repo.jodexindustries.xyz/releases"
}
`}),"\n",(0,n.jsx)(o.Z,{language:"gradle",title:"Gradle",children:`compileOnly("com.jodexindustries.donatecase:\u{43C}\u{43E}\u{434}\u{443}\u{43B}\u{44C}:\u{432}\u{435}\u{440}\u{441}\u{456}\u{44F}")
`})]})}function h(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);
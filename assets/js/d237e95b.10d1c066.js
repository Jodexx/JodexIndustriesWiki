"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[560],{4534:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"DonateCase/Addons/dc-event-manager","title":"DCEventManager","description":"This addon allows you to manage DonateCase events.","source":"@site/docs/DonateCase/Addons/eventmanager.md","sourceDirName":"DonateCase/Addons","slug":"/DonateCase/Addons/dc-event-manager","permalink":"/docs/DonateCase/Addons/dc-event-manager","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"dc-event-manager","title":"DCEventManager","toc_min_heading_level":2,"toc_max_heading_level":5},"sidebar":"tutorialSidebar","previous":{"title":"Register gui typed items","permalink":"/docs/DonateCase/API/register-guitypeditems"}}');var a=s(4848),o=s(8453);const d={sidebar_position:1,id:"dc-event-manager",title:"DCEventManager",toc_min_heading_level:2,toc_max_heading_level:5},i="DCEventManager Wiki",r={},c=[{value:"Example config.yml",id:"example-configyml",level:2},{value:"Events",id:"events",level:2},{value:"Actions",id:"actions",level:2},{value:"All DonateCase actions",id:"all-donatecase-actions",level:3},{value:"DCEventManager actions",id:"dceventmanager-actions",level:3},{value:"Method invoke",id:"method-invoke",level:4},{value:"Case-Specific Support",id:"case-specific-support",level:2},{value:"Slot-Case-Specific Support",id:"slot-case-specific-support",level:2},{value:"Placeholders",id:"placeholders",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"dceventmanager-wiki",children:"DCEventManager Wiki"})}),"\n",(0,a.jsxs)(n.p,{children:["This addon allows you to manage DonateCase events.",(0,a.jsx)("br",{}),"\r\nWith it, you can perform certain actions, such as sending messages and executing commands on behalf of the console.\r\n",(0,a.jsxs)(n.strong,{children:["How does it work?",(0,a.jsx)("br",{})]}),"\r\nThe addon listens to all events that are registered in DonateCase.\r\nReceiving events takes place with the help of reflection, which means that when you update DonateCase, new events will be automatically uploaded to DCEventManager, without the need to update the addon! ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(n.h2,{id:"example-configyml",children:"Example config.yml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:'Debug: false\r\nPackage: "com.jodexindustries.donatecase.api.events" # dont change this\r\n\r\nEvents:\r\n  MyEvent:\r\n    Event: AnimationStartEvent\r\n    Actions:\r\n      - "[command] say Animation started!"\r\n\r\n  MyAnotherEvent:\r\n    Event: AnimationEndEvent\r\n    Actions:\r\n      - "[broadcast] &dAnimation ended!"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["List of all events available ",(0,a.jsx)(n.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/events/package-summary.html",children:"here"})]})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,a.jsx)(n.h3,{id:"all-donatecase-actions",children:(0,a.jsx)(n.a,{href:"../items-settings#actions",children:"All DonateCase actions"})}),"\n",(0,a.jsx)(n.h3,{id:"dceventmanager-actions",children:"DCEventManager actions"}),"\n",(0,a.jsx)(n.h4,{id:"method-invoke",children:"Method invoke"}),"\n",(0,a.jsxs)(n.p,{children:["Example\r\n",(0,a.jsx)(n.code,{children:"- [invoke] setCancelled(true)"})]}),"\n",(0,a.jsx)(n.h2,{id:"case-specific-support",children:"Case-Specific Support"}),"\n",(0,a.jsxs)(n.p,{children:["Works only if event has ",(0,a.jsx)(n.code,{children:"getCaseType"})," or ",(0,a.jsx)(n.code,{children:"getCaseData"})," methods"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'Events:\r\n  MyEvent:\r\n    Event: AnimationStartEvent # your event\r\n    Case: case # here specific case\r\n    Actions:\r\n      - "[command] say Case opened!"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"slot-case-specific-support",children:"Slot-Case-Specific Support"}),"\n",(0,a.jsxs)(n.p,{children:["Works only if event has ",(0,a.jsx)(n.code,{children:"getSlot"})," method"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'Events:\r\n  MyEvent:\r\n    Event: CaseGuiClickEvent # your event\r\n    Case: case # here specific case\r\n    Slot: 1 # here specific slot\r\n    Actions:\r\n      - "[command] say Gui clicked!"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"placeholders",children:"Placeholders"}),"\n",(0,a.jsxs)(n.p,{children:["DCEventManager has its own personal placeholder system that allows you to use ",(0,a.jsx)(n.strong,{children:"ALL"})," the methods that events provide.",(0,a.jsx)("br",{}),"\r\n",(0,a.jsx)(n.strong,{children:"This system works with the help of Reflection!"}),(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(n.p,{children:"An example of a placeholders:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'Events:\r\n  AddonDisableEvent: # event class name\r\n    addon: # placeholder id\r\n      placeholder: "%addon%" # replaced placeholder\r\n      method: "getAddon#getName" # class method\r\n    reason: # placeholder id\r\n      placeholder: "%reason%" # replaced placeholder\r\n      method: "getReason" # class method\r\n    caused: # placeholder id\r\n      placeholder: "%caused%" # replaced placeholder\r\n      method: "getCaused#getName" # class method\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If you don't understand programming, then it can look a little confusing, because of the ",(0,a.jsx)(n.code,{children:"method"})," parameter.\r\nBut don't be disappointed, it's as simple as that! ",(0,a.jsx)("br",{}),"\r\nThis parameter is used to determine where the placeholder value will be taken from. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(n.p,{children:["Let's take a look at the JavaDocs of the ",(0,a.jsx)(n.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/events/AddonDisableEvent.html#method-summary",children:"AddonDisableEvent"})," class\r\n",(0,a.jsx)(n.img,{alt:"img.png",src:s(5563).A+"",width:"1028",height:"591"})]}),"\n",(0,a.jsxs)(n.p,{children:["Here we can see that the ",(0,a.jsx)(n.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/addon/internal/InternalAddon.html#method-summary",children:"AddonDisableEvent"})," class has several interesting methods, such as: ",(0,a.jsx)(n.code,{children:"getAddon"}),", ",(0,a.jsx)(n.code,{children:"getCaused"}),", and ",(0,a.jsx)(n.code,{children:"getReason"})," ",(0,a.jsx)("br",{}),"\r\nI think you've already guessed that these are the methods used to get placeholder values, but what is ",(0,a.jsx)(n.code,{children:"#"}),"? ",(0,a.jsx)("br",{}),"\r\nThis is a symbol for separating methods. For example, we call the getAddon method, which is an ",(0,a.jsx)(n.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/addon/internal/InternalAddon.html#method-summary",children:"InternalAddon"})," object that has the following methods:\r\n",(0,a.jsx)(n.img,{alt:"img.png",src:s(2507).A+"",width:"996",height:"539"}),"\r\nOf course, it will be a little strange to just display information about some ",(0,a.jsx)(n.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/addon/internal/InternalAddon.html#method-summary",children:"InternalJavaAddon"})," without additional instructions, but it is worth looking at what this class is and it looks like it represents the interface of an internal addon and we can take some useful information from it! Let's get the name of this addon, it seems that the ",(0,a.jsx)(n.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/addon/Addon.html#getName()",children:"getName"})," method is just right for us! ",(0,a.jsx)("br",{}),"\r\nWell, now our method looks like this: ",(0,a.jsx)(n.code,{children:"getAddon#getName"}),(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(n.p,{children:["If you have any additional questions, please contact our ",(0,a.jsx)(n.a,{href:"https://discord.gg/2syNtcKcgR",children:"Discord server"}),"!"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},2507:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/addon-fd6141c2fe7fb78b21e010e9daef4e2d.png"},5563:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/jd-f55dd03d5153789706d1ff40764cf04d.png"},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var t=s(6540);const a={},o=t.createContext(a);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
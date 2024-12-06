"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["8114"],{3296:function(e,a,t){t.r(a),t.d(a,{metadata:()=>r,contentTitle:()=>s,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"DonateCase/API/register-materials","title":"Register materials","description":"Custom materials are processed through the interface MaterialHandler","source":"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/DonateCase/API/materials.md","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/register-materials","permalink":"/en/docs/1.0.0/DonateCase/API/register-materials","draft":false,"unlisted":false,"tags":[],"version":"1.0.0","sidebarPosition":8,"frontMatter":{"id":"register-materials","title":"Register materials","sidebar_position":8},"sidebar":"sidebar","previous":{"title":"Register Sub Commands","permalink":"/en/docs/1.0.0/DonateCase/API/register-subcommands"},"next":{"title":"Register gui typed items","permalink":"/en/docs/1.0.0/DonateCase/API/register-guitypeditems"}}'),n=t("5893"),i=t("65");let l={id:"register-materials",title:"Register materials",sidebar_position:8},s="Register materials",o={},c=[{value:"Example implementation of <code>HEAD</code> material",id:"example-implementation-of-head-material",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Example of a call:",id:"example-of-a-call",level:4}];function d(e){let a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"register-materials",children:"Register materials"})}),"\n",(0,n.jsxs)(a.p,{children:["Custom materials are processed through the interface ",(0,n.jsx)(a.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot/2.2.6.7/raw/com/jodexindustries/donatecase/api/data/material/MaterialHandler.html",children:"MaterialHandler"})]}),"\n",(0,n.jsxs)(a.h2,{id:"example-implementation-of-head-material",children:["Example implementation of ",(0,n.jsx)(a.code,{children:"HEAD"})," material"]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"HEADMaterialHandlerImpl.java"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'import com.jodexindustries.donatecase.api.data.material.MaterialHandler;\r\nimport org.bukkit.Material;\r\nimport org.bukkit.inventory.ItemStack;\r\nimport org.bukkit.inventory.meta.SkullMeta;\r\nimport org.jetbrains.annotations.NotNull;\r\n\r\nimport java.util.Objects;\r\n\r\npublic class HEADMaterialHandlerImpl implements MaterialHandler {\r\n\r\n    @Override\r\n    public @NotNull ItemStack handle(@NotNull String context) {\r\n\r\n        Material type = Material.getMaterial("SKULL_ITEM");\r\n        ItemStack item;\r\n        if (type == null) {\r\n            item = new ItemStack(Objects.requireNonNull(Material.getMaterial("PLAYER_HEAD")));\r\n        } else {\r\n            item = new ItemStack(Objects.requireNonNull(Material.getMaterial("SKULL_ITEM")), 1, (short) 3);\r\n        }\r\n        SkullMeta meta = (SkullMeta) item.getItemMeta();\r\n        if (meta != null) {\r\n            meta.setOwner(context);\r\n            item.setItemMeta(meta);\r\n        }\r\n        return item;\r\n    }\r\n}\n'})}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Main.java"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'    @Override\r\n    public void onEnable() {\r\n        // getting a CaseManager\r\n        CaseManager api = new CaseManager(this);\r\n        \r\n        // getting a MaterialManager\r\n        MaterialManager manager = api.getMaterialManager();\r\n        \r\n        // material registration\r\n        manager.registerMaterial("HEAD", new HEADMaterialHandlerImpl(),\r\n                "Default Minecraft heads by nickname");\r\n    }\n'})}),"\n",(0,n.jsx)(a.h3,{id:"explanation",children:"Explanation"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"handle"})," method should return ",(0,n.jsx)(a.a,{href:"https://helpch.at/docs/1.16.5/org/bukkit/inventory/ItemStack.html",children:"ItemStack"}),",\r\nwhich will be used after calling the ",(0,n.jsx)(a.code,{children:"MaterialHandler"})," handler."]}),"\n",(0,n.jsx)(a.h4,{id:"example-of-a-call",children:"Example of a call:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'public static ItemStack loadCaseItem(String id) {\r\n    ItemStack itemStack = null;\r\n    String temp = id != null ? MaterialManager.getByStart(id) : null;\r\n\r\n    if (temp != null) {\r\n        CaseMaterial caseMaterial = MaterialManager.getRegisteredMaterial(temp);\r\n        if (caseMaterial != null) {\r\n            String context = id.replace(temp, "").replaceFirst(":", "").trim();\r\n            itemStack = caseMaterial.handle(context);\r\n        }\r\n    }\r\n\r\n    return itemStack;\r\n}\n'})})]})}function m(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},65:function(e,a,t){t.d(a,{Z:function(){return s},a:function(){return l}});var r=t(7294);let n={},i=r.createContext(n);function l(e){let a=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);
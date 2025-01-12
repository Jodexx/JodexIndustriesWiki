"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["378"],{4705:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>p,contentTitle:()=>r});var t=JSON.parse('{"id":"DonateCase/API/Spigot/implementing","title":"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F","description":"\u0414\u043B\u044F \u0440\u043E\u0431\u043E\u0442\u0438 \u043E\u0431\u043E\u0432\'\u044F\u0437\u043A\u043E\u0432\u043E \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0432\u0438\u0431\u0440\u0430\u0442\u0438 spigot-api \u043C\u043E\u0434\u0443\u043B\u044C \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F","source":"@site/docs/DonateCase/API/Spigot/implementing.mdx","sourceDirName":"DonateCase/API/Spigot","slug":"/DonateCase/API/Spigot/implementing","permalink":"/docs/2.0.0/DonateCase/API/Spigot/implementing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"implementing","title":"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F","sidebar_position":0},"sidebar":"defaultSidebar","previous":{"title":"\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F","permalink":"/docs/2.0.0/DonateCase/API/install"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432","permalink":"/docs/2.0.0/DonateCase/API/Spigot/register-events"}}'),a=n("5893"),s=n("65"),d=n("1705");let o={id:"implementing",title:"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F",sidebar_position:0},r="\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F",l={},p=[{value:"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0431\u0435\u0437 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u043F\u043B\u0430\u0433\u0456\u043D\u0443",id:"\u043F\u0440\u0438\u043A\u043B\u0430\u0434-\u0431\u0435\u0437-\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u044C\u043E\u0433\u043E-\u043F\u043B\u0430\u0433\u0456\u043D\u0443",level:2},{value:"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0456\u0437 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u043C \u043F\u043B\u0430\u0433\u0456\u043D\u043E\u043C",id:"\u043F\u0440\u0438\u043A\u043B\u0430\u0434-\u0456\u0437-\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u043C-\u043F\u043B\u0430\u0433\u0456\u043D\u043E\u043C",level:2}];function c(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"\u0432\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F",children:"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F"})}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsxs)(i.p,{children:["\u0414\u043B\u044F \u0440\u043E\u0431\u043E\u0442\u0438 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0432\u0438\u0431\u0440\u0430\u0442\u0438 ",(0,a.jsx)(i.code,{children:"spigot-api"})," \u043C\u043E\u0434\u0443\u043B\u044C \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 ",(0,a.jsx)(i.a,{href:"/docs/2.0.0/DonateCase/API/install",children:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F"})]})}),"\n",(0,a.jsx)(i.h2,{id:"\u043F\u0440\u0438\u043A\u043B\u0430\u0434-\u0431\u0435\u0437-\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u044C\u043E\u0433\u043E-\u043F\u043B\u0430\u0433\u0456\u043D\u0443",children:"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0431\u0435\u0437 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u043F\u043B\u0430\u0433\u0456\u043D\u0443"}),"\n",(0,a.jsx)(i.p,{children:"\u0426\u0435\u0439 \u0432\u0430\u0440\u0456\u043D\u0442 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u0438\u0445 \u0430\u0434\u0434\u043E\u043D\u0456\u0432 \u0434\u043B\u044F DonateCase, \u044F\u043A\u0456 \u043C\u0456\u0441\u0442\u044F\u0442\u044C\u0441\u044F \u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0456\u0457 DonateCase/addons/"}),"\n",(0,a.jsx)(d.Z,{language:"java",title:"src/main/java/com/jodexindustries/testaddon/TestAddon.java",children:`import com.jodexindustries.donatecase.api.addon.internal.InternalJavaAddon;
import com.jodexindustries.donatecase.api.DCAPIBukkit;

public class TestAddon extends InternalJavaAddon {

  private DCAPIBukkit api;

  @Override
  public void onLoad() {
      this.api = DCAPIBukkit.get(this);
      getLogger().info("TestAddon is loaded!")
  }

  @Override
  public void onEnable() {
      getLogger().info("TestAddon is enabled!");
  }

  @Override
  public void onDisable() {
      getLogger().info("TestAddon is disabled!");
  }
}
`}),"\n",(0,a.jsx)(d.Z,{language:"yaml",title:"src/main/resources/addon.yml",children:`name: TestAddon
main: com.jodexindustries.testaddon.TestAddon
version: 1.0.0
api: 2.0.2.1 # \u{43C}\u{456}\u{43D}\u{456}\u{43C}\u{430}\u{43B}\u{44C}\u{43D}\u{430} \u{432}\u{435}\u{440}\u{441}\u{456}\u{44F} api, \u{44F}\u{43A}\u{430} \u{43F}\u{43E}\u{442}\u{440}\u{456}\u{431}\u{43D}\u{430} \u{434}\u{43B}\u{44F} \u{440}\u{43E}\u{431}\u{43E}\u{442}\u{438} \u{430}\u{434}\u{434}\u{43E}\u{43D}\u{430}
`}),"\n",(0,a.jsx)(i.h2,{id:"\u043F\u0440\u0438\u043A\u043B\u0430\u0434-\u0456\u0437-\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u043C-\u043F\u043B\u0430\u0433\u0456\u043D\u043E\u043C",children:"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0456\u0437 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u043C \u043F\u043B\u0430\u0433\u0456\u043D\u043E\u043C"}),"\n",(0,a.jsx)(i.p,{children:"\u0426\u0435\u0439 \u0432\u0430\u0440\u0456\u043D\u0442 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F API DonateCase \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0456\u043D\u0448\u0438\u0445 \u043F\u043B\u0430\u0433\u0456\u043D\u0456\u0432 Spigot, \u044F\u043A\u0456 \u043C\u0456\u0441\u0442\u044F\u0442\u044C\u0441\u044F \u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0456\u0457 plugins/"}),"\n",(0,a.jsx)(d.Z,{language:"java",title:"src/main/java/com/jodexindustries/testplugin/TestPlugin.java",children:`import org.bukkit.plugin.java.JavaPlugin;
import com.jodexindustries.donatecase.api.DCAPIBukkit;

public final class TestPlugin extends JavaPlugin {

  private DCAPIBukkit api;

  @Override
  public void onLoad() {
      this.api = DCAPIBukkit.get();
  }
}

`}),"\n",(0,a.jsx)(d.Z,{language:"yaml",title:"src/main/resources/plugin.yml",children:`# \u{417}\u{430}\u{43B}\u{435}\u{436}\u{43D}\u{456}\u{441}\u{442}\u{44C} \u{432}\u{456}\u{434} DonateCase
depend:
- DonateCase
`})]})}function u(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);
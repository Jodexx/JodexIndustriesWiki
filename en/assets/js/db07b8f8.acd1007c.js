"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["772"],{4892:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>r});var a=JSON.parse('{"id":"DonateCase/API/implementing","title":"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F","description":"\u0426\u0435\u0439 \u0432\u0430\u0440\u0456\u043D\u0442 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u0438\u0445 \u0430\u0434\u0434\u043E\u043D\u0456\u0432 \u0434\u043B\u044F DonateCase, \u044F\u043A\u0456 \u043C\u0456\u0441\u0442\u044F\u0442\u044C\u0441\u044F \u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0456\u0457 DonateCase/addons/","source":"@site/docs/DonateCase/API/1_implementing.mdx","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/implementing","permalink":"/en/docs/2.0.0/DonateCase/API/implementing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"implementing","title":"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F","sidebar_position":1},"sidebar":"defaultSidebar","previous":{"title":"\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F","permalink":"/en/docs/2.0.0/DonateCase/API/install"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432","permalink":"/en/docs/2.0.0/DonateCase/API/register-events"}}'),i=t("5893"),s=t("65"),d=t("1705");let o={id:"implementing",title:"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F",sidebar_position:1},r="\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F",l={},c=[];function p(e){let n={a:"a",h1:"h1",header:"header",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u0432\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F",children:"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F"})}),"\n",(0,i.jsx)(n.p,{children:"\u0426\u0435\u0439 \u0432\u0430\u0440\u0456\u043D\u0442 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u0438\u0445 \u0430\u0434\u0434\u043E\u043D\u0456\u0432 \u0434\u043B\u044F DonateCase, \u044F\u043A\u0456 \u043C\u0456\u0441\u0442\u044F\u0442\u044C\u0441\u044F \u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0456\u0457 DonateCase/addons/"}),"\n",(0,i.jsxs)(n.p,{children:["\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0430\u0434\u0434\u043E\u043D\u0443: ",(0,i.jsx)(n.a,{href:"https://github.com/Jodexx/DonateCaseTestAddon",children:"Github"})]}),"\n",(0,i.jsx)(d.Z,{language:"java",title:"src/main/java/com/jodexindustries/testaddon/TestAddon.java",children:`import com.jodexindustries.donatecase.api.DCAPI;
import com.jodexindustries.donatecase.api.addon.InternalJavaAddon;

public class TestAddon extends InternalJavaAddon {

  private final DCAPI api = DCAPI.getInstance();

  @Override
  public void onLoad() {
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
`}),"\n",(0,i.jsx)(d.Z,{language:"yaml",title:"src/main/resources/addon.yml",children:`name: TestAddon
main: com.jodexindustries.testaddon.TestAddon
version: 1.0.0
api: 2.1.0.0 # \u{43C}\u{456}\u{43D}\u{456}\u{43C}\u{430}\u{43B}\u{44C}\u{43D}\u{430} \u{432}\u{435}\u{440}\u{441}\u{456}\u{44F} api, \u{44F}\u{43A}\u{430} \u{43F}\u{43E}\u{442}\u{440}\u{456}\u{431}\u{43D}\u{430} \u{434}\u{43B}\u{44F} \u{440}\u{43E}\u{431}\u{43E}\u{442}\u{438} \u{430}\u{434}\u{434}\u{43E}\u{43D}\u{430}
authors: ["_Jodex__"] # \u{430}\u{432}\u{442}\u{43E}\u{440}\u{438} \u{430}\u{434}\u{434}\u{43E}\u{43D}\u{443}
platforms: ["Bukkit"] # \u{441}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{438}\u{445} \u{43F}\u{43B}\u{430}\u{442}\u{444}\u{43E}\u{440}\u{43C}
softdepend: ["FriendCase"] # \u{441}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{43C}'\u{44F}\u{43A}\u{438}\u{445} \u{437}\u{430}\u{43B}\u{435}\u{436}\u{43D}\u{43E}\u{441}\u{442}\u{435}\u{439}
depend: ["DCEventManager"] # \u{441}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{436}\u{43E}\u{440}\u{441}\u{442}\u{43A}\u{438}\u{445} \u{437}\u{430}\u{43B}\u{435}\u{436}\u{43D}\u{43E}\u{441}\u{442}\u{435}\u{439} (\u{431}\u{435}\u{437} \u{43D}\u{438}\u{445} \u{430}\u{434}\u{434}\u{43E}\u{43D} \u{43D}\u{435} \u{437}\u{430}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}\u{441}\u{44F})
`})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);
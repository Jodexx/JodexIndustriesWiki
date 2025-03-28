"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["1460"],{8572:function(e,t,n){n.r(t),n.d(t,{default:()=>v,frontMatter:()=>d,metadata:()=>a,assets:()=>c,toc:()=>l,contentTitle:()=>o});var a=JSON.parse('{"id":"DonateCase/API/register-events","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432","description":"\u0406\u0432\u0435\u043D\u0442\u0438 DonateCase \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u044E\u0442\u044C\u0441\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E EventBus","source":"@site/docs/DonateCase/API/2_events.mdx","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/register-events","permalink":"/ru/docs/2.0.0/DonateCase/API/register-events","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"register-events","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432","sidebar_position":2},"sidebar":"defaultSidebar","previous":{"title":"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F","permalink":"/ru/docs/2.0.0/DonateCase/API/implementing"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","permalink":"/ru/docs/2.0.0/DonateCase/API/register-subcommands"}}'),i=n("5893"),s=n("65"),r=n("1705");let d={id:"register-events",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432",sidebar_position:2},o="\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432",c={},l=[{value:"\u041F\u0440\u043E\u0441\u043B\u0443\u0445\u043E\u0432\u0443\u0432\u0430\u0447",id:"\u043F\u0440\u043E\u0441\u043B\u0443\u0445\u043E\u0432\u0443\u0432\u0430\u0447",level:2},{value:"\u041B\u044F\u043C\u0431\u0434\u0430-\u0432\u0438\u0440\u0430\u0437",id:"\u043B\u044F\u043C\u0431\u0434\u0430-\u0432\u0438\u0440\u0430\u0437",level:2}];function p(e){let t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F-\u0456\u0432\u0435\u043D\u0442\u0456\u0432",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432"})}),"\n",(0,i.jsxs)(t.p,{children:["\u0406\u0432\u0435\u043D\u0442\u0438 DonateCase \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u044E\u0442\u044C\u0441\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E ",(0,i.jsx)(t.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.1.0.0/raw/com/jodexindustries/donatecase/api/event/EventBus.html",children:"EventBus"})]}),"\n",(0,i.jsx)(t.h2,{id:"\u043F\u0440\u043E\u0441\u043B\u0443\u0445\u043E\u0432\u0443\u0432\u0430\u0447",children:"\u041F\u0440\u043E\u0441\u043B\u0443\u0445\u043E\u0432\u0443\u0432\u0430\u0447"}),"\n",(0,i.jsxs)(t.p,{children:["\u041F\u0440\u043E\u0441\u043B\u0443\u0445\u043E\u0432\u0443\u0432\u0430\u0447 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0440\u0435\u0430\u043B\u0456\u0437\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,i.jsx)(t.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.1.0.0/raw/com/jodexindustries/donatecase/api/event/Subscriber.html",children:"Subscriber"}),"\r\n\u0442\u0430 \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u0432 \u0441\u043E\u0431\u0456 \u043C\u0435\u0442\u043E\u0434\u0438, \u044F\u043A\u0456 \u043C\u0430\u044E\u0442\u044C \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0456\u044E Subscribe"]}),"\n",(0,i.jsx)(r.Z,{language:"java",title:"src/main/java/com/jodexindustries/testaddon/EventListener.java",children:`import com.jodexindustries.donatecase.api.event.Subscriber;
import com.jodexindustries.donatecase.api.event.player.CaseInteractEvent;
import net.kyori.event.method.annotation.Subscribe;

public class EventListener implements Subscriber {

  @Subscribe
  public void onCaseInteract(CaseInteractEvent event) {
      if(event.action() == CaseInteractEvent.Action.RIGHT) {
          event.player().sendMessage("Right clicked!");
      } else {
          event.player().sendMessage("Left clicked!");
      }
  }
}
`}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043C\u0435\u0442\u043E\u0434\u0456\u0432 \u0443 \u043F\u0440\u043E\u0441\u043B\u0443\u0445\u043E\u0432\u0443\u0432\u0430\u0447\u0456 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0431\u0435\u0437\u043C\u0435\u0436\u043D\u043E\u044E"})}),"\n",(0,i.jsx)(r.Z,{language:"java",title:"src/main/java/com/jodexindustries/testaddon/MainAddon.java",children:`import com.jodexindustries.donatecase.api.DCAPI;
import com.jodexindustries.donatecase.api.addon.InternalJavaAddon;
import com.jodexindustries.testaddon.EventListener;

public class MainAddon extends InternalJavaAddon {

  private final DCAPI api = DCAPI.getInstance();
  
  private final EventListener listener = new EventListener();

  @Override
  public void onEnable() {
      api.getEventBus().register(listener);
  }
  
  @Override
  public void onDisable() {
      api.getEventBus().unregister(listener);
  }
}
`}),"\n",(0,i.jsx)(t.h2,{id:"\u043B\u044F\u043C\u0431\u0434\u0430-\u0432\u0438\u0440\u0430\u0437",children:"\u041B\u044F\u043C\u0431\u0434\u0430-\u0432\u0438\u0440\u0430\u0437"}),"\n",(0,i.jsx)(t.p,{children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0443 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0430 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u043B\u044F\u043C\u0431\u0434\u0430-\u0432\u0438\u0440\u0430\u0437\u0443, \u044F\u043A\u0449\u043E \u043D\u0435\u043C\u0430\u0454 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E\u0441\u0442\u0456 \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0432\u0435\u043B\u0438\u043A\u0443 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0456\u0432\u0435\u043D\u0442\u0456\u0432"}),"\n",(0,i.jsx)(r.Z,{language:"java",title:"src/main/java/com/jodexindustries/testaddon/MainAddon.java",children:`import com.jodexindustries.donatecase.api.DCAPI;
import com.jodexindustries.donatecase.api.addon.InternalJavaAddon;
import com.jodexindustries.donatecase.api.event.player.CaseInteractEvent;

public class MainAddon extends InternalJavaAddon {

  private final DCAPI api = DCAPI.getInstance();

  @Override
  public void onEnable() {
      api.getEventBus().register(CaseInteractEvent.class, event -> {
          if(event.action() == CaseInteractEvent.Action.RIGHT) {
              event.player().sendMessage("Right clicked!");
          } else {
              event.player().sendMessage("Left clicked!");
          }
      });
  }

}
`})]})}function v(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["8430"],{80:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>u,contentTitle:()=>l});var i=JSON.parse('{"id":"DonateCase/API/Spigot/register-events","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432","description":"\u0406\u0432\u0435\u043D\u0442\u0438 DonateCase \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u044E\u0442\u044C\u0441\u044F \u0442\u0430\u043A \u0441\u0430\u043C\u043E, \u044F\u043A \u0456 \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0456 \u0456\u0432\u0435\u043D\u0442\u0438 Bukkit","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/DonateCase/API/Spigot/events.mdx","sourceDirName":"DonateCase/API/Spigot","slug":"/DonateCase/API/Spigot/register-events","permalink":"/ru/docs/2.0.0/DonateCase/API/Spigot/register-events","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"register-events","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432","sidebar_position":1},"sidebar":"defaultSidebar","previous":{"title":"\u0412\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F","permalink":"/ru/docs/2.0.0/DonateCase/API/Spigot/implementing"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","permalink":"/ru/docs/2.0.0/DonateCase/API/Spigot/register-subcommands"}}'),r=n("5893"),s=n("65"),a=n("1705");let o={id:"register-events",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432",sidebar_position:1},l="\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432",d={},u=[{value:"\u0417\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u043F\u043B\u0430\u0433\u0456\u043D",id:"\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439-\u043F\u043B\u0430\u0433\u0456\u043D",level:2},{value:"\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u0430\u0434\u0434\u043E\u043D",id:"\u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439-\u0430\u0434\u0434\u043E\u043D",level:2}];function g(e){let t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F-\u0456\u0432\u0435\u043D\u0442\u0456\u0432",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432"})}),"\n",(0,r.jsx)(t.p,{children:"\u0406\u0432\u0435\u043D\u0442\u0438 DonateCase \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u044E\u0442\u044C\u0441\u044F \u0442\u0430\u043A \u0441\u0430\u043C\u043E, \u044F\u043A \u0456 \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0456 \u0456\u0432\u0435\u043D\u0442\u0438 Bukkit"}),"\n",(0,r.jsx)(a.Z,{language:"java",title:"EventListener \u043A\u043B\u0430\u0441",children:`import org.bukkit.event.Listener;
import org.bukkit.event.EventHandler;
import org.bukkit.entity.Player;
import com.jodexindustries.donatecase.api.events.CaseInteractEvent;

public class EventListener implements Listener {
  @EventHandler
  public void onCaseInteract(CaseInteractEvent e) {
      Player p = e.getPlayer();
      p.sendMessage(e.getClickedBlock().getLocation().toString());
  }
}
`}),"\n",(0,r.jsx)(t.h2,{id:"\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439-\u043F\u043B\u0430\u0433\u0456\u043D",children:"\u0417\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u043F\u043B\u0430\u0433\u0456\u043D"}),"\n",(0,r.jsx)(a.Z,{language:"java",title:"Main \u043A\u043B\u0430\u0441\u0441",children:`@Override
public void onEnable() {
  getServer().getPluginManager().registerEvents(new EventListener(), this);
}
`}),"\n",(0,r.jsx)(t.h2,{id:"\u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439-\u0430\u0434\u0434\u043E\u043D",children:"\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u0430\u0434\u0434\u043E\u043D"}),"\n",(0,r.jsx)(a.Z,{language:"java",title:"Main \u043A\u043B\u0430\u0441\u0441",children:`@Override
public void onEnable() {
  Plugin plugin = api.getDonateCase();
  plugin.getServer().getPluginManager().registerEvents(new EventListener(), plugin);
}
`})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}}}]);
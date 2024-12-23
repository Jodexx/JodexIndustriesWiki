"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["3335"],{6976:function(e,t,i){i.r(t),i.d(t,{metadata:()=>a,contentTitle:()=>d,default:()=>c,assets:()=>g,toc:()=>l,frontMatter:()=>o});var a=JSON.parse('{"id":"DonateCase/API/Spigot/register-animations","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439","description":"<CodeBlock","source":"@site/docs/DonateCase/API/Spigot/animations.mdx","sourceDirName":"DonateCase/API/Spigot","slug":"/DonateCase/API/Spigot/register-animations","permalink":"/en/docs/2.0.0/DonateCase/API/Spigot/register-animations","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"register-animations","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439","sidebar_position":4},"sidebar":"defaultSidebar","previous":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439","permalink":"/en/docs/2.0.0/DonateCase/API/Spigot/register-actions"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432","permalink":"/en/docs/2.0.0/DonateCase/API/Spigot/register-materials"}}'),n=i("5893"),s=i("65"),r=i("5056");let o={id:"register-animations",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439",sidebar_position:4},d="\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439",g={},l=[];function m(e){let t={h1:"h1",header:"header",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F-\u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439"})}),"\n",(0,n.jsx)(r.Z,{language:"java",title:"TestAnimation \u043A\u043B\u0430\u0441\u0441",children:`import com.jodexindustries.donatecase.api.data.animation.JavaAnimationBukkit;
import org.bukkit.Bukkit;

public class TestAnimation extends JavaAnimationBukkit {

  @Override
  public void start() {
      getApi().getAnimationManager().animationPreEnd(getCaseData(), getPlayer(), getUuid(), getWinItem());
      Bukkit.getScheduler().runTaskLater(getApi().getDonateCase(), () -> getApi().getAnimationManager().animationEnd(getCaseData(), getPlayer(), getUuid(), getWinItem()), 20L);
  }
}
`}),"\n",(0,n.jsx)(r.Z,{language:"java",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F",children:`api.getAnimationManager().registerAnimation(
      api.getAnimationManager().builder("test")
              .animation(TestAnimation.class)
              .description("Here some description")
              .build()
);
`})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}}}]);
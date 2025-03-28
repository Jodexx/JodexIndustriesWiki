"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["8459"],{7718:function(e,a,i){i.r(a),i.d(a,{default:()=>p,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>m,contentTitle:()=>d});var t=JSON.parse('{"id":"DonateCase/API/register-animations","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439","description":"<CodeBlock","source":"@site/docs/DonateCase/API/5_animations.mdx","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/register-animations","permalink":"/ru/docs/2.0.0/DonateCase/API/register-animations","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"register-animations","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439","sidebar_position":5},"sidebar":"defaultSidebar","previous":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439","permalink":"/ru/docs/2.0.0/DonateCase/API/register-actions"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432","permalink":"/ru/docs/2.0.0/DonateCase/API/register-materials"}}'),n=i("5893"),s=i("65"),r=i("1705");let o={id:"register-animations",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439",sidebar_position:5},d="\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439",c={},m=[];function l(e){let a={h1:"h1",header:"header",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F-\u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439"})}),"\n",(0,n.jsx)(r.Z,{language:"java",title:"src/main/java/com/jodexindustries/testaddon/registry/TestAnimation.java",children:`import com.jodexindustries.donatecase.api.DCAPI;
import com.jodexindustries.donatecase.spigot.api.animation.BukkitJavaAnimation;

public class TestAnimation extends BukkitJavaAnimation {

  private final DCAPI api = DCAPI.getInstance();

  @Override
  public void start() {
      preEnd();
      DCAPI.getInstance().getPlatform().getScheduler().run(api.getPlatform(), this::end, 20L);
  }
}
`}),"\n",(0,n.jsx)(r.Z,{language:"java",title:"src/main/java/com/jodexindustries/testaddon/MainAddon.java",children:`import com.jodexindustries.donatecase.api.DCAPI;
import com.jodexindustries.donatecase.api.addon.InternalJavaAddon;
import com.jodexindustries.donatecase.api.data.animation.CaseAnimation;
import com.jodexindustries.testaddon.registry.TestAnimation;

public class MainAddon extends InternalJavaAddon {

  private final DCAPI api = DCAPI.getInstance();

  @Override
  public void onEnable() {
      api.getAnimationManager().register(
              CaseAnimation.builder()
                      .name("test")
                      .animation(TestAnimation.class)
                      .description("Here some description")
                      .build()
      );
  }

}
`})]})}function p(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);
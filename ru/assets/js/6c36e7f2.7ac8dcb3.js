"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["8963"],{2183:function(e,t,a){a.r(t),a.d(t,{default:()=>p,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"DonateCase/API/register-actions","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439","description":"<CodeBlock","source":"@site/docs/DonateCase/API/4_actions.mdx","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/register-actions","permalink":"/ru/docs/2.0.0/DonateCase/API/register-actions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"register-actions","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439","sidebar_position":4},"sidebar":"defaultSidebar","previous":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","permalink":"/ru/docs/2.0.0/DonateCase/API/register-subcommands"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439","permalink":"/ru/docs/2.0.0/DonateCase/API/register-animations"}}'),n=a("5893"),s=a("65"),o=a("1705");let r={id:"register-actions",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439",sidebar_position:4},d="\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439",c={},l=[];function u(e){let t={h1:"h1",header:"header",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F-\u043F\u043E\u0434\u0456\u0439",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439"})}),"\n",(0,n.jsx)(o.Z,{language:"java",title:"src/main/java/com/jodexindustries/testaddon/registry/TestAction.java",children:`import com.jodexindustries.donatecase.api.data.action.ActionExecutor;
import com.jodexindustries.donatecase.api.platform.DCPlayer;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class TestAction implements ActionExecutor {

  @Override
  public void execute(@Nullable DCPlayer player, @NotNull String context) {
      if (player != null) player.sendMessage("Hello!");
  }
}
`}),"\n",(0,n.jsx)(o.Z,{language:"java",title:"src/main/java/com/jodexindustries/testaddon/MainAddon.java",children:`import com.jodexindustries.donatecase.api.DCAPI;
import com.jodexindustries.donatecase.api.addon.InternalJavaAddon;
import com.jodexindustries.donatecase.api.data.action.CaseAction;
import com.jodexindustries.testaddon.registry.TestAction;

public class MainAddon extends InternalJavaAddon {

  private final DCAPI api = DCAPI.getInstance();

  @Override
  public void onEnable() {
      api.getActionManager().register(
              CaseAction.builder()
                      .name("[test]")
                      .description("Awesome action!")
                      .executor(new TestAction()).build()
      );
  }

}
`})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["3887"],{2089:function(e,t,i){i.r(t),i.d(t,{metadata:()=>a,contentTitle:()=>l,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"DonateCase/API/Spigot/register-actions","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439","description":"<CodeBlock","source":"@site/docs/DonateCase/API/Spigot/actions.mdx","sourceDirName":"DonateCase/API/Spigot","slug":"/DonateCase/API/Spigot/register-actions","permalink":"/JodexIndustriesWiki/docs/2.0.0/DonateCase/API/Spigot/register-actions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"register-actions","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439","sidebar_position":3},"sidebar":"defaultSidebar","previous":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","permalink":"/JodexIndustriesWiki/docs/2.0.0/DonateCase/API/Spigot/register-subcommands"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439","permalink":"/JodexIndustriesWiki/docs/2.0.0/DonateCase/API/Spigot/register-animations"}}'),n=i("5893"),s=i("65"),o=i("5056");let r={id:"register-actions",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439",sidebar_position:3},l="\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439",c={},d=[];function u(e){let t={h1:"h1",header:"header",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F-\u043F\u043E\u0434\u0456\u0439",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439"})}),"\n",(0,n.jsx)(o.Z,{language:"java",title:"TestAction \u043A\u043B\u0430\u0441\u0441",children:`import com.jodexindustries.donatecase.api.data.action.ActionExecutor;
import org.bukkit.entity.Player;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class TestAction implements ActionExecutor<Player> {

  @Override
  public void execute(@Nullable Player player, @NotNull String context, int cooldown) {
      if (player != null) player.sendMessage("Hello!");
  }
}
`}),"\n",(0,n.jsx)(o.Z,{language:"java",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F",children:`ActionManager<Player> actionManager = api.getActionManager();
actionManager.registerAction("[test]", new TestAction(), "Awesome action!");
`})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);
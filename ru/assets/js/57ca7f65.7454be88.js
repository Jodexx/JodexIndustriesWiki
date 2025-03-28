"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["6715"],{8958:function(e,a,t){t.r(a),t.d(a,{default:()=>l,frontMatter:()=>r,metadata:()=>s,assets:()=>m,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"DonateCase/API/register-subcommands","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","description":"<CodeBlock","source":"@site/docs/DonateCase/API/3_subcommands.mdx","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/register-subcommands","permalink":"/ru/docs/2.0.0/DonateCase/API/register-subcommands","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"register-subcommands","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","sidebar_position":3},"sidebar":"defaultSidebar","previous":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432","permalink":"/ru/docs/2.0.0/DonateCase/API/register-events"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439","permalink":"/ru/docs/2.0.0/DonateCase/API/register-actions"}}'),n=t("5893"),i=t("65"),o=t("1705");let r={id:"register-subcommands",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",sidebar_position:3},d="\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",m={},c=[];function u(e){let a={h1:"h1",header:"header",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F-\u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434"})}),"\n",(0,n.jsx)(o.Z,{language:"java",title:"src/main/java/com/jodexindustries/testaddon/commands/FirstCommand.java",children:`import com.jodexindustries.donatecase.api.data.subcommand.SubCommandExecutor;
import com.jodexindustries.donatecase.api.data.subcommand.SubCommandTabCompleter;
import com.jodexindustries.donatecase.api.platform.DCCommandSender;
import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;
import java.util.List;

public class FirstCommand implements SubCommandExecutor, SubCommandTabCompleter {

  @Override
  public boolean execute(DCCommandSender sender, @NotNull String label, String[] args) {
      sender.sendMessage("First command");
      return true;
  }

  @Override
  public List<String> getTabCompletions(@NotNull DCCommandSender sender, @NotNull String label, String[] args) {
      return new ArrayList<>();
  }

}
`}),"\n",(0,n.jsx)(o.Z,{language:"java",title:"src/main/java/com/jodexindustries/testaddon/MainAddon.java",children:`import com.jodexindustries.donatecase.api.DCAPI;
import com.jodexindustries.donatecase.api.addon.InternalJavaAddon;
import com.jodexindustries.donatecase.api.data.subcommand.SubCommand;
import com.jodexindustries.donatecase.api.data.subcommand.SubCommandType;
import com.jodexindustries.testaddon.commands.FirstCommand;

public class MainAddon extends InternalJavaAddon {

  private final DCAPI api = DCAPI.getInstance();

  @Override
  public void onEnable() {
      FirstCommand executor = new FirstCommand();

      SubCommand first = SubCommand.builder()
              .name("test")
              .permission(SubCommandType.PLAYER.permission)
              .executor(executor)
              .tabCompleter(executor)
              .args(new String[]{"(test)", "(test2)"})
              .description("This is cool command!")
              .build();

      api.getSubCommandManager().register(first);
  }

}
`})]})}function l(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);
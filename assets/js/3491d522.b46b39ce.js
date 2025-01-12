"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["6385"],{4203:function(e,a,n){n.r(a),n.d(a,{default:()=>l,frontMatter:()=>m,metadata:()=>t,assets:()=>i,toc:()=>u,contentTitle:()=>s});var t=JSON.parse('{"id":"DonateCase/API/Spigot/register-subcommands","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","description":"\u041F\u0435\u0440\u0448\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431","source":"@site/docs/DonateCase/API/Spigot/subcommands.mdx","sourceDirName":"DonateCase/API/Spigot","slug":"/DonateCase/API/Spigot/register-subcommands","permalink":"/docs/2.0.0/DonateCase/API/Spigot/register-subcommands","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"register-subcommands","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","sidebar_position":2},"sidebar":"defaultSidebar","previous":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0456\u0432\u0435\u043D\u0442\u0456\u0432","permalink":"/docs/2.0.0/DonateCase/API/Spigot/register-events"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0434\u0456\u0439","permalink":"/docs/2.0.0/DonateCase/API/Spigot/register-actions"}}'),o=n("5893"),r=n("65"),d=n("1705");let m={id:"register-subcommands",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",sidebar_position:2},s="\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",i={},u=[{value:"\u041F\u0435\u0440\u0448\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431",id:"\u043F\u0435\u0440\u0448\u0438\u0439-\u0441\u043F\u043E\u0441\u0456\u0431",level:2},{value:"\u0414\u0440\u0443\u0433\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431",id:"\u0434\u0440\u0443\u0433\u0438\u0439-\u0441\u043F\u043E\u0441\u0456\u0431",level:2}];function c(e){let a={h1:"h1",h2:"h2",header:"header",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F-\u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434"})}),"\n",(0,o.jsx)(a.h2,{id:"\u043F\u0435\u0440\u0448\u0438\u0439-\u0441\u043F\u043E\u0441\u0456\u0431",children:"\u041F\u0435\u0440\u0448\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431"}),"\n",(0,o.jsx)(d.Z,{language:"java",title:"TestCommand \u043A\u043B\u0430\u0441\u0441",children:`import com.jodexindustries.donatecase.api.data.subcommand.SubCommandExecutor;
import com.jodexindustries.donatecase.api.data.subcommand.SubCommandTabCompleter;
import org.bukkit.command.CommandSender;
import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;
import java.util.List;

public class TestCommand implements SubCommandExecutor<CommandSender>, SubCommandTabCompleter<CommandSender> {

  @Override
  public void execute(CommandSender sender, @NotNull String label, String[] args) {
      sender.sendMessage("Bukkit command");
  }

  @Override
  public List<String> getTabCompletions(@NotNull CommandSender sender, @NotNull String label, String[] args) {
      return new ArrayList<>();
  }

}
`}),"\n",(0,o.jsx)(d.Z,{language:"java",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F",children:`SubCommandManager<CommandSender> subCommandManager = api.getSubCommandManager();

TestCommand executor = new TestCommand();

SubCommand subCommand = subCommandManager.builder("test")
      .permission("donatecase.player")
      .executor(executor)
      .tabCompleter(executor)
      .args(new String[]{"(test)", "(test2)"})
      .description("This is cool command!")
      .build();

subCommandManager.registerSubCommand(subCommand);
`}),"\n",(0,o.jsx)(a.h2,{id:"\u0434\u0440\u0443\u0433\u0438\u0439-\u0441\u043F\u043E\u0441\u0456\u0431",children:"\u0414\u0440\u0443\u0433\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431"}),"\n",(0,o.jsx)(d.Z,{language:"java",title:"SecondCommand \u043A\u043B\u0430\u0441\u0441",children:`import com.jodexindustries.donatecase.api.addon.Addon;
import com.jodexindustries.donatecase.api.data.subcommand.SubCommand;
import com.jodexindustries.donatecase.api.data.subcommand.SubCommandExecutor;
import com.jodexindustries.donatecase.api.data.subcommand.SubCommandTabCompleter;
import com.jodexindustries.donatecase.api.data.subcommand.SubCommandType;
import org.bukkit.command.CommandSender;

import java.util.ArrayList;

public class SecondCommand extends SubCommand<CommandSender> {

  public SecondCommand(String name, Addon addon) {
      super(name, addon);
  }

  @Override
  public String getDescription() {
      return "This is a second command";
  }

  @Override
  public String getPermission() {
      return SubCommandType.PLAYER.permission;
  }

  @Override
  public String[] getArgs() {
      return new String[]{"(test)", "(test2)"};
  }

  @Override
  public SubCommandExecutor<CommandSender> getExecutor() {
      return (sender, label, args) -> sender.sendMessage("Second command");
  }

  @Override
  public SubCommandTabCompleter<CommandSender> getTabCompleter() {
      return (sender, label, args) -> new ArrayList<>();
  }

}`}),"\n",(0,o.jsx)(d.Z,{language:"java",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F",children:`SubCommandManager<CommandSender> subCommandManager = api.getSubCommandManager();
  
SecondCommand second = new SecondCommand("test2", api.getAddon());
subCommandManager.registerSubCommand(second);
`})]})}function l(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);
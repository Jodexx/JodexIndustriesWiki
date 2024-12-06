"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["6385"],{9713:function(n,e,r){r.r(e),r.d(e,{metadata:()=>a,contentTitle:()=>i,default:()=>l,assets:()=>d,toc:()=>m,frontMatter:()=>s});var a=JSON.parse('{"id":"DonateCase/API/Spigot/register-subcommands","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","description":"\u0417\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u043E!","source":"@site/docs/DonateCase/API/Spigot/subcommands.mdx","sourceDirName":"DonateCase/API/Spigot","slug":"/DonateCase/API/Spigot/register-subcommands","permalink":"/ru/docs/2.0.0/DonateCase/API/Spigot/register-subcommands","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"register-subcommands","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","sidebar_position":7},"sidebar":"defaultSidebar","previous":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439","permalink":"/ru/docs/2.0.0/DonateCase/API/Spigot/register-animations"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432","permalink":"/ru/docs/2.0.0/DonateCase/API/Spigot/register-materials"}}'),t=r("5893"),o=r("65");let s={id:"register-subcommands",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",sidebar_position:7},i="\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",d={},m=[{value:"\u041F\u0435\u0440\u0448\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431",id:"\u043F\u0435\u0440\u0448\u0438\u0439-\u0441\u043F\u043E\u0441\u0456\u0431",level:2},{value:"\u0414\u0440\u0443\u0433\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431",id:"\u0434\u0440\u0443\u0433\u0438\u0439-\u0441\u043F\u043E\u0441\u0456\u0431",level:2}];function c(n){let e={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F-\u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434"})}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsx)(e.p,{children:"\u0417\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u043E!"})}),"\n",(0,t.jsx)(e.h2,{id:"\u043F\u0435\u0440\u0448\u0438\u0439-\u0441\u043F\u043E\u0441\u0456\u0431",children:"\u041F\u0435\u0440\u0448\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"TestCommand \u043A\u043B\u0430\u0441"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'import com.jodexindustries.donatecase.api.data.subcommand.SubCommandExecutor;\r\nimport com.jodexindustries.donatecase.api.data.subcommand.SubCommandTabCompleter;\r\nimport org.bukkit.command.CommandSender;\r\nimport org.jetbrains.annotations.NotNull;\r\n\r\nimport java.util.ArrayList;\r\nimport java.util.List;\r\n\r\npublic class TestCommand implements SubCommandExecutor, SubCommandTabCompleter {\r\n\r\n    /**\r\n     * \u0412\u0438\u043A\u043E\u043D\u0443\u0454 \u0437\u0430\u0434\u0430\u043D\u0443 \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434\u0443\r\n     * @param sender \u0414\u0436\u0435\u0440\u0435\u043B\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0438\r\n     * @param label \u042F\u0440\u043B\u0438\u043A \u043A\u043E\u043C\u0430\u043D\u0434\u0438\r\n     * @param args \u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0454\u043C\u0456 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0438\r\n     */\r\n    @Override\r\n    public void execute(CommandSender sender, @NotNull String label, String[] args) {\r\n        // \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0439 \u043A\u043E\u0434, \u044F\u043A \u0434\u043B\u044F Bukkit \u043A\u043E\u043C\u0430\u043D\u0434\u0438\r\n        sender.sendMessage("Bukkit command");\r\n    }\r\n\r\n    /**\r\n     * \u041D\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F \u0442\u0430\u0431\u0443\u043B\u044F\u0446\u0456\u0457\r\n     * @param sender \u0414\u0436\u0435\u0440\u0435\u043B\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0438\r\n     * @param label \u042F\u0440\u043B\u0438\u043A \u043A\u043E\u043C\u0430\u043D\u0434\u0438\r\n     * @param args \u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0454\u043C\u0456 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0438\r\n     * @return \u043D\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F\r\n     */\r\n    @Override\r\n    public List<String> getTabCompletions(@NotNull CommandSender sender, @NotNull String label, String[] args) {\r\n        return new ArrayList<>();\r\n    }\r\n\r\n}\n'})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"Main \u043A\u043B\u0430\u0441"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'    @Override\r\n    public void onEnable() {\r\n        // \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F CaseManager\r\n        CaseManager api = new CaseManager(this);\r\n        // \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434\u0438\r\n        SubCommandManager subCommandManager = api.getSubCommandManager();\r\n    \r\n        TestCommand executor = new TestCommand();\r\n    \r\n        SubCommand subCommand = subCommandManager.builder("test")\r\n                .type(SubCommandType.PLAYER)\r\n                .executor(executor)\r\n                .tabCompleter(executor)\r\n                .args(new String[]{"(test)", "(test2)"})\r\n                .description("This is cool command!")\r\n                .build();\r\n    \r\n        subCommandManager.registerSubCommand(subCommand);\r\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u0434\u0440\u0443\u0433\u0438\u0439-\u0441\u043F\u043E\u0441\u0456\u0431",children:"\u0414\u0440\u0443\u0433\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"SecondCommand \u043A\u043B\u0430\u0441"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'import com.jodexindustries.donatecase.api.addon.Addon;\r\nimport com.jodexindustries.donatecase.api.data.SubCommandType;\r\nimport com.jodexindustries.donatecase.api.data.subcommand.SubCommand;\r\nimport org.bukkit.command.CommandSender;\r\nimport org.jetbrains.annotations.NotNull;\r\n\r\nimport java.util.List;\r\n\r\npublic class SecondCommand extends SubCommand {\r\n\r\n    public SecondCommand(String name, Addon addon) {\r\n        super(name, addon);\r\n\r\n        setType(SubCommandType.PLAYER);\r\n        setDescription("This is a second command");\r\n        setArgs(new String[]{"(test)", "(test2)"});\r\n    }\r\n\r\n    @Override\r\n    public void execute(@NotNull CommandSender sender, @NotNull String label, String[] args) {\r\n        sender.sendMessage("Second command");\r\n    }\r\n\r\n    @Override\r\n    public List<String> getTabCompletions(@NotNull CommandSender sender, @NotNull String label, String[] args) {\r\n        return new ArrayList<>();\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"Main class"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'    @Override\r\n    public void onEnable() {\r\n        // \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F CaseManager\r\n        CaseManager api = new CaseManager(this);\r\n        // \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434\u0438\r\n        SubCommandManager subCommandManager = api.getSubCommandManager();\r\n        \r\n        SecondCommand second = new SecondCommand("test2", api.getAddon());\r\n        subCommandManager.registerSubCommand(second);\r\n    }\n'})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"Main class"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'    @Override\r\n    public void onEnable() {\r\n        // \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F CaseManager\r\n        CaseManager api = new CaseManager(this);\r\n        // \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434\u0438\r\n        SubCommandManager subCommandManager = api.getSubCommandManager();\r\n        subCommandManager.registerSubCommand("test", new TestCommand());\r\n    }\n'})})]})}function l(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},65:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return s}});var a=r(7294);let t={},o=a.createContext(t);function s(n){let e=a.useContext(o);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);
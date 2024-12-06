"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["1445"],{1368:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>d,default:()=>u,assets:()=>i,toc:()=>m,frontMatter:()=>o});var r=JSON.parse('{"id":"DonateCase/API/register-subcommands","title":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","description":"\u041F\u0435\u0440\u0432\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-1.0.0/DonateCase/API/subcommands.md","sourceDirName":"DonateCase/API","slug":"/DonateCase/API/register-subcommands","permalink":"/ru/docs/1.0.0/DonateCase/API/register-subcommands","draft":false,"unlisted":false,"tags":[],"version":"1.0.0","sidebarPosition":7,"frontMatter":{"id":"register-subcommands","title":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434","sidebar_position":7},"sidebar":"sidebar","previous":{"title":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0439","permalink":"/ru/docs/1.0.0/DonateCase/API/register-animations"},"next":{"title":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432","permalink":"/ru/docs/1.0.0/DonateCase/API/register-materials"}}'),s=a("5893"),t=a("65");let o={id:"register-subcommands",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",sidebar_position:7},d="\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",i={},m=[{value:"\u041F\u0435\u0440\u0432\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431",id:"\u043F\u0435\u0440\u0432\u044B\u0439-\u0441\u043F\u043E\u0441\u043E\u0431",level:2},{value:"\u0412\u0442\u043E\u0440\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431",id:"\u0432\u0442\u043E\u0440\u043E\u0439-\u0441\u043F\u043E\u0441\u043E\u0431",level:2}];function c(n){let e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F-\u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434"})}),"\n",(0,s.jsx)(e.h2,{id:"\u043F\u0435\u0440\u0432\u044B\u0439-\u0441\u043F\u043E\u0441\u043E\u0431",children:"\u041F\u0435\u0440\u0432\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431"}),"\n",(0,s.jsx)(e.p,{children:"TestCommand \u043A\u043B\u0430\u0441\u0441"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'import com.jodexindustries.donatecase.api.data.subcommand.SubCommandExecutor;\nimport com.jodexindustries.donatecase.api.data.subcommand.SubCommandTabCompleter;\nimport org.bukkit.command.CommandSender;\nimport org.jetbrains.annotations.NotNull;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class TestCommand implements SubCommandExecutor, SubCommandTabCompleter {\n\n    /**\n     * Executes the given sub command\n     * @param sender Source of the command\n     * @param label Command label\n     * @param args Passed command arguments\n     */\n    @Override\n    public void execute(CommandSender sender, @NotNull String label, String[] args) {\n        sender.sendMessage("Bukkit command");\n    }\n\n    /**\n     * Get command tab completions\n     * @param sender Command sender\n     * @param label Command label\n     * @param args Command args\n     * @return tab completions\n     */\n    @Override\n    public List<String> getTabCompletions(@NotNull CommandSender sender, @NotNull String label, String[] args) {\n        return new ArrayList<>();\n    }\n\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"Main class"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'    @Override\n    public void onEnable() {\n        // \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 CaseManager\n        CaseManager api = new CaseManager(this);\n        // \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u044B\n        SubCommandManager subCommandManager = api.getSubCommandManager();\n    \n        TestCommand executor = new TestCommand();\n    \n        SubCommand subCommand = subCommandManager.builder("test")\n                .type(SubCommandType.PLAYER)\n                .executor(executor)\n                .tabCompleter(executor)\n                .args(new String[]{"(test)", "(test2)"})\n                .description("This is cool command!")\n                .build();\n    \n        subCommandManager.registerSubCommand(subCommand);\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u0432\u0442\u043E\u0440\u043E\u0439-\u0441\u043F\u043E\u0441\u043E\u0431",children:"\u0412\u0442\u043E\u0440\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431"}),"\n",(0,s.jsx)(e.p,{children:"SecondCommand \u043A\u043B\u0430\u0441\u0441"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'import com.jodexindustries.donatecase.api.addon.Addon;\nimport com.jodexindustries.donatecase.api.data.SubCommandType;\nimport com.jodexindustries.donatecase.api.data.subcommand.SubCommand;\nimport org.bukkit.command.CommandSender;\nimport org.jetbrains.annotations.NotNull;\n\nimport java.util.List;\n\npublic class SecondCommand extends SubCommand {\n\n    public SecondCommand(String name, Addon addon) {\n        super(name, addon);\n\n        setType(SubCommandType.PLAYER);\n        setDescription("This is a second command");\n        setArgs(new String[]{"(test)", "(test2)"});\n    }\n\n    @Override\n    public void execute(@NotNull CommandSender sender, @NotNull String label, String[] args) {\n        sender.sendMessage("Second command");\n    }\n\n    @Override\n    public List<String> getTabCompletions(@NotNull CommandSender sender, @NotNull String label, String[] args) {\n        return new ArrayList<>();\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"Main class"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'    @Override\n    public void onEnable() {\n        // \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 CaseManager\n        CaseManager api = new CaseManager(this);\n        // \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u0443\u0431\u043A\u043E\u043C\u0430\u043D\u0434\u044B\n        SubCommandManager subCommandManager = api.getSubCommandManager();\n        \n        SecondCommand second = new SecondCommand("test2", api.getAddon());\n        subCommandManager.registerSubCommand(second);\n    }\n'})}),"\n",(0,s.jsx)(e.p,{children:"Main class"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'    @Override\n    public void onEnable() {\n        // \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 CaseManager\n        CaseManager api = new CaseManager(this);\n        // \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u0443\u0431 \u043A\u043E\u043C\u0430\u043D\u0434\u044B\n        SubCommandManager subCommandManager = api.getSubCommandManager();\n        subCommandManager.registerSubCommand("test", new TestSubCommand());\n    }\n'})})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},65:function(n,e,a){a.d(e,{Z:function(){return d},a:function(){return o}});var r=a(7294);let s={},t=r.createContext(s);function o(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);
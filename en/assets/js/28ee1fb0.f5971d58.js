"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["348"],{7950:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>t});var i=JSON.parse('{"id":"DonateCase/items-settings","title":"Items settings","description":"Setup gui items","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DonateCase/items-settings.md","sourceDirName":"DonateCase","slug":"/DonateCase/items-settings","permalink":"/en/docs/2.0.0/DonateCase/items-settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"items-settings","title":"Items settings","toc_min_heading_level":2,"toc_max_heading_level":5,"sidebar_position":4},"sidebar":"defaultSidebar","previous":{"title":"Configurations","permalink":"/en/docs/2.0.0/DonateCase/configurations"},"next":{"title":"Animations","permalink":"/en/docs/2.0.0/DonateCase/animations"}}'),a=s("5893"),l=s("65");let t={id:"items-settings",title:"Items settings",toc_min_heading_level:2,toc_max_heading_level:5,sidebar_position:4},r=void 0,o={},c=[{value:"Setup gui items",id:"setup-gui-items",level:2},{value:"Example lore",id:"example-lore",level:3},{value:"Placeholders",id:"placeholders",level:3},{value:"Example list",id:"example-list",level:3},{value:"Example RGB",id:"example-rgb",level:3},{value:"Example type for opening another case",id:"example-type-for-opening-another-case",level:3},{value:"Setting up an item with type HISTORY",id:"setting-up-an-item-with-type-history",level:3},{value:"History not found",id:"history-not-found",level:4},{value:"Setup win items",id:"setup-win-items",level:2},{value:"Placeholders",id:"placeholders-1",level:3},{value:"Actions",id:"actions",level:3},{value:"GiveType: <code>ONE</code>",id:"givetype-one",level:4},{value:"GiveType: <code>RANDOM</code>",id:"givetype-random",level:4},{value:"Alternative actions",id:"alternative-actions",level:4},{value:"Actions cooldown",id:"actions-cooldown",level:4}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"setup-gui-items",children:"Setup gui items"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"DisplayName"})," - Displaying the item name ",(0,a.jsx)("br",{}),"\r\n",(0,a.jsx)(n.code,{children:"Enchanted"})," - Has 2 data types: ",(0,a.jsx)(n.code,{children:"true"})," or ",(0,a.jsx)(n.code,{children:"false"}),", if ",(0,a.jsx)(n.code,{children:"true"})," - the item will be enchanted ",(0,a.jsx)("br",{}),"\r\n",(0,a.jsx)(n.code,{children:"Lore"})," - Description of the item ",(0,a.jsx)("br",{}),"\r\n",(0,a.jsx)(n.code,{children:"ModelData (optional)"})," - Custom model data"]}),"\n",(0,a.jsx)(n.h3,{id:"example-lore",children:"Example lore"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'Lore:\r\n  - "&cVery cool lore"\r\n  - "&dYeah, its colored"\r\n  - "&bPlaceholders? %keys%"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"placeholders",children:"Placeholders"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%keys%"})," - Number of player keys"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%case%"})," - Name of the case"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Slots"})," - A list or range of slots that this item will be in"]}),"\n",(0,a.jsx)(n.h3,{id:"example-list",children:"Example list"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Slots:\r\n  - 0\r\n  - 8\r\n  - 9-16 # can be like range\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Material"})," - Item material, all item types are described ",(0,a.jsx)(n.a,{href:"https://wiki.jodexindustries.space/docs/DonateCase/materials",children:"here"})," ",(0,a.jsx)("br",{}),"\r\n",(0,a.jsx)(n.code,{children:"Rgb (optional)"})," - Ability to change the color of leather items ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(n.h3,{id:"example-rgb",children:"Example RGB"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Rgb: 123, 50, 15\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Type"})," - Type of item, there are 3 types:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"DEFAULT"})," - a normal item for the beauty of GUI"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"OPEN"})," - an item that opens the case (or you can use OPEN_<anotherCaseName> for opening another case)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"HISTORY"})," - an item that displays the history of recent case openings ",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example-type-for-opening-another-case",children:"Example type for opening another case"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"Type: OPEN_donate\r\n# donate - another case name\n"})}),"\n",(0,a.jsx)(n.h3,{id:"setting-up-an-item-with-type-history",children:"Setting up an item with type HISTORY"}),"\n",(0,a.jsx)(n.p,{children:"Placeholders:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%player%"})," - Player name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%group%"})," - Group name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%groupdisplayname%"})," - Group display name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%time%"})," - Case opening time"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%action%"})," - RandomAction name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%actiondisplayname%"})," - RandomAction display name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%casename%"})," - Case name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%casedisplayname%"})," - Case display name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%casetitle"})," - Case title"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Type: HISTORY-[index]-[case]     (",(0,a.jsx)(n.em,{children:"index - index of recent case openings, range 0-9; case - case type optional"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"History0:\r\n  DisplayName: \"&c%player%\"\r\n  Enchanted: false\r\n  Lore:\r\n    - '&6Group &f- &c%group%'\r\n    - '&6Time &f- &c%time%'\r\n    - ''\r\n  Slots:\r\n    - 36\r\n  # Material: TRIPWIRE_HOOK - The material will already be like player_head, if commented, can be DEFAULT, if you want to use win item material\r\n  Type: HISTORY-0-case # 0 is the index of recent case openings, range 0-9; case is the case type, if null, then default case type (optional)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:"HISTORY-[index]-GLOBAL"})," option, if you want to display sorted opens of all cases"]}),"\n",(0,a.jsx)(n.h4,{id:"history-not-found",children:"History not found"}),"\n",(0,a.jsxs)(n.p,{children:["Advanced customization is also available for this type of item. If the recent discovery index is not yet populated (the case has not been opened), you can set a completely different item instead of history in the ",(0,a.jsx)(n.code,{children:"HistoryNotFound"})," section:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"History0:\r\n  DisplayName: '&c%player%'\r\n  Enchanted: false\r\n  Lore:\r\n  - '&6Group &f- &c%group%'\r\n  - '&6Time &f- &c%time%'\r\n  - ''\r\n  Slots:\r\n  - 36\r\n  # Material: TRIPWIRE_HOOK - Material will already be player_head if commented out, can be DEFAULT if you want to use the winning item's material\r\n  Type: HISTORY-0-case # 0 - index of recent case openings, range 0-9; case - case type, if empty, will be the default case (optional)\r\n  HistoryNotFound: # Section for unfilled indexes\r\n    DisplayName: \"&cNot found\"\r\n    Material: BARRIER\r\n    #Enchanted: false\r\n    #Lore:\r\n    # - \"&cSorry...\"\r\n    #ModelData: 1234\r\n    #Rgb: 255,255,255.\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setup-win-items",children:"Setup win items"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Group"})," - A group that is given to the player as a prize ",(0,a.jsx)("br",{}),"\r\n",(0,a.jsx)(n.code,{children:"Chance"})," - The chance at which this prize is awarded ",(0,a.jsx)("br",{}),"\r\n",(0,a.jsx)(n.code,{children:"GiveType"})," - Award type, if ONE, then the player is given only one prize (Actions), if RANDOM, then a prize with different chances is selected (RandomActions)"]}),"\n",(0,a.jsx)(n.h3,{id:"placeholders-1",children:"Placeholders"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%player%"})," - Player name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%group%"})," - Group name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%groupdisplayname%"})," - Group display name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%casename%"})," - Case name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%casedisplayname%"})," - Case display name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"%casetitle"})," - Case title"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"actions",children:"Actions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[command]"})," - the console command will be executed"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[broadcast]"})," - the message will be sent to all players"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[message]"})," - the message will be sent to player who opened the case"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[title]"})," - the title will be sent to the player who opened the case (sign ",(0,a.jsx)(n.code,{children:";"})," separates the title from the subtitle)"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"- '[title] (title);(subtitle)'\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[sound]"})," - the sound will be played for player who opened the case:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"- '[sound] (sound) (volume) (pitch)'\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"givetype-one",children:["GiveType: ",(0,a.jsx)(n.code,{children:"ONE"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"      Actions: # GiveType: ONE\r\n        - '[command] lp user %player% parent set %group%'\r\n        - '[title] &aCongratulations!;&5you won %groupdisplayname%'\r\n        - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'\r\n        - '[sound] ENTITY_ENDERMAN_DEATH 2 1'\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"givetype-random",children:["GiveType: ",(0,a.jsx)(n.code,{children:"RANDOM"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"      RandomActions: # GiveType: RANDOM\r\n        first:\r\n          Chance: 50 # Chance between random actions\r\n          DisplayName: \"something\" # displayname for historydata displaying\r\n          Actions:\r\n            - '[command] say something'\r\n            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'\r\n        second:\r\n          Chance: 50 # Chance between random actions\r\n          Actions:\r\n            - '[command] say something'\r\n            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"alternative-actions",children:"Alternative actions"}),"\n",(0,a.jsx)(n.p,{children:"It is performed when the player's group is higher than the one he won (available for both types of GiveType)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"      AlternativeActions: # GiveType: any, it doesn't matter; is performed if the group is lower in rank than the player's group in LevelGroups\r\n        - \"[message] &cI'm sorry %player%, but you have group a stronger group than you won:(\"\n"})}),"\n",(0,a.jsx)(n.h4,{id:"actions-cooldown",children:"Actions cooldown"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"[cooldown:<delay in seconds)]"}),"\r\nWith this option, you will be able to perform actions with a certain delay."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"      Actions: # This command will be executed 1 second after the case is opened\r\n        - '[cooldown:1][command] lp user %player% parent set %group%'\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},65:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return t}});var i=s(7294);let a={},l=i.createContext(a);function t(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
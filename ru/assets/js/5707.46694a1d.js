(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["5707"],{7594:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,r]=t;if(o&&r){o=parseInt(o);let e=o<(r=parseInt(r))?1:-1;("-"===s||".."===s||"\u2025"===s)&&(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},5056:function(e,t,n){"use strict";n.d(t,{Z:()=>M});var o=n("5893"),s=n("7294"),r=n("7227"),c=n("7026"),a=n("4239"),l=n("140");function i(){let{prism:e}=(0,l.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n("4681"),d=n("7594"),m=n.n(d);let p=/title=(?<quote>["'])(?<title>.*?)\1/,b=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},h={...f,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},g=Object.keys(f);function j(e,t){let n=e.map(e=>{let{start:n,end:o}=h[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${o})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}let k="codeBlockContainer_Ckt0";function x(e){let{as:t,...n}=e,s=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[o,s]=e,r=t[o];r&&"string"==typeof s&&(n[r]=s)}),n}(i());return(0,o.jsx)(t,{...n,style:s,className:(0,c.Z)(n.className,k,u.k.common.codeBlock)})}let y={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function B(e){let{children:t,className:n}=e;return(0,o.jsx)(x,{as:"pre",tabIndex:0,className:(0,c.Z)(y.codeBlockStandalone,"thin-scrollbar",n),children:(0,o.jsx)("code",{className:y.codeBlockLines,children:t})})}var v=n("5346");let w={attributes:!0,characterData:!0,childList:!0,subtree:!0};var C=n("3229");let N={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function E(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:r,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let l=r({line:t,className:(0,c.Z)(n,s&&N.codeLine)}),i=t.map((e,t)=>(0,o.jsx)("span",{...a({token:e})},t));return(0,o.jsxs)("span",{...l,children:[s?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:N.codeLineNumber}),(0,o.jsx)("span",{className:N.codeLineContent,children:i})]}):i,(0,o.jsx)("br",{})]})}var L=n("6025");function I(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function _(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let S={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function A(e){let{code:t,className:n}=e,[r,a]=(0,s.useState)(!1),l=(0,s.useRef)(void 0),i=(0,s.useCallback)(()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);let n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let s=document.getSelection(),r=s.rangeCount>0&&s.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),r&&(s.removeAllRanges(),s.addRange(r)),o&&o.focus()}(t),a(!0),l.current=window.setTimeout(()=>{a(!1)},1e3)},[t]);return(0,s.useEffect)(()=>()=>window.clearTimeout(l.current),[]),(0,o.jsx)("button",{type:"button","aria-label":r?(0,L.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,L.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,L.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,S.copyButton,r&&S.copyButtonCopied),onClick:i,children:(0,o.jsxs)("span",{className:S.copyButtonIcons,"aria-hidden":"true",children:[(0,o.jsx)(I,{className:S.copyButtonIcon}),(0,o.jsx)(_,{className:S.copyButtonSuccessIcon})]})})}function $(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let T={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Z(e){let{className:t,onClick:n,isEnabled:s}=e,r=(0,L.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,s&&T.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,o.jsx)($,{className:T.wordWrapButtonIcon,"aria-hidden":"true"})})}function H(e){var t,n,r;let{children:a,className:u="",metastring:d,title:f,showLineNumbers:h,language:k}=e,{prism:{defaultLanguage:B,magicComments:N}}=(0,l.L)();let L=(t=k??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(u)??B,t?.toLowerCase()),I=i(),_=function(){let[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),r=(0,s.useRef)(null),c=(0,s.useCallback)(()=>{let n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[r,e]),a=(0,s.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=r.current;o(e>t||r.current.querySelector("code").hasAttribute("style"))},[r]);return!function(e,t){let[n,o]=(0,s.useState)(),r=(0,s.useCallback)(()=>{o(e.current?.closest("[role=tabpanel][hidden]"))},[e,o]);(0,s.useEffect)(()=>{r()},[r]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w,o=(0,v.zX)(t),r=(0,v.Ql)(n);(0,s.useEffect)(()=>{let t=new MutationObserver(o);return e&&t.observe(e,r),()=>t.disconnect()},[e,o,r])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(r,a),(0,s.useEffect)(()=>{a()},[e,a]),(0,s.useEffect)(()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)}),[a]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:c}}();let S=(n=d,(n?.match(p)?.groups.title??"")||f),{lineClassNames:$,code:T}=function(e,t){let n=e.replace(/\n$/,""),{language:o,magicComments:s,metastring:r}=t;if(r&&b.test(r)){let e=r.match(b).groups.range;if(0===s.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=s[0].className;return{lineClassNames:Object.fromEntries(m()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===o)return{lineClassNames:{},code:n};let c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"],t);case"jsx":case"tsx":return j(["js","jsBlock","jsx"],t);case"html":return j(["js","jsBlock","html"],t);case"python":case"py":case"bash":return j(["bash"],t);case"markdown":case"md":return j(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return j(["tex"],t);case"lua":case"haskell":case"sql":return j(["lua"],t);case"wasm":return j(["wasm"],t);case"vb":case"vba":case"visual-basic":return j(["vb","rem"],t);case"vbnet":return j(["vbnet","rem"],t);case"batch":return j(["rem"],t);case"basic":return j(["rem","f90"],t);case"fsharp":return j(["js","ml"],t);case"ocaml":case"sml":return j(["ml"],t);case"fortran":return j(["f90"],t);case"cobol":return j(["cobol"],t);default:return j(g,t)}}(o,s),a=n.split("\n"),l=Object.fromEntries(s.map(e=>[e.className,{start:0,range:""}])),i=Object.fromEntries(s.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),u=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),d=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<a.length;){let t=a[e].match(c);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);i[n]?l[i[n]].range+=`${e},`:u[n]?l[u[n]].start=e:d[n]&&(l[d[n]].range+=`${l[d[n]].start}-${e-1},`),a.splice(e,1)}n=a.join("\n");let p={};return Object.entries(l).forEach(e=>{let[t,{range:n}]=e;m()(n).forEach(e=>{p[e]??=[],p[e].push(t)})}),{lineClassNames:p,code:n}}(a,{metastring:d,language:L,magicComments:N});let H=h??(r=d,!!r?.includes("showLineNumbers"));return(0,o.jsxs)(x,{as:"div",className:(0,c.Z)(u,L&&!u.includes(`language-${L}`)&&`language-${L}`),children:[S&&(0,o.jsx)("div",{className:y.codeBlockTitle,children:S}),(0,o.jsxs)("div",{className:y.codeBlockContent,children:[(0,o.jsx)(C.y$,{theme:I,code:T,language:L??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:r,getTokenProps:a}=e;return(0,o.jsx)("pre",{tabIndex:0,ref:_.codeBlockRef,className:(0,c.Z)(t,y.codeBlock,"thin-scrollbar"),style:n,children:(0,o.jsx)("code",{className:(0,c.Z)(y.codeBlockLines,H&&y.codeBlockLinesWithNumbering),children:s.map((e,t)=>(0,o.jsx)(E,{line:e,getLineProps:r,getTokenProps:a,classNames:$[t],showLineNumbers:H},t))})})}}),(0,o.jsxs)("div",{className:y.buttonGroup,children:[(_.isEnabled||_.isCodeScrollable)&&(0,o.jsx)(Z,{className:y.codeButton,onClick:()=>_.toggle(),isEnabled:_.isEnabled}),(0,o.jsx)(A,{className:y.codeButton,code:T})]})]})]})}function M(e){var t;let{children:n,...c}=e,a=(0,r.Z)();let l=(t=n,s.Children.toArray(t).some(e=>(0,s.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t);return(0,o.jsx)("string"==typeof l?H:B,{...c,children:l},String(a))}},65:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},a:function(){return c}});var o=n(7294);let s={},r=o.createContext(s);function c(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
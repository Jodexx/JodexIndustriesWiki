"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["7766"],{6835:function(e,t,a){a.r(t),a.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"DonateCase/API/Spigot/register-materials","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432","description":"\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0456 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0438 \u043E\u0431\u0440\u043E\u0431\u043B\u044E\u044E\u0442\u044C\u0441\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 MaterialHandler","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/DonateCase/API/Spigot/materials.mdx","sourceDirName":"DonateCase/API/Spigot","slug":"/DonateCase/API/Spigot/register-materials","permalink":"/ru/docs/2.0.0/DonateCase/API/Spigot/register-materials","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"register-materials","title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432","sidebar_position":5},"sidebar":"defaultSidebar","previous":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0439","permalink":"/ru/docs/2.0.0/DonateCase/API/Spigot/register-animations"},"next":{"title":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0456\u0432, \u0437\u0430\u0434\u0430\u043D\u0438\u043C\u0438 \u0432 \u0433\u044E\u0457","permalink":"/ru/docs/2.0.0/DonateCase/API/Spigot/register-guitypeditems"}}'),r=a("5893"),l=a("65"),n=a("5056");let s={id:"register-materials",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432",sidebar_position:5},d="\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432",o={},c=[{value:"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 <code>HEAD</code> \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443",id:"\u043F\u0440\u0438\u043A\u043B\u0430\u0434-\u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457-head-\u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443",level:2},{value:"\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",id:"\u043F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",level:3}];function m(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F-\u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432"})}),"\n",(0,r.jsxs)(t.p,{children:["\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0456 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0438 \u043E\u0431\u0440\u043E\u0431\u043B\u044E\u044E\u0442\u044C\u0441\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 ",(0,r.jsx)(t.a,{href:"https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.0.2.1/raw/com/jodexindustries/donatecase/api/data/material/MaterialHandler.html",children:"MaterialHandler"})]}),"\n",(0,r.jsxs)(t.h2,{id:"\u043F\u0440\u0438\u043A\u043B\u0430\u0434-\u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457-head-\u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443",children:["\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 ",(0,r.jsx)(t.code,{children:"HEAD"})," \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443"]}),"\n",(0,r.jsx)(n.Z,{language:"java",title:"TestMaterial \u043A\u043B\u0430\u0441\u0441",children:`import com.jodexindustries.donatecase.api.data.material.MaterialHandler;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.SkullMeta;
import org.jetbrains.annotations.NotNull;

public class TestMaterial implements MaterialHandler<ItemStack> {

  @Override
  public @NotNull ItemStack handle(@NotNull String context) {

      Material type = Material.getMaterial("SKULL_ITEM");
      ItemStack item = type == null ? new ItemStack(Material.getMaterial("PLAYER_HEAD")) : new ItemStack(type, 1, (short) 3);
      SkullMeta meta = (SkullMeta) item.getItemMeta();
      if (meta != null) {
          meta.setOwner(context);
          item.setItemMeta(meta);
      }
      return item;
  }
}
`}),"\n",(0,r.jsx)(n.Z,{language:"java",title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F",children:`// \u{43E}\u{442}\u{440}\u{438}\u{43C}\u{430}\u{43D}\u{43D}\u{44F} MaterialManager
MaterialManager<ItemStack> materialManager = api.getMaterialManager();

// \u{440}\u{435}\u{454}\u{441}\u{442}\u{440}\u{430}\u{446}\u{456}\u{44F} \u{43C}\u{430}\u{442}\u{435}\u{440}\u{456}\u{430}\u{43B}\u{443}
manager.registerMaterial("HEAD", new TestMaterial(),
      "Default Minecraft heads by nickname");
`}),"\n",(0,r.jsx)(t.h3,{id:"\u043F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",children:"\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F"}),"\n",(0,r.jsxs)(t.p,{children:["\u041C\u0435\u0442\u043E\u0434 ",(0,r.jsx)(t.code,{children:"handle"})," \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0442\u0438 ",(0,r.jsx)(t.a,{href:"https://helpch.at/docs/1.16.5/org/bukkit/inventory/ItemStack.html",children:"ItemStack"}),",\r\n\u044F\u043A \u0431\u0443\u0434\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043F\u0456\u0441\u043B\u044F \u0432\u0438\u043A\u043B\u0438\u043A\u0443 \u043E\u0431\u0440\u043E\u0431\u043D\u0438\u043A\u0430 ",(0,r.jsx)(t.code,{children:"MaterialHandler"}),"."]}),"\n",(0,r.jsx)(n.Z,{language:"java",title:"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u0432\u0438\u043A\u043B\u0438\u043A\u0443",children:`public ItemStack loadCaseItem(String id) {
  ItemStack itemStack = null;

  if(id != null && Material.getMaterial(id) == null) {
      String temp = instance.api.getMaterialManager().getByStart(id);


      if (temp != null) {
          CaseMaterial<ItemStack> caseMaterial = instance.api.getMaterialManager().getRegisteredMaterial(temp);
          if (caseMaterial != null) {
              String context = id.replace(temp, "").replaceFirst(":", "").trim();
              itemStack = caseMaterial.getMaterialHandler().handle(context);
          }
      }
  }

  if(itemStack == null) itemStack = DCToolsBukkit.createItem(id);

  return itemStack;
}
`})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);
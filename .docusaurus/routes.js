import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ru/markdown-page',
    component: ComponentCreator('/ru/markdown-page', 'f10'),
    exact: true
  },
  {
    path: '/ru/docs',
    component: ComponentCreator('/ru/docs', 'd76'),
    routes: [
      {
        path: '/ru/docs/1.0.0',
        component: ComponentCreator('/ru/docs/1.0.0', '1f7'),
        routes: [
          {
            path: '/ru/docs/1.0.0',
            component: ComponentCreator('/ru/docs/1.0.0', 'be1'),
            routes: [
              {
                path: '/ru/docs/1.0.0/DonateCase/Addons/dc-event-manager',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/Addons/dc-event-manager', '54f'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/animations',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/animations', 'e5b'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/API/casemanager',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/API/casemanager', '038'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/API/donatecase-api-main',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/API/donatecase-api-main', '867'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/API/implementing',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/API/implementing', '866'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/API/install',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/API/install', 'e84'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/API/register-animations',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/API/register-animations', 'a72'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/API/register-events',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/API/register-events', '245'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/API/register-guitypeditems',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/API/register-guitypeditems', 'd60'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/API/register-materials',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/API/register-materials', '2fa'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/API/register-subcommands',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/API/register-subcommands', 'a41'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/configurations',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/configurations', '292'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/donatecase-main',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/donatecase-main', '939'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/holograms',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/holograms', 'a5c'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/items-settings',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/items-settings', 'e3f'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/DonateCase/materials',
                component: ComponentCreator('/ru/docs/1.0.0/DonateCase/materials', '36c'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/ru/docs/1.0.0/wiki-index',
                component: ComponentCreator('/ru/docs/1.0.0/wiki-index', '1ad'),
                exact: true,
                sidebar: "sidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/ru/docs/2.0.0',
        component: ComponentCreator('/ru/docs/2.0.0', '0f4'),
        routes: [
          {
            path: '/ru/docs/2.0.0',
            component: ComponentCreator('/ru/docs/2.0.0', 'e0a'),
            routes: [
              {
                path: '/ru/docs/2.0.0/DonateCase/Addons/dc-event-manager',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/Addons/dc-event-manager', '45c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/animations',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/animations', 'a94'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/API/install',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/API/install', '35a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/API/Spigot/implementing',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/API/Spigot/implementing', '56e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/API/Spigot/register-actions',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/API/Spigot/register-actions', '60b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/API/Spigot/register-animations',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/API/Spigot/register-animations', '042'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/API/Spigot/register-events',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/API/Spigot/register-events', 'a5d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/API/Spigot/register-guitypeditems',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/API/Spigot/register-guitypeditems', 'f87'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/API/Spigot/register-materials',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/API/Spigot/register-materials', '4d9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/API/Spigot/register-subcommands',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/API/Spigot/register-subcommands', 'a75'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/configurations',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/configurations', '923'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/donatecase-main',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/donatecase-main', '23e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/holograms',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/holograms', '863'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/items-settings',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/items-settings', '41d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/ru/docs/2.0.0/DonateCase/materials',
                component: ComponentCreator('/ru/docs/2.0.0/DonateCase/materials', 'cd3'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ru/',
    component: ComponentCreator('/ru/', 'c09'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

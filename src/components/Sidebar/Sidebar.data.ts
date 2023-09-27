export interface ISidebarDataItem {
  title: string;
  iconName: string;
  path: string;
}

export const sidebarData = [
  {
    title: "Профиль",
    iconName: "profile",
    path: "/profile",
  },
  {
    title: "Обмен валюты",
    iconName: "convertion",
    path: "/convertion",
  },
  {
    title: "Переводы",
    iconName: "transfers",
    path: "/transfers",
  },
  /* {
    title: "Сервисы",
    iconName: "service",
    path: "/service",
  },
  {
    title: "Платежи",
    iconName: "payment",
    path: "/payment",
  },
  {
    title: "Помощь",
    iconName: "help",
    path: "/help",
  },
  {
    title: "Выход",
    iconName: "exit",
    path: "/exit",
  }, */
];

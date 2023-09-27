export interface IUserData {
  status: string;
  name: string;
  surname: string;
  phoneNumber: string;
  eMail: string;
  country: string;
  img: string;
}

export const userData: IUserData = {
  status: "Пользователь",
  name: "Дмитрий",
  surname: "Усачев",
  phoneNumber: "+998(91)111-11-11",
  eMail: "dbank@gmail.com",
  country: "Узбекистан",
  img: "users/usachev.jpeg",
};

export const statisticsData = [
  {
    count: 30,
    description: "Переводов на карту",
  },
  {
    count: 17,
    description: "Конверсий валют",
  },
  {
    count: 23,
    description: "Зачисления на карту",
  },
  {
    count: 12,
    description: "Проведенных платежей",
  },
];

export const transfersHistoryData = [
  {
    id: 1,
    operation: "Перевод",
    date: "26.10.2023",
    amount: "200 000",
    status: "done",
  },
  {
    id: 2,
    operation: "Зачисление",
    date: "15.12.2023",
    amount: "2 000 000",
    status: "in-process",
  },
  {
    id: 3,
    operation: "Зачисление",
    date: "18.02.2023",
    amount: "500 000",
    status: "cancel",
  },
  {
    id: 4,
    operation: "Оплата интернет",
    date: "05.05.2023",
    amount: "250 000",
    status: "done",
  },
];

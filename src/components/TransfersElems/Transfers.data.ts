interface ITransferDataObj {
  name: string;
  number: string;
  day: string;
  time: string;
}

export const transfersData: Array<ITransferDataObj> = [
  {
    name: "Temur Tursunaliev",
    number: "8600 2301 **** 0000",
    day: "01.04.2023",
    time: "21:55",
  },
  {
    name: "Алексей",
    number: "998991234567",
    day: "29.03.2023",
    time: "12:43",
  },
  {
    name: "Дмитрий",
    number: "998991234567",
    day: "28.03.2023",
    time: "10:37",
  },
  {
    name: "Ксения Иванова",
    number: "8600 2301 **** 0000",
    day: "29.03.2023",
    time: "09:24",
  },
];

export const servicePaymentsData = [
  {
    iconName: "mobile",
    title: "Мобильные операторы",
  },
  {
    iconName: "internet",
    title: "Интернет провайдеры",
  },
  {
    iconName: "tv",
    title: "Телевидение и вещание",
  },
  {
    iconName: "utilities",
    title: "Коммунальные услуги",
  },
  {
    iconName: "state-services",
    title: "Государственные услуги",
  },
  {
    iconName: "penalties",
    title: "Штрафы ГИБДД и кредиты",
  },
];

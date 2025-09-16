import { MenuItemData } from '../components/MenuItem';

export interface Category {
  name: string;
  subcategories?: string[];
}

export const menuItems: MenuItemData[] = [
  // Коктейли — Авторские
  {
    id: 1,
    name: "За деньги Да 300мл",
    description: "Водка Дж.Дж.Уитли груша; Минтту перечная мята; ликер Блю Кюрасао; сок ананас; лайм",
    price: 500,
    category: "Коктейли",
    subcategory: "Авторские",
    isPopular: true,
    alcoholContent: "20% алк."
  },
  {
    id: 3,
    name: "Последняя любовь 250мл",
    description: "Текила; ликёр Амаретто; апельсиновый сок; сироп гренадин-красный апельсин;, лайм.",
    price: 450,
    category: "Коктейли",
    subcategory: "Авторские",
    isPopular: true,
    alcoholContent: "18% алк."
  },
  {
    id: 38,
    name: "Санта Барбара 300мл",
    description: "Водка Дж.Дж.Уитли груша, джин Уитли Нейл, сок ананас, сироп эстрагон-яблоко, лайм",
    price: 450,
    category: "Коктейли",
    subcategory: "Авторские",
    alcoholContent: "18% алк."
  },
  {
    id: 39,
    name: "Гильотина",
    description: "Мартини Фиеро, лимонад мохито, слайс лайма",
    price: 450,
    category: "Коктейли",
    subcategory: "Авторские",
    alcoholContent: "средней крепости"
  },

  // Коктейли — Популярные
  {
    id: 47,
    name: "Водка Энергетик",
    description: "Водка; энергетик Вольт; лимон",
    price: 350,
    category: "Коктейли",
    subcategory: "Популярные",
    alcoholContent: "средней крепости"
  },
  {
    id: 48,
    name: "Лонг Айленд Айсти 300мл",
    description: "Водка; ром; текила; джин; ликёр трипл сек; кола; сироп; лимон",
    price: 600,
    category: "Коктейли",
    subcategory: "Популярные",
    alcoholContent: "20% алк."
  },
  {
    id: 49,
    name: "Зелёная фея 300мл",
    description: "Водка; ром; текила; ликёр дыня-блю кюрасао; абсент; сироп; Ред Булл; лайм",
    price: 650,
    category: "Коктейли",
    subcategory: "Популярные",
    alcoholContent: "сильной крепости"
  },
  {
    id: 50,
    name: "Старый Егерь 300мл",
    description: "Егермейстер; Ред Булл; апельсин",
    price: 650,
    category: "Коктейли",
    subcategory: "Популярные",
    alcoholContent: "средней крепости"
  },
  {
    id: 51,
    name: "Бабл Гам 250мл",
    description: "Водка; морс; спрайт; сироп бабл гам; лимон",
    price: 350,
    category: "Коктейли",
    subcategory: "Популярные",
    alcoholContent: "средней крепости"
  },
  {
    id: 52,
    name: "Белый Русский 200мл",
    description: "Водка; кофейный ликёр; сливки",
    price: 450,
    category: "Коктейли",
    subcategory: "Популярные",
    alcoholContent: "средней крепости"
  },
  {
    id: 53,
    name: "Негрони 200мл",
    description: "Мартини; Кампари; Уитли Нейл; ангостура; биттер",
    price: 600,
    category: "Коктейли",
    subcategory: "Популярные",
    alcoholContent: "20% алк."
  },
  {
    id: 54,
    name: "Пенициллин 200мл",
    description: "Вильям Лоусон; Лафройг 10 лет; сироп мед имбирь; лимонный сок; апельсин",
    price: 650,
    category: "Коктейли",
    subcategory: "Популярные",
    alcoholContent: "20% алк."
  },

  // Коктейли — Спритц
  {
    id: 4,
    name: "Aperol Spritz",
    description: "Аперол, просекко, содовая и долька апельсина",
    price: 650,
    category: "Коктейли",
    subcategory: "Спритц коктейли",
    alcoholContent: "11% алк."
  },
  {
    id: 21,
    name: "Hugo Spritz",
    description: "Просекко, сироп бузины, мята и содовая",
    price: 600,
    category: "Коктейли",
    subcategory: "Спритц коктейли",
    alcoholContent: "8% алк."
  },
  {
    id: 40,
    name: "Кампари Спритц 300мл",
    description: "Кампари; Шато Тамань Селект Брют; содовая; апельсин",
    price: 500,
    category: "Коктейли",
    subcategory: "Спритц коктейли",
    alcoholContent: "11% алк."
  },
  {
    id: 41,
    name: "Сарти Спритц 300мл",
    description: "Сарти; Шато Тамань Селект Брют; содовая; апельсин",
    price: 500,
    category: "Коктейли",
    subcategory: "Спритц коктейли",
    alcoholContent: "11% алк."
  },

  // Коктейли — Спецпредложения (кроме "Счастливый час")
  {
    id: 42,
    name: "Мартини Фиеро Тоник 300мл",
    description: "Мартини Фиеро; тоник; апельсин",
    price: 500,
    category: "Коктейли",
    subcategory: "Спецпредложения",
    alcoholContent: "средней крепости"
  },
  {
    id: 43,
    name: "Мартини Бьянко Тоник 300мл",
    description: "Мартини Бьянко; тоник; апельсин",
    price: 500,
    category: "Коктейли",
    subcategory: "Спецпредложения",
    alcoholContent: "средней крепости"
  },
  {
    id: 44,
    name: "Вильям Кола 200мл",
    description: "Вильям Лоусонс; кола; лимон",
    price: 450,
    category: "Коктейли",
    subcategory: "Спецпредложения",
    alcoholContent: "средней крепости"
  },
  {
    id: 45,
    name: "Оакхарт Кола 200мл",
    description: "Ром Оакхарт; кола; лимон",
    price: 450,
    category: "Коктейли",
    subcategory: "Спецпредложения",
    alcoholContent: "средней крепости"
  },
  {
    id: 46,
    name: "Босфорд Тоник 200мл",
    description: "Джин Босфорд; тоник; лимон",
    price: 450,
    category: "Коктейли",
    subcategory: "Спецпредложения",
    alcoholContent: "средней крепости"
  },

  // Коктейли — АКЦИИ
  {
    id: 23,
    name: "2+1 на шоты",
    description: "При заказе двух любых шотов - третий в подарок",
    price: 600,
    category: "Коктейли",
    subcategory: "АКЦИИ",
    alcoholContent: "40% алк."
  },
  {
    id: 25,
    name: "Дамский вечер",
    description: "Каждую среду скидка 30% на все коктейли для девушек",
    price: 500,
    category: "Коктейли",
    subcategory: "АКЦИИ",
    alcoholContent: "варьируется"
  },
  {
    id: 30,
    name: "ЯРЛС 300мл",
    description: "Сет из 6 шотов: водка, ликер, сок, сироп, лимон",
    price: 800,
    category: "Коктейли",
    subcategory: "АКЦИИ",
    alcoholContent: "варьируется"
  },
  {
    id: 31,
    name: "Виски Кола 2+1 600мл",
    description: "Виски, кола, лимон",
    price: 800,
    category: "Коктейли",
    subcategory: "АКЦИИ",
    alcoholContent: "варьируется"
  },
  {
    id: 32,
    name: "Фантазёр 800мл",
    description: "4 коктейля: Водка Пять озёр, фанта",
    price: 1000,
    category: "Коктейли",
    subcategory: "АКЦИИ",
    alcoholContent: "варьируется"
  },

  // Коктейли — Сеты для компаний
  {
    id: 26,
    name: "Сет 'Вечеринка' (4 чел.)",
    description: "4 коктейля на выбор + сырная тарелка + оливки микс",
    price: 3200,
    category: "Коктейли",
    subcategory: "Сеты для компаний",
    alcoholContent: "варьируется"
  },
  {
    id: 27,
    name: "Сет 'Корпоратив' (6 чел.)",
    description: "6 коктейлей + 2 закуски + бутылка просекко",
    price: 4800,
    category: "Коктейли",
    subcategory: "Сеты для компаний",
    alcoholContent: "варьируется"
  },
  {
    id: 28,
    name: "Сет 'VIP' (8 чел.)",
    description: "8 премиум коктейлей + 3 закуски + бутылка шампанского + фрукты",
    price: 7500,
    category: "Коктейли",
    subcategory: "Сеты для компаний",
    alcoholContent: "варьируется"
  },
  {
    id: 29,
    name: "Сет 'Дегустация' (2 чел.)",
    description: "4 мини-коктейля разных стилей + легкие закуски",
    price: 1800,
    category: "Коктейли",
    subcategory: "Сеты для компаний",
    alcoholContent: "варьируется"
  },
  {
    id: 33,
    name: "Сет на ДР для Boys",
    description: "Водка Хаски 0,5л, газированная вода 1,5л, фруктовая нарезка",
    price: 1200,
    category: "Коктейли",
    subcategory: "Сеты для компаний",
    alcoholContent: "варьируется"
  },
  {
    id: 34,
    name: "Сет на ДР для Girls",
    description: "Шато Тамань Селект 0,75; фруктовая нарезка",
    price: 1200,
    category: "Коктейли",
    subcategory: "Сеты для компаний",
    alcoholContent: "варьируется"
  },
  {
    id: 35,
    name: "Окрыляющий сет",
    description: "Водка Хаски 0,5; Ред Булл 0,25 ×4",
    price: 1800,
    category: "Коктейли",
    subcategory: "Сеты для компаний",
    alcoholContent: "варьируется"
  },
  {
    id: 36,
    name: "Вильям Team",
    description: "Вильям Лоусонс 0,7; Добрый Кола ×4",
    price: 3000,
    category: "Коктейли",
    subcategory: "Сеты для компаний",
    alcoholContent: "варьируется"
  },
  {
    id: 37,
    name: "Оакхарт Team",
    description: "Оакхарт 0,7; Добрый Кола ×4",
    price: 3200,
    category: "Коктейли",
    subcategory: "Сеты для компаний",
    alcoholContent: "варьируется"
  },

  // Коктейли — Шоты
  {
    id: 20,
    name: "Текила шот",
    description: "Классический шот текилы с солью и лаймом",
    price: 300,
    category: "Коктейли",
    subcategory: "Шоты",
    alcoholContent: "40% алк."
  },
  {
    id: 55,
    name: "А-52 50мл",
    description: "Абсент; сливочный ликёр; кофейный ликёр",
    price: 400,
    category: "Коктейли",
    subcategory: "Шоты",
    alcoholContent: "40% алк."
  },
  {
    id: 56,
    name: "Б-52 50мл",
    description: "Трипл сек; сливочный ликёр; кофейный ликёр",
    price: 350,
    category: "Коктейли",
    subcategory: "Шоты",
    alcoholContent: "35% алк."
  },
  {
    id: 57,
    name: "Хиросима 50мл",
    description: "Абсент; сливочный ликёр; самбука; сироп гренадин",
    price: 400,
    category: "Коктейли",
    subcategory: "Шоты",
    alcoholContent: "40% алк."
  },
  {
    id: 58,
    name: "Добрый Егерь 50мл",
    description: "Сок лимона; Егермейстер",
    price: 350,
    category: "Коктейли",
    subcategory: "Шоты",
    alcoholContent: "20% алк."
  },

  // Коктейли — Лимонады
  {
    id: 19,
    name: "Лимонад Мохито",
    description: "Освежающий лимонад с мятой, лаймом и газированной водой",
    price: 450,
    category: "Коктейли",
    subcategory: "Лимонады",
    alcoholContent: "0% алк."
  },
  {
    id: 59,
    name: "Бабл Гам 250мл",
    description: "Морс; спрайт; сироп бабл гам; лимон",
    price: 250,
    category: "Коктейли",
    subcategory: "Лимонады",
    alcoholContent: "0% алк."
  },
  {
    id: 60,
    name: "Лесные ягоды 250мл",
    description: "Сироп ежевика; гренадин; содовая; лимон",
    price: 250,
    category: "Коктейли",
    subcategory: "Лимонады",
    alcoholContent: "0% алк."
  },
  {
    id: 61,
    name: "Др.Пеппер 250мл",
    description: "Вишнёвый сок; кола; сироп; лимон",
    price: 250,
    category: "Коктейли",
    subcategory: "Лимонады",
    alcoholContent: "0% алк."
  },

  // Пиво
  {
    id: 6,
    name: "Клаусталер 330мл",
    description: "Безалкогольное",
    price: 400,
    category: "Пиво",
    alcoholContent: "0% алк."
  },
  {
    id: 7,
    name: "Стелла Артуа 440мл",
    description: "Безалкогольное",
    price: 250,
    category: "Пиво",
    alcoholContent: "0% алк."
  },
  {
    id: 8,
    name: "Гиннесс Драфт 440мл",
    description: "Тёмный Стаут",
    price: 550,
    category: "Пиво",
    alcoholContent: "4,2% алк."
  },
  {
    id: 62,
    name: "Вайнштефан 500мл",
    description: "Немецкий эль",
    price: 550,
    category: "Пиво",
    alcoholContent: "5,1% алк."
  },
  {
    id: 63,
    name: "Айнзидлер 500мл",
    description: "Эль, пилснер",
    price: 550,
    category: "Пиво",
    alcoholContent: "4,9-5,2% алк."
  },
  {
    id: 64,
    name: "Корона Экстра 355мл",
    description: "Светлый лагер",
    price: 350,
    category: "Пиво",
    alcoholContent: "4,5% алк."
  },
  {
    id: 65,
    name: "Балтика Brew Ипа 440мл",
    description: "Блонд,Брюн,Крик",
    price: 400,
    category: "Пиво",
    alcoholContent: "5,1-7,2% алк."
  },
  {
    id: 66,
    name: "Аббе блон/брюн 330мл",
    description: "Бельгийский эль",
    price: 250,
    category: "Пиво",
    alcoholContent: "6,6% алк."
  },
  {
    id: 67,
    name: "Хугарден 440мл",
    description: "Светлое нефильтр.",
    price: 300,
    category: "Пиво",
    alcoholContent: "4,9% алк."
  },
  {
    id: 68,
    name: "Велкопоповицкий Козел 450мл",
    description: "Светлое/темное пиво",
    price: 250,
    category: "Пиво",
    alcoholContent: "4% алк."
  },
  {
    id: 69,
    name: "Глетчер Милк оф 500мл",
    description: "Амнезия",
    price: 350,
    category: "Пиво",
    alcoholContent: "5,5% алк."
  },
  {
    id: 70,
    name: "Честерс в ассортименте 450мл",
    description: "Сидр",
    price: 350,
    category: "Пиво",
    alcoholContent: "5% алк."
  },
  {
  id: 71,
  name: "Моет Шандон Империал Брют 750мл",
  description: "Игристое вино 12%",
  price: 12000,
  category: "Вино",
  subcategory: "Игристое вино",
  alcoholContent: "12% алк."
},
{
  id: 72,
  name: "Мартини Просекко D.O.C. 187мл",
  description: "Игристое вино 11,5%",
  price: 1000,
  category: "Вино",
  subcategory: "Игристое вино",
  alcoholContent: "11,5% алк."
},
{
  id: 73,
  name: "Мартини Просекко D.O.C. 750мл",
  description: "Игристое вино 11,5%",
  price: 4000,
  category: "Вино",
  subcategory: "Игристое вино",
  alcoholContent: "11,5% алк."
},
{
  id: 74,
  name: "Мартини Асти D.O.C.G. 187мл",
  description: "Игристое вино 7,5%",
  price: 1000,
  category: "Вино",
  subcategory: "Игристое вино",
  alcoholContent: "7,5% алк."
},
{
  id: 75,
  name: "Мартини Асти D.O.C.G. 750мл",
  description: "Игристое вино 7,5%",
  price: 4000,
  category: "Вино",
  subcategory: "Игристое вино",
  alcoholContent: "7,5% алк."
},
{
  id: 76,
  name: "Мартини Брют 750мл",
  description: "Игристое вино 11,5%",
  price: 4000,
  category: "Вино",
  subcategory: "Игристое вино",
  alcoholContent: "11,5% алк."
},
{
  id: 77,
  name: "Монтефьоре Просекко 750мл",
  description: "Игристое вино 11%",
  price: 3000,
  category: "Вино",
  subcategory: "Игристое вино",
  alcoholContent: "11% алк."
},
{
  id: 78,
  name: "Шато Тамань Селект 200мл",
  description: "Игристое вино 11,5%",
  price: 400,
  category: "Вино",
  subcategory: "Игристое вино",
  alcoholContent: "11,5% алк."
},
{
  id: 79,
  name: "Шато Тамань Селект 750мл",
  description: "Игристое вино 11,5%",
  price: 1500,
  category: "Вино",
  subcategory: "Игристое вино",
  alcoholContent: "11,5% алк."
},
{
  id: 80,
  name: "Балаклава 750мл",
  description: "Игристое вино 13%",
  price: 1800,
  category: "Вино",
  subcategory: "Игристое вино",
  alcoholContent: "13% алк."
},
  // Вино — Тихие вина
{
  id: 81,
  name: "Мальборо Спрингс Совиньон Блан 750мл",
  description: "Новая Зеландия, белое сухое 12,5%",
  price: 3500,
  category: "Вино",
  subcategory: "Тихие вина",
  alcoholContent: "12,5% алк."
},
{
  id: 82,
  name: "Кастеллани Кьянти 750мл",
  description: "Италия, красное сухое 12%",
  price: 3000,
  category: "Вино",
  subcategory: "Тихие вина",
  alcoholContent: "12% алк."
},
{
  id: 83,
  name: "Кастеллани Пино Гриджио 750мл",
  description: "Италия, белое сухое 12%",
  price: 3000,
  category: "Вино",
  subcategory: "Тихие вина",
  alcoholContent: "12% алк."
},
{
  id: 84,
  name: "Ханс Байер Рислинг 750мл",
  description: "Германия, белое полусухое 11,5%",
  price: 2500,
  category: "Вино",
  subcategory: "Тихие вина",
  alcoholContent: "11,5% алк."
},
{
  id: 85,
  name: "Фрескелло 750мл",
  description: "Италия, красное/белое, полусладкое/сладкое",
  price: 2000,
  category: "Вино",
  subcategory: "Тихие вина",
  alcoholContent: "12% алк."
},
{
  id: 86,
  name: "Санта Каролина 750мл",
  description: "Чили, красное/белое полусухое",
  price: 1800,
  category: "Вино",
  subcategory: "Тихие вина",
  alcoholContent: "12% алк."
},
{
  id: 87,
  name: "Шато Тамань Селект 187мл",
  description: "Россия, в ассортименте",
  price: 400,
  category: "Вино",
  subcategory: "Тихие вина",
  alcoholContent: "12% алк."
},
{
  id: 88,
  name: "Шато Тамань Селект 750мл",
  description: "Россия, в ассортименте",
  price: 1600,
  category: "Вино",
  subcategory: "Тихие вина",
  alcoholContent: "12% алк."
},
{
  id: 89,
  name: "Винья Албали (Vina Albali) 750мл",
  description: "Испания, безалкогольное",
  price: 1800,
  category: "Вино",
  subcategory: "Тихие вина",
  alcoholContent: "0% алк."
},
  // Аперитивы и диджестивы — 50мл
{
  id: 90,
  name: "Мартини Бьянко 50мл",
  description: "Аперитив 15%",
  price: 250,
  category: "Аперитивы и диджестивы",
  alcoholContent: "15% алк."
},
{
  id: 91,
  name: "Мартини Экстра Драй 50мл",
  description: "Аперитив 18%",
  price: 250,
  category: "Аперитивы и диджестивы",
  alcoholContent: "18% алк."
},
{
  id: 92,
  name: "Мартини Фиеро 50мл",
  description: "Аперитив 14,9%",
  price: 250,
  category: "Аперитивы и диджестивы",
  alcoholContent: "14,9% алк."
},
{
  id: 93,
  name: "Апероль 50мл",
  description: "Аперитив 11%",
  price: 400,
  category: "Аперитивы и диджестивы",
  alcoholContent: "11% алк."
},
{
  id: 94,
  name: "Кампари 50мл",
  description: "Аперитив 25%",
  price: 400,
  category: "Аперитивы и диджестивы",
  alcoholContent: "25% алк."
},
{
  id: 95,
  name: "Сарти 50мл",
  description: "Аперитив 14%",
  price: 400,
  category: "Аперитивы и диджестивы",
  alcoholContent: "14% алк."
},
{
  id: 96,
  name: "Бехеровка 50мл",
  description: "Диджестив 38%",
  price: 400,
  category: "Аперитивы и диджестивы",
  alcoholContent: "38% алк."
},
  // Джин — 50мл
{
  id: 97,
  name: "Бомбей Сапфир 50мл",
  description: "Джин 47%",
  price: 500,
  category: "Джин",
  alcoholContent: "47% алк."
},
{
  id: 98,
  name: "Джоубокс 50мл",
  description: "Джин 43%",
  price: 450,
  category: "Джин",
  alcoholContent: "43% алк."
},
{
  id: 99,
  name: "Барристер 50мл",
  description: "Джин 40%",
  price: 200,
  category: "Джин",
  alcoholContent: "40% алк."
},
{
  id: 100,
  name: "Босфорд 50мл",
  description: "Джин 37,5%",
  price: 250,
  category: "Джин",
  alcoholContent: "37,5% алк."
},

// Ром — 50мл
{
  id: 101,
  name: "Оакхарт Ориджинал 50мл",
  description: "Ром 35%",
  price: 350,
  category: "Ром",
  alcoholContent: "35% алк."
},
{
  id: 102,
  name: "Ангостура 5 лет 50мл",
  description: "Ром 40%",
  price: 450,
  category: "Ром",
  alcoholContent: "40% алк."
},
{
  id: 103,
  name: "Скелетон 50мл",
  description: "Ром 37,5%",
  price: 200,
  category: "Ром",
  alcoholContent: "37,5% алк."
},

// Текила — 50мл
{
  id: 104,
  name: "Ольмека Бланко 50мл",
  description: "Текила 38%",
  price: 400,
  category: "Текила",
  alcoholContent: "38% алк."
},
{
  id: 105,
  name: "Пуэбло Вьехо Репосадо 50мл",
  description: "Текила 40%",
  price: 550,
  category: "Текила",
  alcoholContent: "40% алк."
},
{
  id: 106,
  name: "Пуэбло Вьехо Бланко 50мл",
  description: "Текила 40%",
  price: 500,
  category: "Текила",
  alcoholContent: "40% алк."
},
{
  id: 107,
  name: "Эсполон Бланко 50мл",
  description: "Текила 40%",
  price: 550,
  category: "Текила",
  alcoholContent: "40% алк."
},
{
  id: 108,
  name: "Эсполон Репосадо 50мл",
  description: "Текила 40%",
  price: 650,
  category: "Текила",
  alcoholContent: "40% алк."
}


];

export const categories = [
  "Все", 
  "Коктейли", 
  "Водка", 
  "Аперитивы и диджестивы", 
  "Джин", 
  "Ром", 
  "Текила", 
  "Виски", 
  "Коньяк", 
  "Ликёры", 
  "Пиво", 
  "Вино", 
  "Закуски", 
  "Снеки", 
  "Чай/Кофе", 
  "Безалкогольные"
];

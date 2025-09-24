import { MenuItemData } from '../components/MenuItem';

export interface Category {
  name: string;
  subcategories?: string[];
}

export const menuItems: MenuItemData[] = [
  // Коктейли — Акции
  { id: 201, name: "ЯРЛС", description: "6 шотов, водка, ликер, сок, сироп, лимон", price: 800, subcategory: "Акции", alcoholContent: "10%" },
  { id: 202, name: "Виски кола 2+1", description: "Виски, кола, лимон", price: 0, subcategory: "Акции", alcoholContent: "15%" },
  { id: 203, name: "Фантазёр", description: "4 коктейля водка с фантой", price: 1000, subcategory: "Акции", alcoholContent: "15%" },
  { id: 204, name: "Зеленый Less", description: "4 шота Оакхарт, ликёр, сок, лайм", price: 800, subcategory: "Акции", alcoholContent: "25%" },

  // Коктейли — Сеты для компаний
   { id: 205, name: "Сет по классике", description: "Водка Хаски 0,5л, газированная вода 1,5л, фруктовая нарезка", price: 1500, subcategory: "Сеты для компаний", alcoholContent: "40%" },
  { id: 206, name: "Окрыляющий сет", description: "Водка Хаски 0,5; Ред Булл 0,25 ×4", price: 2000, subcategory: "Сеты для компаний", alcoholContent: "40%" },
  { id: 207, name: "Вильям Team", description: "Вильям Лоусонс 0,7; Добрый Кола ×4", price: 3500, subcategory: "Сеты для компаний", alcoholContent: "40%" },
  { id: 208, name: "Оакхарт Team", description: "Оакхарт 0,7; Добрый Кола ×4", price: 3700, subcategory: "Сеты для компаний", alcoholContent: "40%" },

  // Коктейли — Авторские
    { id: 209, name: "За деньги да", description: "Водка груша; Минтту перечная мята; ликер Блю Кюрасао; сок ананас; лайм", price: 500, subcategory: "Авторские", alcoholContent: "15%" },
  { id: 210, name: "Санта Барбара", description: "Водка груша, джин, сок ананас, сироп эстрагон-яблоко, лайм", price: 450, subcategory: "Авторские", alcoholContent: "15%" },
  { id: 211, name: "Гильотина", description: "Мартини Фиеро, лимонад мохито, сок лайма, долька апельсина", price: 450, subcategory: "Авторские", alcoholContent: "10%" },
  { id: 212, name: "Последняя любовь", description: "Текила, ликер амаретто, апельсиновый сок, сироп гренадин-красный апельсин, сок лайма, долька апельсина", price: 450, subcategory: "Авторские", alcoholContent: "25%" },

  // Коктейли — Спритц коктейли
    { id: 213, name: "Апероль Спиритц", description: "Апероль, Шато Тамань брют, содовая, долька апельсина", price: 650, subcategory: "Спритц", alcoholContent: "11%" },
  { id: 214, name: "Гурмэ Спиритц", description: "Онегин гурмэ, Шато Тамань брют, содовая, долька апельсина", price: 650, subcategory: "Спритц", alcoholContent: "15%" },
  { id: 215, name: "Кампари Спиритц", description: "Кампари, Шато Тамань брют, содовая, долька апельсина", price: 500, subcategory: "Спритц", alcoholContent: "10%" },
  { id: 216, name: "Сарти Спиритц", description: "Сарти, Шато Тамань брют, содовая, долька апельсина", price: 0, subcategory: "Спритц", alcoholContent: "14%" },

  // Коктейли — Лонг коктейли
  { id: 217, name: "Сингапурский слинг", description: "Джин, Бехеровка, ликер трипл сек-вишня, сироп гренадин, ангостура, ананасовый сок, лайм", price: 600, subcategory: "Лонг", alcoholContent: "15%" },
  { id: 218, name: "Лонг Айленд Айсти", description: "Водка, ром, текила, джин, ликер трипл сек, сироп, лимон", price: 600, subcategory: "Лонг", alcoholContent: "20%" },
  { id: 219, name: "Зеленая Фея", description: "Водка, ром, текила, ликер дыня-блю кюрасао, абсент, ред булл, лайм", price: 650, subcategory: "Лонг", alcoholContent: "25%" },
  { id: 220, name: "Водка Вольт", description: "Водка, энергетик Вольт, лимон", price: 350, subcategory: "Лонг", alcoholContent: "20%" },
  { id: 221, name: "Водка Бёрн", description: "Водка, энергетик Бёрн, лимон", price: 400, subcategory: "Лонг", alcoholContent: "20%" },
  { id: 222, name: "Водка Ред Булл", description: "Водка, энергетик Ред Булл, лимон", price: 450, subcategory: "Лонг", alcoholContent: "20%" },
  { id: 223, name: "Старый Егерь", description: "Егермейстер, Ред Булл, апельсин", price: 650, subcategory: "Лонг", alcoholContent: "20%" },
  { id: 224, name: "Старый Травник", description: "Тундра битер, Вольт, апельсин", price: 400, subcategory: "Лонг", alcoholContent: "20%" },

  // Коктейли — Классические коктейли
  { id: 225, name: "Космополитен", description: "Водка, ликер трипл сек, морс, сироп, сок лимона", price: 400, subcategory: "Классические", alcoholContent: "25%" },
  { id: 226, name: "Дайкири", description: "Ром, ликер трипл сек, сок лайма, сироп", price: 450, subcategory: "Классические", alcoholContent: "28%" },
  { id: 227, name: "Маргарита", description: "Текила, ликер трипл сек, сок лайма, сироп", price: 500, subcategory: "Классические", alcoholContent: "28%" },
  { id: 228, name: "Френч 75", description: "Джин, игристое, сироп, сок лимона", price: 450, subcategory: "Классические", alcoholContent: "20%" },
  { id: 229, name: "Секс на пляже", description: "Водка, ликер персик, морс, ананасовый сок, сок лимона, сироп гренадин", price: 450, subcategory: "Классические", alcoholContent: "15%" },
  { id: 230, name: "Текила Санрайз", description: "Текила, апельсиновый сок, сироп гренадин, апельсин", price: 450, subcategory: "Классические", alcoholContent: "15%" },
  { id: 231, name: "Голубая лагуна", description: "Водка, ликер блю кюрасао, спрайт, лимон", price: 400, subcategory: "Классические", alcoholContent: "15%" },
  
   // Коктейли — Миксы
  { id: 232, name: "Виски кола", description: "Виски Харатс, кола, лимон", price: 350, subcategory: "Миксы", alcoholContent: "15% алк." },
  { id: 233, name: "Вильям Кола", description: "Вильям Лоусонс, кола, лимон", price: 450, subcategory: "Миксы", alcoholContent: "15% алк." },
  { id: 234, name: "Оакхарт Кола", description: "Оакхарт, кола, лимон", price: 450, subcategory: "Миксы", alcoholContent: "15% алк." },
  { id: 235, name: "Бомбей Тоник", description: "Джин Бомбей Сапфир, тоник, лимон", price: 600, subcategory: "Миксы", alcoholContent: "15% алк." },
  { id: 236, name: "Джин Тоник", description: "Джин, тоник, лимон", price: 350, subcategory: "Миксы", alcoholContent: "15% алк." },
  { id: 237, name: "Босфорд Тоник", description: "Джин Босфорд, тоник, лимон", price: 400, subcategory: "Миксы", alcoholContent: "15% алк." },
  { id: 238, name: "Бабл Гам", description: "Водка, морс, спрайт, сироп Бабл Гам, лимон", price: 350, subcategory: "Миксы", alcoholContent: "15% алк." },
  { id: 239, name: "Мартини Фиеро Тоник", description: "Мартини Фиеро, тоник, лимон", price: 500, subcategory: "Миксы", alcoholContent: "7.4% алк." },
  { id: 240, name: "Мартини Бьянка Тоник", description: "Мартини Бьянка, тоник, лайм", price: 500, subcategory: "Миксы", alcoholContent: "7.4% алк." },
  
  // Коктейли — Рокс
  { id: 241, name: "Белый Русский", description: "Водка, ликер кофе, сливки", price: 450, subcategory: "Рокс", alcoholContent: "25% алк." },
  { id: 242, name: "Негрони", description: "Кампари, Мартини Фиеро, джин, ангостура, апельсин", price: 600, subcategory: "Рокс", alcoholContent: "30% алк." },
  { id: 243, name: "Крестный Отец", description: "Виски Харатс, ликер амаретто, ангостура, апельсин", price: 350, subcategory: "Рокс", alcoholContent: "30% алк." },
  { id: 244, name: "Пенициллин", description: "Вильям Лоусонс, Лафройг, сироп имбирь-мёд, сок лимона", price: 650, subcategory: "Рокс", alcoholContent: "30% алк." },

  // Коктейли — Шоты
    { id: 245, name: "А-52", description: "Ликер кофе, Бейлиз, Абсент", price: 400, subcategory: "Шоты", alcoholContent: "35% алк." },
  { id: 246, name: "Б-52", description: "Ликер кофе, Бейлиз, трипл сек", price: 350, subcategory: "Шоты", alcoholContent: "30% алк." },
  { id: 247, name: "Хиросима", description: "Самбука, Бейлиз, Абсент", price: 400, subcategory: "Шоты", alcoholContent: "40% алк." },
  { id: 248, name: "Добрый Егерь", description: "Сок лимона, Егермейстер", price: 350, subcategory: "Шоты", alcoholContent: "25% алк." },
  { id: 249, name: "Облака", description: "Самбука, текила, Бейлиз, ликер блю кюрасао", price: 400, subcategory: "Шоты", alcoholContent: "40% алк." },
  { id: 250, name: "Рыжая собака", description: "Самбука, текила, табаско", price: 400, subcategory: "Шоты", alcoholContent: "39% алк." },
  { id: 251, name: "Мяу", description: "Ликер персик, Оакхарт, сок лимона", price: 350, subcategory: "Шоты", alcoholContent: "40% алк." },
  { id: 252, name: "Слэм", description: "Сироп маракуя, малиновая водка, сок лимона", price: 350, subcategory: "Шоты", alcoholContent: "30% алк." },
  { id: 253, name: "Планета Тафи", description: "Сироп фисташка, водка груша, сок лимона", price: 350, subcategory: "Шоты", alcoholContent: "30% алк." },
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
},
  // Коньяк — 50мл
{
  id: 109,
  name: "Курвуазье ВСОП 50мл",
  description: "Коньяк 40%",
  price: 750,
  category: "Коньяк",
  alcoholContent: "40% алк."
},
{
  id: 110,
  name: "Франсуа де Мартиньяк ВС 50мл",
  description: "Коньяк 40%",
  price: 550,
  category: "Коньяк",
  alcoholContent: "40% алк."
},
{
  id: 111,
  name: "Мартель ВС 50мл",
  description: "Коньяк 40%",
  price: 650,
  category: "Коньяк",
  alcoholContent: "40% алк."
},
{
  id: 112,
  name: "Камю ВС 50мл",
  description: "Коньяк 40%",
  price: 500,
  category: "Коньяк",
  alcoholContent: "40% алк."
},
{
  id: 113,
  name: "Арарат 5 50мл",
  description: "Коньяк 40%",
  price: 350,
  category: "Коньяк",
  alcoholContent: "40% алк."
},
{
  id: 114,
  name: "Арарат 3 50мл",
  description: "Коньяк 40%",
  price: 300,
  category: "Коньяк",
  alcoholContent: "40% алк."
},
{
  id: 115,
  name: "Старый Кенигсберг 5 лет 50мл",
  description: "Коньяк 40%",
  price: 250,
  category: "Коньяк",
  alcoholContent: "40% алк."
},

// Ликёры — 50мл
{
  id: 116,
  name: "Егермейстер 50мл",
  description: "Ликёр 35%",
  price: 450,
  category: "Ликёры",
  alcoholContent: "35% алк."
},
{
  id: 117,
  name: "Минтту 50мл",
  description: "Ликёр 16-35%",
  price: 500,
  category: "Ликёры",
  alcoholContent: "16-35% алк."
},
{
  id: 118,
  name: "Самбука 50мл",
  description: "Ликёр 38%",
  price: 350,
  category: "Ликёры",
  alcoholContent: "38% алк."
},
{
  id: 119,
  name: "Монин 50мл",
  description: "Ликёр 16-38%",
  price: 350,
  category: "Ликёры",
  alcoholContent: "16-38% алк."
},

// Водка — 50мл/500мл
{
  id: 120,
  name: "Онегин 50мл",
  description: "Водка 40%",
  price: 300,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 121,
  name: "Онегин 500мл",
  description: "Водка 40%",
  price: 3000,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 122,
  name: "Лаб №40 50мл",
  description: "Водка 40%",
  price: 200,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 123,
  name: "Лаб №40 500мл",
  description: "Водка 40%",
  price: 2000,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 124,
  name: "Коскенкорва 50мл",
  description: "Водка 40%",
  price: 350,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 125,
  name: "Коскенкорва 500мл",
  description: "Водка 40%",
  price: 3500,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 126,
  name: "Царская 50мл",
  description: "Водка 40%",
  price: 200,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 127,
  name: "Царская 500мл",
  description: "Водка 40%",
  price: 2000,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 128,
  name: "Арктика 50мл",
  description: "Водка 40%",
  price: 200,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 129,
  name: "Арктика 500мл",
  description: "Водка 40%",
  price: 2000,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 130,
  name: "Хаски 50мл",
  description: "Водка 40%",
  price: 150,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 131,
  name: "Хаски 500мл",
  description: "Водка 40%",
  price: 1500,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 132,
  name: "Архангельская 50мл",
  description: "Водка 40%",
  price: 150,
  category: "Водка",
  alcoholContent: "40% алк."
},
{
  id: 133,
  name: "Архангельская 500мл",
  description: "Водка 40%",
  price: 1500,
  category: "Водка",
  alcoholContent: "40% алк."
},

// Снеки
{
  id: 134,
  name: "Фисташки 50гр",
  price: 200,
  category: "Снеки"
},
{
  id: 135,
  name: "Кальмары 38гр",
  price: 150,
  category: "Снеки"
},
{
  id: 136,
  name: "Чипсы 70гр",
  price: 200,
  category: "Снеки"
},
{
  id: 137,
  name: "Сухарики 100гр",
  price: 150,
  category: "Снеки"
},
{
  id: 138,
  name: "Арахис в корочке 60гр",
  price: 150,
  category: "Снеки"
},
{
  id: 139,
  name: "Сыр соломка Чечил 100гр",
  price: 200,
  category: "Снеки"
},
{
  id: 140,
  name: "Жареные орехи с солью 50гр",
  price: 200,
  category: "Снеки"
},
{
  id: 141,
  name: "Принглс 165гр",
  price: 500,
  category: "Снеки"
},
{
  id: 142,
  name: "Риттер Спорт 100гр",
  price: 300,
  category: "Снеки"
},

// Безалкогольные
{
  id: 143,
  name: "БонАква 500мл",
  price: 150,
  category: "Безалкогольные"
},
{
  id: 144,
  name: "Жемчужина Байкала 530мл",
  price: 250,
  category: "Безалкогольные"
},
{
  id: 145,
  name: "Нарзан 500мл",
  price: 200,
  category: "Безалкогольные"
},
{
  id: 146,
  name: "Сок Добрый 1л",
  price: 400,
  category: "Безалкогольные"
},
{
  id: 147,
  name: "Газ вода Добрый 500мл",
  price: 200,
  category: "Безалкогольные"
},
{
  id: 148,
  name: "Тоник Рич 330мл",
  price: 250,
  category: "Безалкогольные"
},
{
  id: 149,
  name: "Ред Булл 250мл",
  price: 350,
  category: "Безалкогольные"
},
{
  id: 150,
  name: "Бёрн 330мл",
  price: 250,
  category: "Безалкогольные"
},
{
  id: 151,
  name: "Вольт 450мл",
  price: 200,
  category: "Безалкогольные"
},
{
  id: 152,
  name: "Фанта/Спрайт/Кола 330мл",
  price: 250,
  category: "Безалкогольные"
},
{
  id: 153,
  name: "Мохито",
  price: 200,
  category: "Безалкогольные"
},

// Чай/Кофе
{
  id: 154,
  name: "Американо 200мл",
  price: 200,
  category: "Чай/Кофе"
},
{
  id: 155,
  name: "Капучино 200мл",
  price: 250,
  category: "Чай/Кофе"
},
{
  id: 156,
  name: "Эспрессо тоник 300мл",
  price: 350,
  category: "Чай/Кофе"
},
{
  id: 157,
  name: "Бамбл 300мл",
  price: 350,
  category: "Чай/Кофе"
},
{
  id: 158,
  name: "Чай в ассортименте 500мл",
  price: 250,
  category: "Чай/Кофе"
},
  // Виски — Шотландия
{
  id: 159,
  name: "Вильям Лоусонс 50мл",
  description: "Шотландия, 40%",
  price: 350,
  category: "Виски",
  alcoholContent: "40% алк."
},
{
  id: 160,
  name: "Дюарс Уайт Лейбл 50мл",
  description: "Шотландия, 40%",
  price: 350,
  category: "Виски",
  alcoholContent: "40% алк."
},
{
  id: 161,
  name: "Баллантайнс Файнест 50мл",
  description: "Шотландия, 40%",
  price: 450,
  category: "Виски",
  alcoholContent: "40% алк."
},
{
  id: 162,
  name: "Лафройг 10 лет 50мл",
  description: "Шотландия, 40%",
  price: 1000,
  category: "Виски",
  alcoholContent: "40% алк."
},
{
  id: 163,
  name: "Акентошан Американ Оук 50мл",
  description: "Шотландия, 40%",
  price: 700,
  category: "Виски",
  alcoholContent: "40% алк."
},
{
  id: 164,
  name: "Джонни Уокер Рэд Лейбл 50мл",
  description: "Шотландия, 40%",
  price: 400,
  category: "Виски",
  alcoholContent: "40% алк."
},

// Виски — Америка
{
  id: 165,
  name: "Джек Дениелс 50мл",
  description: "Америка, 40%",
  price: 700,
  category: "Виски",
  alcoholContent: "40% алк."
},
{
  id: 166,
  name: "Джим Бим 50мл",
  description: "Америка, 40%",
  price: 550,
  category: "Виски",
  alcoholContent: "40% алк."
},
{
  id: 167,
  name: "Джим Бим Эппл 50мл",
  description: "Америка, 40%",
  price: 550,
  category: "Виски",
  alcoholContent: "40% алк."
},
{
  id: 168,
  name: "Джим Бим Рэд Стаг 50мл",
  description: "Америка, 40%",
  price: 550,
  category: "Виски",
  alcoholContent: "40% алк."
},

// Виски — Ирландия
{
  id: 169,
  name: "Джемесон 50мл",
  description: "Ирландия, 40%",
  price: 600,
  category: "Виски",
  alcoholContent: "40% алк."
},
{
  id: 170,
  name: "Даблинер 50мл",
  description: "Ирландия, 40%",
  price: 450,
  category: "Виски",
  alcoholContent: "40% алк."
},
{
  id: 171,
  name: "Борн Айриш 50мл",
  description: "Ирландия, 40%",
  price: 550,
  category: "Виски",
  alcoholContent: "40% алк."
},
{
  id: 172,
  name: "Киркер Шемрок 50мл",
  description: "Ирландия, 40%",
  price: 650,
  category: "Виски",
  alcoholContent: "40% алк."
},

// Виски — Россия
{
  id: 173,
  name: "Данмор 50мл",
  description: "Россия, 40%",
  price: 250,
  category: "Виски",
  alcoholContent: "40% алк."
},
  // Закуски
  {
    id: 401,
    name: "Сэндвич с ветчиной и сыром",
    description: "200гр",
    price: 350,
    category: "Закуски"
  },
  {
    id: 402,
    name: "Сэндвич с лососем и рукколой",
    description: "200гр",
    price: 480,
    category: "Закуски"
  },
  {
    id: 403,
    name: "Круассан с бужениной и сыром",
    description: "150гр",
    price: 330,
    category: "Закуски"
  },
  {
    id: 404,
    name: "Круассан с куриной грудкой и томатами черри",
    description: "150гр",
    price: 330,
    category: "Закуски"
  },
  {
    id: 405,
    name: "Круассан с семгой, зеленью и творожным сыром",
    description: "150гр",
    price: 490,
    category: "Закуски"
  },
  {
    id: 406,
    name: "Сырное ассорти (2 вида сыра)",
    description: "250гр",
    price: 560,
    category: "Закуски"
  },
  {
    id: 407,
    name: "Мясное ассорти (с/к колбаса 3х видов)",
    description: "180гр",
    price: 610,
    category: "Закуски"
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
  "Снеки",
  "Закуски",
  "Чай/Кофе", 
  "Безалкогольные"
];

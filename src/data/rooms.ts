export interface Room {
  title: string;
  price: string;
  description: string;
  features: string[];
  capacity: string;
  image: string;
  gallery: string[];
}

export const rooms: Room[] = [
  {
    title: 'Стандарт',
    price: '3 500 ₽',
    description: 'Уютный номер с видом на город',
    features: ['Двуспальная кровать', 'Wi-Fi', 'Завтрак включен', 'Кондиционер'],
    capacity: '2 гостя',
    image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/259f14d1-5e14-46e7-aa6a-f7c7cefcd2fa.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/259f14d1-5e14-46e7-aa6a-f7c7cefcd2fa.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/5df3bb35-04ec-4062-beb7-8f4d294ef4d3.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/fee33889-874d-4a8a-a98f-0ed32dd0f00b.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/6f276252-c065-4ace-8db6-2d382d634cff.jpg',
    ],
  },
  {
    title: 'Полулюкс',
    price: '5 500 ₽',
    description: 'Просторный номер повышенной комфортности',
    features: ['Кровать king-size', 'Wi-Fi', 'Завтрак включен', 'Мини-бар', 'Балкон'],
    capacity: '2 гостя',
    image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/79af8040-63b8-4655-86d2-565344d8d567.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/79af8040-63b8-4655-86d2-565344d8d567.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/016d38ea-c51f-431b-bc09-882623c7894f.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/f7352368-6679-4a61-938c-c913668c63d2.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/5df3bb35-04ec-4062-beb7-8f4d294ef4d3.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/fee33889-874d-4a8a-a98f-0ed32dd0f00b.jpg',
    ],
  },
  {
    title: 'Люкс',
    price: '9 500 ₽',
    description: 'Роскошный номер премиум-класса',
    features: ['Кровать king-size', 'Wi-Fi', 'Завтрак включен', 'Мини-бар', 'Панорамный балкон', 'Джакузи', 'Гостиная зона'],
    capacity: '2 гостя',
    image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/b5ad83f6-d014-43ff-b8c3-c01e67e9ec30.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/b5ad83f6-d014-43ff-b8c3-c01e67e9ec30.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/65559e0b-ba0c-4a99-8723-3b16c0340488.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/6d2a9811-4a69-462f-b565-4ec2971fbfc1.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/016d38ea-c51f-431b-bc09-882623c7894f.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/f7352368-6679-4a61-938c-c913668c63d2.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/6f276252-c065-4ace-8db6-2d382d634cff.jpg',
    ],
  },
  {
    title: 'Семейный стандарт',
    price: '6 500 ₽',
    description: 'Комфортный номер для семьи',
    features: ['2 спальни', 'Wi-Fi', 'Завтрак включен', 'Гостиная зона', 'Детская кроватка'],
    capacity: '4 гостя',
    image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/14e94bef-98a1-49dd-a829-ef3c0726412e.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/14e94bef-98a1-49dd-a829-ef3c0726412e.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/6d2a9811-4a69-462f-b565-4ec2971fbfc1.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/5df3bb35-04ec-4062-beb7-8f4d294ef4d3.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/6f276252-c065-4ace-8db6-2d382d634cff.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/049a3827-abbd-4c59-a691-c5bc5d4cc01f.jpg',
    ],
  },
  {
    title: 'Семейный',
    price: '8 500 ₽',
    description: 'Большой номер для всей семьи',
    features: ['2 спальни', 'Wi-Fi', 'Завтрак включен', 'Гостиная зона', 'Кухня', 'Балкон'],
    capacity: '4 гостя',
    image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/0b4bb90a-949a-4369-8842-b65cb5b73368.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/0b4bb90a-949a-4369-8842-b65cb5b73368.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/5faa338b-1b31-46c4-bdcf-a4d863df5a94.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/6d2a9811-4a69-462f-b565-4ec2971fbfc1.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/016d38ea-c51f-431b-bc09-882623c7894f.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/5df3bb35-04ec-4062-beb7-8f4d294ef4d3.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/049a3827-abbd-4c59-a691-c5bc5d4cc01f.jpg',
    ],
  },
  {
    title: 'Семейный люкс',
    price: '12 500 ₽',
    description: 'Премиальный семейный номер с максимальным комфортом',
    features: ['3 спальни', 'Wi-Fi', 'Завтрак включен', 'Большая гостиная', 'Кухня', '2 балкона', 'Детская игровая зона'],
    capacity: '6 гостей',
    image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/d6595851-108b-4c09-a657-72ac628d6f0d.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/d6595851-108b-4c09-a657-72ac628d6f0d.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/5faa338b-1b31-46c4-bdcf-a4d863df5a94.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/6d2a9811-4a69-462f-b565-4ec2971fbfc1.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/049a3827-abbd-4c59-a691-c5bc5d4cc01f.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/65559e0b-ba0c-4a99-8723-3b16c0340488.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/016d38ea-c51f-431b-bc09-882623c7894f.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/5df3bb35-04ec-4062-beb7-8f4d294ef4d3.jpg',
    ],
  },
  {
    title: 'Президентский',
    price: '25 000 ₽',
    description: 'Эксклюзивный номер высшей категории',
    features: ['Главная спальня', 'Кабинет', 'Гостиная', 'Мраморная ванная с SPA', 'Личная терраса', 'Услуги дворецкого', 'Винный бар', 'Панорамный вид'],
    capacity: '2 гостя',
    image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/6ac14d67-1205-4d8a-8f89-a444477e79ff.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/6ac14d67-1205-4d8a-8f89-a444477e79ff.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/2f31b1b1-8ca2-4c6a-8b6d-2bd8d38d4fbf.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/65559e0b-ba0c-4a99-8723-3b16c0340488.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/6d2a9811-4a69-462f-b565-4ec2971fbfc1.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/f7352368-6679-4a61-938c-c913668c63d2.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/fee33889-874d-4a8a-a98f-0ed32dd0f00b.jpg',
      'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/6f276252-c065-4ace-8db6-2d382d634cff.jpg',
    ],
  },
];

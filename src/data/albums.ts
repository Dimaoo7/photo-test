export interface Photo {
  id: string;
  title: string;
  titleRu: string;
  image: string;
  download: string;
}

export interface Album {
  slug: string;
  title: string;
  titleRu: string;
  category: string;
  categoryRu: string;
  location: string;
  locationRu: string;
  date: string;
  description: string;
  descriptionRu: string;
  cover: string;
  photos: Photo[];
}

const image = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const albums: Album[] = [
  {
    slug: 'milena-and-marko',
    title: 'Milena & Marko',
    titleRu: 'Милена и Марко',
    category: 'Wedding story',
    categoryRu: 'Свадебная история',
    location: 'Perast, Montenegro',
    locationRu: 'Пераст, Черногория',
    date: '18 / 05 / 2024',
    description: 'A quiet day by the water, white stone and plenty of space between the frames.',
    descriptionRu: 'Тихий день у воды, белый камень и много воздуха между кадрами.',
    cover: image('photo-1519741497674-611481863552', 1400),
    photos: [
      { id: '01', title: 'Morning by the sea', titleRu: 'Утро у моря', image: image('photo-1519741497674-611481863552', 1100), download: image('photo-1519741497674-611481863552', 2400) },
      { id: '02', title: 'The look', titleRu: 'Взгляд', image: image('photo-1511285560929-80b456fea0bc', 1100), download: image('photo-1511285560929-80b456fea0bc', 2400) },
      { id: '03', title: 'After the ceremony', titleRu: 'После церемонии', image: image('photo-1519225421980-715cb0215aed', 1100), download: image('photo-1519225421980-715cb0215aed', 2400) },
      { id: '04', title: 'White stone', titleRu: 'Белый камень', image: image('photo-1515934751635-c81c6bc9a2d8', 1100), download: image('photo-1515934751635-c81c6bc9a2d8', 2400) },
    ],
  },
  {
    slug: 'quiet-kotor',
    title: 'Quiet Kotor',
    titleRu: 'Тихий Котор',
    category: 'Portrait session',
    categoryRu: 'Индивидуальная съемка',
    location: 'Kotor, Montenegro',
    locationRu: 'Котор, Черногория',
    date: '06 / 09 / 2024',
    description: 'A portrait walk through the old town before the streets wake up.',
    descriptionRu: 'Портретная прогулка по старому городу до того, как проснутся улицы.',
    cover: image('photo-1534528741775-53994a69daeb', 1400),
    photos: [
      { id: '01', title: 'Old town', titleRu: 'Старый город', image: image('photo-1534528741775-53994a69daeb', 1100), download: image('photo-1534528741775-53994a69daeb', 2400) },
      { id: '02', title: 'Warm light', titleRu: 'Теплый свет', image: image('photo-1529626455594-4ff0802cfb7e', 1100), download: image('photo-1529626455594-4ff0802cfb7e', 2400) },
      { id: '03', title: 'The alley', titleRu: 'Переулок', image: image('photo-1506794778202-cad84cf45f1d', 1100), download: image('photo-1506794778202-cad84cf45f1d', 2400) },
      { id: '04', title: 'Eight in the morning', titleRu: 'Восемь утра', image: image('photo-1500648767791-00dcc994a43e', 1100), download: image('photo-1500648767791-00dcc994a43e', 2400) },
    ],
  },
];

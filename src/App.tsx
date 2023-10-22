import './App.scss';
import { List } from './components/List';
import { IList } from './models/models';

function App() {
  const list: IList[] = [
    {
        type: 'image',
        url: 'https://storage-gmot.storage.yandexcloud.net/store/image/7662/7f74b330d6e7ac328594965af80faf32.jpg',
        date: '2023-10-22 03:28:00',
        views: 50
    },
    {
        type: 'article',
        title: 'Невероятные события в неизвестном поселке...',
        date: '2023-10-22 00:10:00',
        views: 112
    },
    {
        type: 'article',
        title: 'Секретные данные были раскрыты!',
        date: '2023-10-20 22:19:00',
        views: 1750
    },
    {
        type: 'image',
        url: 'https://storage-gmot.storage.yandexcloud.net/store/image/9981/5849282252068238b90a8ccf558b13f0.jpeg',
        date: '2023-05-20 21:10:00',
        views: 200
    },
    {
        type: 'image',
        url: 'https://storage-gmot.storage.yandexcloud.net/store/image/8496/3cf5d1057011c0a1884d3456db823aca.jpg',
        date: '2020-10-15 16:17:00',
        views: 4253
    },
    {
        type: 'article',
        title: 'Кот Бегемот обладает невероятной...',
        date: '2022-03-10 12:24:00',
        views: 12,
    },
  ];

  return (
    <List list={list} />
  );
}

export default App;

import { IList } from '../../models/models';
import { Image } from '../Image';
import { New } from '../New';
import { Popular } from '../Popular';
import { v4 as uuid } from 'uuid';
import { Article } from '../Article';

interface IImageProps {
  list: IList[]
}

export function List({ list }: IImageProps) {
  return (
    list.map(item => {
      switch (item.type) {
        case 'image': {
          const PopularImage= Popular(Image, item);
          const NewImage = New(Image, item);

          return (
            item.views > 1000 
            ? <PopularImage key={uuid()}/>
            : item.views < 100
            ? <NewImage key={uuid()}/>
            : <Image {...item} key={uuid()}/>
          );
        }

        case 'article': {
          const PopularArticle = Popular(Article, item);
          const NewArticle = New(Article, item);

          return (
            item.views > 1000 
            ? <PopularArticle key={uuid()} />
            : item.views < 100
            ? <NewArticle key={uuid()} />
            : <Article {...item} key={uuid()}/>
          );
        }
      }
    })
  );
}

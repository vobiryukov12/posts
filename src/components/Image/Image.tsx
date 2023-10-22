import { IList } from '../../models/models';
import { DateTime } from '../DateTime';
import { DateTimePretty } from '../DateTimePretty';

export function Image({ url, date, views }: IList) {
  const Date = DateTimePretty(DateTime, date);
  
  return (
    <div className="item">
      <div className="item__body">
        <img className="item__image" src={url} alt="" />
      </div>
      <div className="item__footer">
        <p className="item__views">Просмотров: {views}</p>
        <Date />
      </div>
    </div>
  );
}

import { IList } from '../../models/models';
import { DateTime } from '../DateTime';
import { DateTimePretty } from "../DateTimePretty";

export function Article({ title, views, date }: IList) {
  const Date = DateTimePretty(DateTime, date);
  
  return (
    <div className="item">
      <div className="item__body">
        <h3 className="item__title"><a className="item__link" href="#">{title}</a></h3>
      </div>
      <div className="item__footer">
        <p className="item__views">Прочтений: {views}</p>
        <Date />
      </div>
    </div>
  );
}

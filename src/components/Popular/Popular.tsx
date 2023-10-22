import { IList } from "../../models/models";

export function Popular(Component: React.FC<IList>, item: IList) {  
  return function () {
    return (
      <div className="wrap-item wrap-item--popular">
        <span className="wrap-item__label">Популярное</span>
        <Component {...item} />
      </div>
    );
  }
}

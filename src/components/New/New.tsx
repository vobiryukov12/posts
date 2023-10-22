import { IList } from "../../models/models";

export function New(Component: React.FC<IList>, item: IList) {
  return function () {
    return (
      <div className="wrap-item wrap-item--new">
        <span className="wrap-item__label">Новое</span>
        <Component {...item} />
      </div>
    );
  }
}

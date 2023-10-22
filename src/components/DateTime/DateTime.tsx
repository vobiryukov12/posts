interface IDateProps {
  elapsed: string
}

export function DateTime({ elapsed }: IDateProps) {
  return (
    <p className="item__date">{elapsed}</p>
  );
}

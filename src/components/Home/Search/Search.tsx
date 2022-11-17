import { SearchTypes } from "./Search.types";
import "./Search.scss";

export function Search(props: SearchTypes.Props) {
  const { onSearch } = props;

  return (
    <input
      placeholder="Filtrar podcasts"
      className="search"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

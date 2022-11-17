import { Header } from "../../components";
import { BasicLayoutTypes } from "./BasicLayout.types";

export function BasicLayout(props: BasicLayoutTypes.Props) {
  const { children } = props;

  return (
    <div>
      <Header />

      {children}
    </div>
  );
}

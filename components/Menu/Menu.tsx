import { MenuProps } from "./Menu.types";

export default function Menu({ activeId, items }: MenuProps) {
  return <div>this is first story {JSON.stringify({ activeId, items })}</div>;
}

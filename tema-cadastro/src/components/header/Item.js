import { Link } from "react-router-dom";

export function Item({ name, url }) {
  return (
    <li>
      <Link to={url}> {name}</Link>
    </li>
  );
}

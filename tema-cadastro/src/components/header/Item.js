import { ItemLink, ItemContainer } from "./Item.styled";

export function Item({ name, url, img }) {
  return (
    <ItemContainer>
      <ItemLink to={url}>
        {img}
        {name}
      </ItemLink>
    </ItemContainer>
  );
}

import { StyledList } from './styled';

export function ProductCardTabs() {
  return (
    <StyledList>
      <li>
        <a href="#">
          <span>Описание</span>
        </a>
      </li>
      <li >
        <a href="#">
          <span>Характеристики</span>
        </a>
      </li>
      <li >
        <a href="#">
          <span>Свойства</span>
        </a>
      </li>
    </StyledList>
  );
}

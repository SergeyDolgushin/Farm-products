import { MouseEvent } from 'react';

import { Filter } from '../../utils/const';
import { StyledList, StyledLi, ProductCardButton } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeProductCardState } from '../../store/actions';


export function ProductCardTabs() {
  const currentState = useAppSelector((state) => state.currentStateCard) as (keyof typeof Filter);
  const dispatch = useAppDispatch();

  const handleOnClickTab = (evt: MouseEvent<HTMLButtonElement>) => {
    const value = (Object.keys(Filter) as (keyof typeof Filter)[])
      .find((key) =>
        Filter[key] === evt.currentTarget.textContent
      );
    dispatch(changeProductCardState({ currentStateCard: String(value) }));
  };

  return (
    <StyledList>
      <StyledLi>
        <ProductCardButton
          isActive={Filter[currentState] === Filter.description }
          onClick={handleOnClickTab}
        >
          {Filter.description}
        </ProductCardButton>
      </StyledLi>
      <StyledLi >
        <ProductCardButton
          isActive={Filter[currentState] === Filter.characteristics }
          onClick={handleOnClickTab}
        >{Filter.characteristics}
        </ProductCardButton>
      </StyledLi>
      <StyledLi >
        <ProductCardButton
          isActive={Filter[currentState] === Filter.properties}
          onClick={handleOnClickTab}
        >
          {Filter.properties}
        </ProductCardButton>
      </StyledLi>
    </StyledList>
  );
}

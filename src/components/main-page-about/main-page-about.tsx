import { StyledP, StyledTitle, StyledSectionAbout, DivWrapper } from './styled';


export function About() {
  return (
    <DivWrapper>
      <StyledSectionAbout className="about">
        <StyledTitle>
          Магазин фермерских продуктов с доставкой
        </StyledTitle>
        <StyledP>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </StyledP>
      </StyledSectionAbout>
    </DivWrapper>
  );
}

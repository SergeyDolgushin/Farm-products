import { Feature } from '../../types/types';
import { OWNER } from '../../utils/const';
import { StyledHeader, StyledSection, StyledDiv, StyledSpan, StyledImg, StyledTitle, StyledP } from './styled';

type FeatureCard = {
  feature: Feature;
}

export function MainPageFeatureCard({feature}: FeatureCard) {
  const {image, title, owner, about} = feature;
  return (
    <StyledSection>
      <StyledHeader className="feature__header">
        <StyledImg
          src={image}
          alt={title}
        />
        <StyledDiv>
          <StyledSpan isOwner={owner === OWNER}>{owner}</StyledSpan>
          <StyledTitle>{title}</StyledTitle>
        </StyledDiv>
      </StyledHeader>
      <StyledP>
        {about}
      </StyledP>
    </StyledSection>
  );
}

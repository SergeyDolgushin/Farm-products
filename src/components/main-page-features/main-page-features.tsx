import { Feature } from '../../types/types';
import { Button } from '../../ui/button/button';
import { OWNER } from '../../utils/const';
import { MainPageFeatureCard } from '../main-page-feature-card/main-page-feature-card';
import { StyledList, StyledLi, StyledH2, StyledSection } from './styled';


type Features = {
  features: Feature[];
};

export function MainPageFeatures({ features }: Features) {
  const featuresCards = features.map((feature) => (
    <StyledLi key={feature.id} isOwner={feature.owner === OWNER}>
      <MainPageFeatureCard feature={feature} />
    </StyledLi>
  ));

  return features && features.length ? (
    <StyledSection className="features">
      <StyledH2>Почему фермерские продукты лучше?</StyledH2>
      <StyledList>
        {featuresCards}
      </StyledList>
      <Button>Купить</Button>
    </StyledSection>
  ) : null;
}

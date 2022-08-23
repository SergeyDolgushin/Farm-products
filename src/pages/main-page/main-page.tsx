import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { About } from '../../components/main-page-about/main-page-about';
import { MainPageFeatures } from '../../components/main-page-features/main-page-features';
import { features } from '../../utils/mock';

export function MainPage() {
  return (
    <>
      <Header/>
      <About/>
      <MainPageFeatures features={features}/>
      <Footer/>
    </>
  );
}

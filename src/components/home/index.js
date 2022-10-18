import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';

export const Home = () => {
  return (
    <section className='container mx-auto p-4'>
      <Header />
      <Main />
      <Footer />
    </section>
  )
}

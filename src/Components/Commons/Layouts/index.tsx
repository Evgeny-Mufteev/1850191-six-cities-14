import { Footer } from '../footer/footer';
import { Header } from '../header/header';

interface TProps {
  children: JSX.Element;
}

const Layout = ({ children }: TProps) => {
  return (
    <div>
      <Header />
      <main className="page__main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
import Header from '../header';
import Footer from '../footer';
import './layout.scss';
import { Container } from 'react-bootstrap';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <Container>
      <div className="layout">
        <Header />
        {children}
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;

import {
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom';
import { routes } from './routes/routes';
import Layout from './components/Layout/Layout';
const App: React.FC<any> = () => {
  return (
    <Router>
      <Layout>
        <div>
          {routes.staticrotes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={()=><route.component />}
            />
          ))}
        </div>
      </Layout>
    </Router>
  );
};

export default App;

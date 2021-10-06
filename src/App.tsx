import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { routes } from './routes/routes';
import Layout from './components/layout';
const App: React.FC<any> = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.staticrotes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={() => (
                <route.component />
              )}
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;

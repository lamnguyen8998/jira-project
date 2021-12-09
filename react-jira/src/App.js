import './App.css';

import {
  BrowserRouter,
  Route, Switch
} from "react-router-dom"

import PageNotFound from './containers/PageNotFound';
import { renderRouteHome } from './routes';
import Navbar from './containers/HomeTemplate/_component/Navbar';
import Footer from './containers/HomeTemplate/_component/Footer';
import HomePage from './containers/HomeTemplate/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {renderRouteHome()}
        {/* <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/register" component={Register} /> */}
        <Route path="" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>)
}

export default App;

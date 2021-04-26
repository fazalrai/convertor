import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import ClippedDrawer from './components/Drawer';
import CurrencyConversionStatus from "./components/CurrencyConversionStatus"
import CurrencyBar from './components/CurrencyBar';
import CurrencyBarDesign from './components/CurrencyBarDesign';
import DeviceSettings from "./components/DeviceSettings"
import PricingPreferences from './components/PricingPreferences';
import CurrencyPreferences from "./components/CurrencyPreferences"
import CartPageNotifications from './components/CartPageNotifications';
import CustomizedSteppers  from './components/Stepper'

function App() {
  return (
    <div  className="App">
      <Navbar/>
      <ClippedDrawer/>
      <CustomizedSteppers/>
      <Switch>
      <Route
        exact
        path="/"
        component={CurrencyConversionStatus}
      />
      <Route
        exact
        path="/currency/bar"
        component={CurrencyBar}
      />
      <Route
        exact
        path="/currency/bar/design"
        component={CurrencyBarDesign}
      />
          <Route
        exact
        path="/currency/preferences"
        component={CurrencyPreferences}
      />     
      <Route
        exact
        path="/device/setting"
        component={DeviceSettings}
      />
      <Route
        exact
        path="/pricing/perferences"
        component={PricingPreferences}
      />
      <Route
        exact
        path="/cart/page/notifications"
        component={CartPageNotifications}
      />
      <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;

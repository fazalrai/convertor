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
import Grid from '@material-ui/core/Grid';
import Faqs from './components/Faqs';
import Dialog from "./components/DialogBox"
import {useLocation} from 'react-router-dom'
const root= {
  width: "100%"
}
function App() {
const location=useLocation()
  return (
    <div  className="App">
    <Grid container>
     
   <Grid item xs={12} md={12}lg={12}>
      <Navbar/>
      </Grid>
   <Grid item xs={12} md={2} lg={2}>
        <ClippedDrawer/>
        </Grid>    
    {location.pathname ==="/faqs" ? " ":<CustomizedSteppers/>}
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
      <Route
        exact
        path="/faqs"
        component={Faqs}
      />
      <Route
        exact
        path="/dialog"
        component={Dialog}
      />
      <Redirect to="/"/>
      </Switch>
      </Grid>
    </div>
  );
}

export default App;

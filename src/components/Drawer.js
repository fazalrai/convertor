import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box'
import {Link,NavLink} from 'react-router-dom'
import HeadsetMicicon from '@material-ui/icons/HeadsetMic';
import {useLocation} from 'react-router-dom'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex:0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#F0F0F0"
  },
  drawerContainer: {
    overflow: 'auto',
    marginTop:theme.spacing(1)
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  active:{
    backgroundColor: '#ffffff',
  }
}));

export default function ClippedDrawer() {
  const location = useLocation()
  const [over,setOver]=React.useState(false)
  const classes = useStyles();
  const isActive = (url)=>location.pathname === url ? classes.active : ''
 
  return (
    <div className={classes.root}>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        elevation="16"
        
      >

        <div className={classes.drawerContainer}>

        <Box mt={14} fontWeight="fontWeightBold">
        Dashboard
        </Box>
        <List>
   <ListItem button   component={NavLink} to="/">
        <ListItemText className={isActive('/')} primary="Auto Curreny Conversion Status" />
   </ListItem>
   <ListItem   button component={Link} to="/currency/bar">
        <ListItemText className={isActive('/currency/bar')} primary="Preview the currency Bar on your Store" />
   </ListItem> <ListItem button component={NavLink} to="/currency/preferences">
        <ListItemText className={isActive('/currency/preferences')}  primary="Currency Preferences" />
   </ListItem> <ListItem button component={NavLink} to="/currency/bar/design">
        <ListItemText className={isActive('/currency/bar/design')} primary="Currency Bar Design" />
   </ListItem> <ListItem button component={NavLink} to="/device/setting">
        <ListItemText className={isActive('/device/setting')} primary="Device Settings" />
   </ListItem>
   <ListItem button component={NavLink} to="/pricing/perferences">
        <ListItemText className={isActive('/pricing/perferences')} primary="Pricing Preferences" />
   </ListItem>
    <ListItem button component={NavLink} to="/cart/page/notifications">
        <ListItemText className={isActive('/cart/page/notifications')} primary="Cart Page Notification" />
   </ListItem>
</List>
<Divider/>
<Box mt={2} display="flex">
  <HeadsetMicicon/>
  <Box ml={2} fontWeight="fontWeightBold">
        Support
        </Box>
        </Box>
        <ListItem button component={NavLink} to="/help">
        <ListItemText primary="Help Center" />
   </ListItem> <ListItem button component={NavLink} to="/troubleshoot">
        <ListItemText primary="Troubleshooting" />
   </ListItem> <ListItem button component={NavLink} to="/setup/videos">
        <ListItemText primary="Watch Setup Videos" />
   </ListItem>
        </div>
      </Drawer>
  
    </div>
  );
}


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Box,Typography,Switch} from '@material-ui/core'
import Convertor from './Convertor';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:'270px',
    marginTop:'50px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textMargin:{
    marginTop:'20px'
  },
  topLeftBox: {
 float:'left'
  },
  leftBox:{
backgroundColor:"#ffffff"
  },
  rightBox:{
    backgroundColor:'##F0F0F0'
  },
  selector:{
    marginTop: '32px'
  }
}));
const defaultProps = {
  bgcolor : "#F0F0F0",
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '20rem', height: '13rem' },
};



export default function CenteredGrid() {
  const classes = useStyles();
const [toggle,setToggle] = React.useState(false)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       <Box display="flex">
       <Grid className={classes.leftBox}  item sm={12} md={4} lg={3}>

<Box  borderRadius={16} {...defaultProps}>
<Box mt={4} fontWeight="fontWeightBold" >
  Auto Currency Conversion status
</Box>
<Typography  className={classes.textMargin} variant="subtitle1">
This app will automatically convert the
currency based upon your customer's
location.
</Typography>
<Switch className={classes.topLeftBox}
        checked={toggle}
        onChange={()=>setToggle(prev=> !prev)}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      /></Box>
</Grid>

<Grid item  md={9} sm={12} lg={9}>
<Convertor/>
</Grid>
</Box>

      </Grid>
    </div>
  );
}

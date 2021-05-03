
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Box} from '@material-ui/core'
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
    marginTop:'40px',
    backgroundColor:"#ffffff"

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
  bold: {
    fontWeight: 600
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
  style: { width: '20rem', height: '12rem' },
};

const childdefaultProps = {
  bgcolor : "#F0F0F0",
  m: 1,
  style: { width: '18rem', height: '3rem' },
};

export default function CurrencyBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       <Box display="flex">
       <Grid className={classes.leftBox}  item sm={12} md={3} lg={3}>

<Box  borderRadius={16} {...defaultProps}>
<Box mt={4} fontWeight="fontWeightBold" >
Preview the Currency Bar  on <br/>
your Store</Box>
<Box mt={4} borderRadius={16}  color="primary.main" fontWeight="fontWeightBold" className={classes.textMargin} {...childdefaultProps} >
Preview your Store and come <br/>Back
</Box>

</Box>
</Grid>
<Grid item  md={9} sm={12} lg={9}>
<Convertor/>
</Grid>
</Box>

      </Grid>
    </div>
  );
}

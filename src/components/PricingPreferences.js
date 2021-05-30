import React from 'react'
import { Grid , Box} from '@material-ui/core';
import { makeStyles,FormControlLabel,Checkbox } from '@material-ui/core';
import HelpOutlineicon from '@material-ui/icons/HelpOutline';
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
    marginTop:'20px',
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
  bgcolor : "#FAFAFA",
  borderColor: '#F0F0F0',
  m: 1,
  border: 3,
  style: { width: '20rem', height: '10rem' },
};
const checkboxDefaultProps = {
  bgcolor : '#F0F0F0'
};


function PricingPreferences() {
  const classes = useStyles()
 
  const [state, setState] = React.useState({
    showFlagAndCurrency: false,
    showCurrencyOnly: false,
    background: false,
    tex: false,
    hoverColor: false,
    true :false,
    false:false

  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
    <Box display="flex">
    <Grid className={classes.leftBox}  item sm={12} md={3} lg={3}>

<Box  borderRadius={16} {...defaultProps}>
<Box mt={4} fontWeight="fontWeightBold" >
Pricing Preferences
</Box>

<Box textAlign="start" borderRadius={16} m={2} {...checkboxDefaultProps}>
<FormControlLabel
        control={
          <Checkbox
            checked={state.showFlagAndCurrency}
            onChange={handleChange}
            name="showFlagAndCurrency"
            color="primary"
          />
        }
        label="Round Off Price by Default"
      />
  <HelpOutlineicon/>

</Box>
</Box>


</Grid>
<Grid item  md={9} sm={12} lg={9}>
<Convertor/>
</Grid>
</Box>

   </Grid>
   </div>
  )
}

export default PricingPreferences

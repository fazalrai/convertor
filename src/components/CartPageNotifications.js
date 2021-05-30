import React from 'react'
import { Grid , Box} from '@material-ui/core';
import { makeStyles,FormControlLabel,Checkbox } from '@material-ui/core';
import { SketchPicker } from 'react-color';

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
  style: { width: '20rem', height: '40rem' },
};
const checkboxDefaultProps = {
  bgcolor : '#F0F0F0'
};
const boxDefaultProps = {
  border: 2,
  borderColor: '#F0F0F0',
  bgcolor : '#F0F0F0',
  m: 1,
  style: { width: '18rem',height: '9rem'}

};

const colorProps={
  border: 2,
  borderColor: '#F0F0F0',
  m: 1,
  style: { width: '1rem',height: '1rem'}

}

function CartPageNotifications() {
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
  const [texColor,setTexColor]=React.useState("#636363")
  const [openTexColor,setOpenTexColor] = React.useState(false)
  const [backGroundColor,setBackGroundColor]= React.useState("#636363")
  const [openBackGroundColor,setOpenBackGroundColor] = React.useState(false)
  const handleOpenTaxColor=()=>{
    setOpenTexColor(prev=>!prev)
  }

const   handleTexChangeColor = (color) => {
    setTexColor(color.hex);
  };
  const handleOpenBackGrounfColor=()=>{
    setOpenBackGroundColor(prev=>!prev)
  }

  const   handleBackGroundChangeColor = (color) => {
    setBackGroundColor(color.hex);
  };
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
  Cart Page Notification 
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
        label="Show Notification on Cart Page"
      />
</Box>
<Box mt={4}color="#636363">
Customers will always checkout in the
currency of your store. (USD)</Box>
<Box mt={4}color="#636363" >
Displaying a cart page notice will help
remove any possible confusion for the
customer</Box>
<Box mt={4}color="#636363" >
Tax</Box>
<Box borderRadius={16} mt={4}color="#636363" {...boxDefaultProps} >
All orders are processed in [checkout
_currency], using the latest exchange
rates.</Box>
<Grid   container
 direction="row"
  // justify="space-between"
  alignItems="center"
  margin="5px"
 display="inline-flex"  
>
<Box ml={3} onClick={handleOpenTaxColor}  bgcolor={texColor} mt={4}{...colorProps} >
</Box>
<Box mt={4}>
  Tex Color
</Box>
{openTexColor && <SketchPicker
        color={ texColor }
        onChangeComplete={ handleTexChangeColor }
      />}
      <Box ml={7} onClick={handleOpenBackGrounfColor}  bgcolor={backGroundColor} mt={4}{...colorProps} >
</Box>
{openBackGroundColor && <SketchPicker
        color={ texColor }
        onChangeComplete={ handleBackGroundChangeColor }
      />}
      <Box mt={4}>
      Background
      </Box>
      </Grid>
</Box>


</Grid>
<Grid item   md={9} sm={12} lg={9}>
<Convertor/>
</Grid>
</Box>

   </Grid>
   </div>
  )
}

export default CartPageNotifications

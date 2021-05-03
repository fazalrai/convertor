import React from 'react'
import { Grid , Box} from '@material-ui/core';
import { makeStyles,FormControlLabel,Checkbox,Menu,MenuItem } from '@material-ui/core';
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
  bold: {
    // fontWeight: 600,
    // paddingTop : '20px'
    
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
  style: { width: '20rem', height: '30rem' },
};
const checkboxDefaultProps = {
  bgcolor : '#F0F0F0'
  // borderColor: 'text.primary',
  // m: 1,
  // border: 1,
  // style: { width: '20rem', height: '12rem' },
};

const childdefaultProps = {
  bgcolor : "#F0F0F0",
  m: 1,
  style: { width: '18rem', height: '7rem' },
};

function DeviceSettings() {
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
  const handleShadowChange = (event) => {
    if(event.target.name === "true"){
      if(event.target.value ==false && !event.target.value == true){
      setState({ ...state, [event.target.name]: event.target.checked ,[!event.target.name]:false});
      }
      else if (event.target.value ==true && !event.target.value == false){
        setState({ ...state, [event.target.name]: false ,[!event.target.name]:true});
      }
    }
    else{
    if(event.target.value ==false && !!event.target.value == true){
    setState({ ...state, [event.target.name]: event.target.checked ,[!!event.target.name]:false});
    }
    else if(event.target.value ==false && !!event.target.value == true){
      setState({ ...state, [event.target.name]: false ,[!!event.target.name]:true});

    }
  }
  };
  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
    <Box display="flex">
    <Grid className={classes.leftBox}  item sm={12} md={3} lg={3}>

<Box  borderRadius={16} {...defaultProps}>
<Box mt={4} fontWeight="fontWeightBold" >
Device Settings
</Box>
<Box color="#636363"className={classes.textMargin} p={1.5} textAlign="start" borderRadius={16} m={2} {...checkboxDefaultProps}>
Show currency bar on:
</Box>
<Box textAlign="start" borderRadius={16} m={2}>
<FormControlLabel
        control={
          <Checkbox
            checked={state.showFlagAndCurrency}
            onChange={handleChange}
            name="showFlagAndCurrency"
            color="primary"
          />
        }
        label="Desktop"
      />
</Box>
<Box textAlign="start" borderRadius={16} m={2} {...checkboxDefaultProps}>
{/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
</Box>
<Box  textAlign="start" borderRadius={16} m={2} {...checkboxDefaultProps}>
<FormControlLabel
        control={
          <Checkbox
            checked={state.background}
            onChange={handleChange}
            name="background"
            color="primary"
          />
        }
        label="Background"
      />
</Box>
<Box textAlign="start" borderRadius={16} m={2} {...checkboxDefaultProps}>
<FormControlLabel
        control={
          <Checkbox
            checked={state.tex}
            onChange={handleChange}
            name="tex"
            color="primary"
          />
        }
        label="Tex"
      />
</Box>
<Box  textAlign="start" borderRadius={16} m={2} {...checkboxDefaultProps}>
<FormControlLabel
        control={
          <Checkbox
            checked={state.hoverColor}
            onChange={handleChange}
            name="hoverColor"
            color="primary"
          />
        }
        label="Hover Color"
      />
</Box>

<Box  textAlign="start" borderRadius={16} m={1}   justify="space-between"
 {...checkboxDefaultProps}>
 Add a shadow to bar 
<FormControlLabel
 label="Yes"
        control={
          <Checkbox
            checked={state.showNameAndFlagCurrency}
            onChange={handleShadowChange}
            name="true"
            color="primary"
          />
        }
       
      />
      <FormControlLabel
       label="No"
        control={
          <Checkbox
            checked={state.showNameAndFlagCurrency}
            onChange={handleShadowChange}
            name="false"
            color="primary"
          />
        }
       
      />
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

export default DeviceSettings

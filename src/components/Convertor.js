import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Box, NativeSelect,InputBase,withStyles,Grid} from '@material-ui/core'
import PhoneIphoneicon from '@material-ui/icons/PhoneIphone';
import ComputerIcon from '@material-ui/icons/Computer';

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
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 16,
    position: 'relative',
    backgroundColor: '#F0F0F0',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
    },
  },
}))(InputBase);
const rightBoxDefaultProps = {
  bgcolor : "#F0F0F0",
  borderColor: 'text.primary',
  m: 1,
  style: { width: '60rem', height: '40rem' },
}

const rightChildProps = {
  bgcolor : "#ffffff",
  borderColor: 'text.primary',
  marginLeft : '60px',
  marginTop : '50px',
  style: { width: '50rem', height: '30rem' },

}
function Convertor() {
  const [pkr, setPkr] = React.useState('pkr')
  const classes = useStyles();
  return (
    <Grid container spacing={3}>  
    <Box ml={7}  borderRadius={16} {...rightBoxDefaultProps}>
<Box mt={4} display="flex"   alignItems="center" p={2}   justifyContent="space-evenly"  fontWeight="fontWeightBold" >
  <ComputerIcon/>
  <PhoneIphoneicon/>
</Box>
<Box {...rightChildProps} >
<Box 
borderRadius={16} mt={2} display="flex" ml={4}  fontWeight="fontWeightBold" >
<NativeSelect
variant="outlined"
border={16}
fontWeight="fontWeightBold"
marginTop="16px"
className={classes.selector}

          id="demo-customized-select-native"
          def={pkr}
          onChange={(e)=>setPkr(e.target.value)}
          input={<BootstrapInput />}
          defaultValue= "pkr"
        >
          <option value="pkr">  PKR </option>
          <option value="dollar">DOLLAR</option>
        </NativeSelect>    
         </Box>
</Box>
</Box>
</Grid>
  )
}

export default Convertor

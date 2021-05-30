import React from 'react'
import { Grid , Box} from '@material-ui/core';
import { makeStyles,FormControlLabel,Checkbox ,GridList, GridListTile,Button} from '@material-ui/core';
import { countries } from "country-flags-svg"
import HelpOutlineicon from '@material-ui/icons/HelpOutline';

// import {countries} from "country-data-list"

import Convertor from './Convertor';
import { Check } from '@material-ui/icons/Check';


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
  },
  gridList: {
    width: 300,
    height: 400,
  },
  gridList1: {
    width: 300,
    height: 200,
  },
  dropDownHeight:{
    height:'0px'
  }

  
}));


const defaultProps = {
  bgcolor : "#FAFAFA",
  borderColor: '#F0F0F0',
  m: 1,
  border: 3,
  style: { width: '20rem', height: '33rem' },
};
const checkboxDefaultProps = {
  bgcolor : '#F0F0F0',
  // borderColor: 'text.primary',
  // m: 1,
  // border: 1,
   style: { height: '2rem' },
};
const childdefaultProps1 = {
  bgcolor : "#ffffff",
  borderColor: '#F0F0F0',
  m: 1,
  border:3,
  style: { width: '18rem', height: '3rem' },
};
const childdefaultProps = {
  bgcolor : "#F0F0F0",
  m: 1,
  style: { width: '18rem', height: '7rem' },
};

function CurrencyPreferences() {
  const classes = useStyles()
 
  const [showFlagAndCurrency, setShowFlagAndCurrency] = React.useState(false);
  const [selectMore,setSelectMore]=React.useState(false)
  const [selectedCountries, setSelectedCountries] = React.useState([]);
  const [unSelectedCountries, setUnSelectedCountries] = React.useState([]);

  const handleAddMoreCurrencySelect = ()=>{
    setSelectMore(prev=>!prev)
  }

  const handleAlreadySelectedChange = (event) => {
      const result = selectedCountries.filter((country)=>country.name !== event.target.name)
      const result1 = selectedCountries.filter((country)=>country.name === event.target.name)
      const changeCheck={...result1[0],check:false}
      setSelectedCountries(result)
      setUnSelectedCountries([...unSelectedCountries,changeCheck])
  };
  const handleUnSelectedChange = (event) => {
    const result = unSelectedCountries.filter((country)=>country.name !== event.target.name)
    const result1 = unSelectedCountries.filter((country)=>country.name === event.target.name)
    const changeCheck={...result1[0],check:true}
    setUnSelectedCountries(result)
    setSelectedCountries([...selectedCountries,changeCheck])
};

const handleShowAllCurrency = (event) => {
  if(showFlagAndCurrency === false){
    debugger
  setSelectedCountries([...selectedCountries,...unSelectedCountries])
  setShowFlagAndCurrency(prev=>!prev)
  }
  else{
  debugger
const selected=countries.filter((country)=>(country.name === 'Australia' || country.name ==='United States' || country.name === 'Germany'))
const unSelected=countries.filter((country)=>(country.name !== 'Australia' || country.name !=='United States' || country.name !== 'Germany'))
console.log(selected);
const selectedResult = selected.map((select) => ({ ...select, check: true }))
console.log(selectedResult);

const unselectedResult = unSelected.map((select) => ({...select,check:false}))
setSelectedCountries(selectedResult)
setUnSelectedCountries(unselectedResult)
setShowFlagAndCurrency(prev=>!prev)
  }

};

  React.useEffect(()=>{
const selected=countries.filter((country)=>(country.name === 'Australia' || country.name ==='United States' || country.name === 'Germany'))
const unSelected=countries.filter((country)=>(country.name !== 'Australia' || country.name !=='United States' || country.name !== 'Germany'))
console.log(selected);
const selectedResult = selected.map((select) => ({ ...select, check: true }))
console.log(selectedResult);

const unselectedResult = unSelected.map((select) => ({...select,check:false}))
setSelectedCountries(selectedResult)
setUnSelectedCountries(unselectedResult)
  },[])
  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
    <Box display="flex">
    <Grid className={classes.leftBox}  item sm={12} md={3} lg={3}>

<Box  borderRadius={16} {...defaultProps}>
<Box mt={4} fontWeight="fontWeightBold" >
Currency Preferences
</Box>
<Box textAlign="centre" justifyContent="centre" alignContent="centre" color="#636363"className={classes.textMargin}>
Pick currencies that your customers
will want.</Box>
<Box textAlign="start" borderRadius={16} m={2} {...checkboxDefaultProps}>
<FormControlLabel
        control={
          <Checkbox
            checked={showFlagAndCurrency}
            onChange={handleShowAllCurrency}
            name="showFlagAndCurrency"
            color="primary"
          />
        }
        label="Show all currencies"
      />

</Box>

<GridList  className={classes.gridList1} cols={1}>
{showFlagAndCurrency ? "" : selectedCountries.map((country)=><Box textAlign="start"  borderRadius={16} m={2} {...checkboxDefaultProps}>
<GridListTile key={country.id} cols={ 1}>
<FormControlLabel 
        control={
          <Checkbox
            checked={country.check}
            onChange={handleAlreadySelectedChange}
            name={country.name}
            color="primary"
          />
        }
        label={country.name}
      />
    </GridListTile>

    </Box>  
      )}
      </GridList>
{showFlagAndCurrency ? '': <><Box onClick={handleAddMoreCurrencySelect} mt={4} borderRadius={16}  color="primary.main" fontWeight="fontWeightBold" className={classes.textMargin}  {...childdefaultProps1} >
<Button>+ Add more Currencies</Button>
</Box>
<GridList  className={classes.gridList} cols={1}>
{selectMore  && unSelectedCountries.map((country)=><Box textAlign="start"  borderRadius={16} m={2} { ...checkboxDefaultProps}>
<GridListTile key={country.id} cols={ 1}>
<FormControlLabel 
        control={
          <Checkbox
            checked={country.check}
            onChange={handleUnSelectedChange}
            name={country.name}
            color="primary"
          />
        }
        label={country.name}
      />
    </GridListTile>

    </Box>  
      )}
      </GridList>
      </>
}
{/* <Box textAlign="start" borderRadius={16} m={2} {...checkboxDefaultProps}> */}
{/* <FormControlLabel
        control={
          <Checkbox
            checked={showFlagAndCurrency}
            onChange={()=>setShowFlagAndCurrency(prev=>!prev)}
            name="showFlagAndCurrency"
            color="primary"
          />
        }
        label="Show all currencies"
      />
</Box> */}
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

export default CurrencyPreferences

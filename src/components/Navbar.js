import React from 'react'
import {AppBar,Toolbar,Typography,makeStyles,Box,Grid,withStyles} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
width:{
  padding : theme.spacing(5),
  align: 'initial',
  display :'flex'
},
navbarWidht:{
height: theme.spacing(5),
width:"100%"
},
boxWidth:{
  width : theme.spacing(4),
  heigth : theme.spacing(4)

},

boxDisplay:{
display:"content"
}
  
}));

const navbarDefaultProps = {
  borderColor: 'text.primary',
  m: 3,
  border: 10,
  style: { width: '30rem', height: '10rem' },

};

const defaultProps = {
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '3rem', height: '3rem' },
};

const WhiteTextTypography = withStyles({
  root: {
  color: "#d8d8d8"
  }
})(Typography);

function Navbar() {
  const classes = useStyles();

  return (
     <Grid container              spacing={1}>
    <AppBar position="fixed" style={{ borderBottom: "5px solid #3f51b5" , borderBottomLeftRadius:'25px', borderBottomRightRadius: '25px'}}>
      <Toolbar >
        <Grid item xs={10} sm={10} lg={10} md={10} >
        <Typography display="flex" variant="h6" className={classes.width}>
        CURRENY CONVERTOR PRO
        </Typography>
        </Grid>
        <Grid item display="contents" alignContent="flex-start" direction="row" xs={2} sm={2} md={2} className={classes.boxDisplay}>
        <Box display="flex" mt={2}>
        <Box 
          bgcolor="warning.main" borderRadius={16}  {...defaultProps}>
          <Typography variant="h4">
          S
          </Typography>       
         </Box>
        <Box display="flex" flexDirection="column">
        <Typography variant="h6">
        Small Expresso
        </Typography>
        <WhiteTextTypography variant="subtitle1">
        Small-Expresso
        </WhiteTextTypography>
        </Box>
        </Box>
        </Grid>
      </Toolbar>
    </AppBar>
   </Grid>
  )
}

export default Navbar

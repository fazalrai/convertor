import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {

  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(()=>setOpen(true),[])
  const defaultProps = {
    bgcolor : "#FAFAFA",
    borderColor: '#F0F0F0',
    m: 1,
    border: 3,
    // style: { width: '20rem', height: '30rem' },
  };
  return (
    <Box borderRadius={16} {...defaultProps}>
      <Dialog
      borderRadius={16}
       maxWidth="md"
       fullWidth={fullWidth}
       onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} > 
        </DialogTitle>
      
        
    
        <DialogContent >
        <Box fontWeight="fontWeightBold">    Step 1</Box>

        <Box mt={2} color="#636363">
        Navigate to your

      <Link to="">Store Currency Setting</Link>  
and click change Formatting
        </Box>
        <Box mt={2} fontWeight="fontWeightBold">    Step 2</Box>
        <Box mt={2} color="#636363">
Update the currency and formeting values with values below:
        </Box>
        <Button variant="contained" color="primary">
          Copy
      </Button>

        <Box mt={2} fontWeight="fontWeightBold">   HTML with Currency</Box>
        <Box mt={2}color="#636363" >  This example is for a store that uses USD as their default currency</Box>
        <Box mt={2} fontWeight="fontWeightBold">  Currency Formating</Box>
        <Box mt={2}color="#636363" >  Change how currencies are displayed on your store. will be replaced with the price of your product.</Box>

        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

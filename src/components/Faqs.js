import React from 'react'
import clsx from 'clsx';
import { Grid , Box , makeStyles , Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  Typography,
  Chip,
  Button,
  Divider

} from '@material-ui/core';
import ExpandMoreicon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  column3: {
    flexBasis: '5%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
const defaultProps = {
  bgcolor : "#FAFAFA",
  borderColor: '#F0F0F0',
  m: 1,
  border: 3,
};
function Faqs() {
  const classes= useStyles()
  return (
    <Box width="80%">
    <Grid container spacing={3}>
     <Grid item sm={12} md={12} lg={12}>
<Box mt={20} fontWeight="fontWeightBold" textAlign="start" >
Currency Converter FAQs
</Box>
<Box  mt={2} color="#636363" textAlign="start">
This article contains the most frequently asked questions about our<br/>
Auto Currency Converter app:
</Box>
</Grid>
<Grid container>
<Grid item sm={12} md={12} lg={12}>
<Box  borderRadius={16} {...defaultProps} mt={10} width="100%">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreicon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <Box margin={0} borderRadius={16} fontWeight="fontWeightBold" bgcolor="#372388" color="#ffffff"  p={0} className={classes.column3} textAlign="center" >
            1
          </Box>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Chip label="Barbados" onDelete={() => {}} />
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions>
      </Accordion>
      </Box>
      </Grid>
      </Grid>
      </Grid>
</Box>
  )
}

export default Faqs

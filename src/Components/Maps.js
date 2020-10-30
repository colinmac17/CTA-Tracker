import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TrainIcon from '@material-ui/icons/Train';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
  

  function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Train Maps" icon={<TrainIcon />} {...a11yProps(0)} />
            <Tab label="Bus Maps" icon={<DirectionsBusIcon />} {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <Link href="https://www.transitchicago.com/redline/#map">
                                        RedLine
                    </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Link href="https://www.transitchicago.com/blueline/#map">
                                        BlueLine
                    </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Link href="https://www.transitchicago.com/brownline/#map">
                                        BrownLine
                    </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Link href="https://www.transitchicago.com/greenline/#map">
                                        GreenLine
                    </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Link href="https://www.transitchicago.com/pinkline/#map">
                                        PinkLine
                    </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Link href="https://www.transitchicago.com/purpleline/#map">
                                        PurpleLine
                    </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Link href="https://www.transitchicago.com/yellowline/#map">
                                        YellowLine
                    </Link>
                </ListItem>
            </List>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <Link href="https://www.transitchicago.com/assets/1/6/stoplist_1.htm">
                                        1
                    </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Link href="https://www.transitchicago.com/assets/1/6/stoplist_3.htm">
                                        3
                    </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Link href="https://www.transitchicago.com/assets/1/6/stoplist_4.htm">
                                        4
                    </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Link href="https://www.transitchicago.com/assets/1/6/stoplist_J14.htm">
                                        J14
                    </Link>
                </ListItem>
            </List>
        </TabPanel>
      </div>
    );
  }

  const Maps = (props) => {
    return(
            <div>
                <ScrollableTabsButtonForce/>              
            </div>
    )
}

export default Maps;
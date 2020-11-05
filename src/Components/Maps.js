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

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// const dataCategories = [
//   { categoryName: "Beverages", categoryId: 1 },
//   { categoryName: "Condiments", categoryId: 2 },
//   { categoryName: "Seafood", categoryId: 3 }
// ];

// const dataProducts = [
//   { productName: "Chai", productId: 1, categoryId: "Beverages" },
//   { productName: "Chang", productId: 2, categoryId: "Beverages" },
//   { productName: "Aniseed Syrup", productId: 3, categoryId: "Condiments" },
//   { productName: "Genen Shouyu", productId: 4, categoryId: "Condiments" },
//   { productName: "Ikura", productId: 5, categoryId: "Seafood" },
//   { productName: "Konbu", productId: 6, categoryId: "Seafood" }
// ];

const dataCategories = [
  { categoryName: "Train"},
  { categoryName: "Bus"}
];
const dataLines = [
  { name: "Red Line", lineId: 1, linename: "redline", categoryName: "Train" },
  { name: "Blue Line", lineId: 2, linename: "blueline", categoryName: "Train" },
  { name: "Brown Line", lineId: 3, linename: "brownline", categoryName: "Train" },
  { name: "Green Line", lineId: 4, linename: "greenline", categoryName: "Train" },
  { name: "Orange Line", lineId: 5,linename: "orangeline", categoryName: "Train" },
  { name: "Pink Line", lineId: 6, linename: "pinkline", categoryName: "Train" },
  { name: "Purple Line", lineId: 7, linename: "purpleline", categoryName: "Train" },
  { name: "Yellow Line", lineId: 8, linename: "yellowline", categoryName: "Train" },
  { name: "1", numId: 1, categoryName: "Bus" },
  { name: "3", numId: 2, categoryName: "Bus" },
  { name: "4", numId: 3, categoryName: "Bus" },
  { name: "12", numId: 4, categoryName: "Bus" },
  { name: "J14", numId: 5, categoryName: "Bus" },
  { name: "15", numId: 6, categoryName: "Bus" },
  { name: "22", numId: 7, categoryName: "Bus" },
  { name: "24", numId: 8, categoryName: "Bus" },
  { name: "26", numId: 9, categoryName: "Bus" },
  { name: "36", numId: 10, categoryName: "Bus" },
  { name: "37", numId: 11, categoryName: "Bus" },
  { name: "52", numId: 12, categoryName: "Bus" },
  { name: "65", numId: 13, categoryName: "Bus" },
  { name: "78", numId: 14, categoryName: "Bus" },
  { name: "88", numId: 15, categoryName: "Bus" },
  { name: "90", numId: 16, categoryName: "Bus" },
  { name: "95", numId: 17, categoryName: "Bus" },
  { name: "96", numId: 18, categoryName: "Bus" },
  { name: "100", numId: 19, categoryName: "Bus" },
  { name: "115", numId: 20, categoryName: "Bus" },
  { name: "125", numId: 21, categoryName: "Bus" },
  { name: "126", numId: 22, categoryName: "Bus" },
  { name: "143", numId: 23, categoryName: "Bus" },
  { name: "147", numId: 24, categoryName: "Bus" },
  { name: "151", numId: 25, categoryName: "Bus" },
  { name: "152", numId: 26, categoryName: "Bus" },
  { name: "155", numId: 27, categoryName: "Bus" },
];



class MapComponent extends React.Component {
  constructor(props){
    super(props);
      this.state = {
          category: [],
          take: [],
          takes: []
      }
      this.categoryChange = this.categoryChange.bind(this);
      this.takeChange = this.takeChange.bind(this);
  };

  categoryChange(event){
      const category = event.target.value;
      const takes = dataLines.filter(take => take.categoryName === category);

      this.setState({category: category});
      this.setState({takes: takes});   
  }

  takeChange = (event) => {
    this.setState({take: event.target.value});
}


render() {
  const category = this.state.category;
  const take = this.state.take;
  const hasCategory = category.length != 0;

  return (
      <div>
          <div style={{ display: 'inline-block' }}>
              Categories
              <br />
              <select placeholder="Category" data={dataCategories} value={this.state.category} onChange={this.categoryChange}>
                <option>--Choose Category--</option>
                {dataCategories.map((e, key) => {
                  return <option key={key}>{e.categoryName}</option>;
                })}
              </select>
          </div>
          <div style={{ display: 'inline-block', marginLeft: '30px' }}>
              Takes
              <br />
              <select placeholder="Take" disabled={!hasCategory} data={this.state.takes} value={this.state.take} onChange={this.takeChange}>
                <option>--Choose Take--</option>
                {this.state.takes.map((e, key) => {
                  return <option key={key}>{e.name}</option>;
                })}
              </select>
          </div>
      </div>
  );
}
}
// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`scrollable-force-tabpanel-${index}`}
//         aria-labelledby={`scrollable-force-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box p={3}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }
  
//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };
  
//   function a11yProps(index) {
//     return {
//       id: `scrollable-force-tab-${index}`,
//       'aria-controls': `scrollable-force-tabpanel-${index}`,
//     };
//   }
  
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//       width: '100%',
//       backgroundColor: theme.palette.background.paper,
//     },
//   }));
  

//   function ScrollableTabsButtonForce() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);
  
//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
  
//     return (
//       <div className={classes.root}>
//         <AppBar position="static" color="default">
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             variant="scrollable"
//             scrollButtons="on"
//             indicatorColor="primary"
//             textColor="primary"
//             aria-label="scrollable force tabs example"
//           >
//             <Tab label="Train Maps" icon={<TrainIcon />} {...a11yProps(0)} />
//             <Tab label="Bus Maps" icon={<DirectionsBusIcon />} {...a11yProps(1)} />
//           </Tabs>
//         </AppBar>
//         <TabPanel value={value} index={0}>
//             <List className={classes.root}>
//                 <ListItem alignItems="flex-start">
//                     <Link href="https://www.transitchicago.com/redline/#map">
//                                         RedLine
//                     </Link>
//                 </ListItem>
//                 <ListItem alignItems="flex-start">
//                     <Link href="https://www.transitchicago.com/blueline/#map">
//                                         BlueLine
//                     </Link>
//                 </ListItem>
//                 <ListItem alignItems="flex-start">
//                     <Link href="https://www.transitchicago.com/brownline/#map">
//                                         BrownLine
//                     </Link>
//                 </ListItem>
//                 <ListItem alignItems="flex-start">
//                     <Link href="https://www.transitchicago.com/greenline/#map">
//                                         GreenLine
//                     </Link>
//                 </ListItem>
//                 <ListItem alignItems="flex-start">
//                     <Link href="https://www.transitchicago.com/pinkline/#map">
//                                         PinkLine
//                     </Link>
//                 </ListItem>
//                 <ListItem alignItems="flex-start">
//                     <Link href="https://www.transitchicago.com/purpleline/#map">
//                                         PurpleLine
//                     </Link>
//                 </ListItem>
//                 <ListItem alignItems="flex-start">
//                     <Link href="https://www.transitchicago.com/yellowline/#map">
//                                         YellowLine
//                     </Link>
//                 </ListItem>
//             </List>
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//             <List className={classes.root}>
//                 <ListItem alignItems="flex-start">
//                     <Link href="https://www.transitchicago.com/assets/1/6/stoplist_1.htm">
//                                         1
//                     </Link>
//                 </ListItem>
//                 <ListItem alignItems="flex-start">
//                     <Link href="https://www.transitchicago.com/assets/1/6/stoplist_3.htm">
//                                         3
//                     </Link>
//                 </ListItem>
//                 <ListItem alignItems="flex-start">
//                     <Link href="https://www.transitchicago.com/assets/1/6/stoplist_4.htm">
//                                         4
//                     </Link>
//                 </ListItem>
//                 <ListItem alignItems="flex-start">
//                     <Link href="https://www.transitchicago.com/assets/1/6/stoplist_J14.htm">
//                                         J14
//                     </Link>
//                 </ListItem>
//             </List>
//         </TabPanel>
//       </div>
//     );
//   }

  const Maps = (props) => {
    return(
            <div>
                <MapComponent/>              
            </div>
    )
}

export default Maps;
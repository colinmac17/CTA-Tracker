import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { HomeOutlined, DirectionsBus, Train, Map, Star, WbSunny, Info } from '@material-ui/icons';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#00378f',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  links: {
      textDecoration: 'none',
      color: 'black',
  },
  pushDown: {
      marginTop: '10rem',
  }
}));

export function Nav(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const icons = [<HomeOutlined />, <DirectionsBus />, <Train/>, <Map/>, <Star/>, <WbSunny/>, <Info/>];
  const navLinks = ['', 'bus-eta', 'train-eta','maps','favorites','weather','about'];

  const drawer = (
    <div className={classes.pushDown}>
      <List>
        {['Home', 'Bus ETA', 'Train ETA', 'Maps', 'Favorites', 'Weather', 'About'].map((text, index) => (
        <Link className={classes.links} to={`/${navLinks[index]}`} key={text}>
          <ListItem button>
            <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            CTA & Bus Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}


// const useStyles = makeStyles((theme) => ({
//     nav: {
//         padding: '1rem',
//         backgroundColor: '#d2d6dc',
//         color: '#000',
//         height: '100vh',
//         //Make sure to set height to auto on mobile view
//         [theme.breakpoints.down('sm')]: {
//             height: 'auto',
//         },
//     },
//     litem: {
//         display: 'block',
//         marginTop: '12px',
//         fontSize: '1.15rem',
//     },
//     licon: {
//         display: 'inline-block',
//     },
//     link: {
//         color: '#3f51b5',
//         textDecoration: 'none',
//         display: 'inline-block',
//         marginLeft: '3px',
//     },
//     list: {
//         listStyleType: 'none',
//         textAlign: 'left',
//     },
//     title: {
//         fontSize: '1.75rem',
//         textAlign: 'left',
//         fontWeight: '700',
//     },
//   }))

// export function Nav() {
//     const classes = useStyles();
//     return (
//         <Container className={classes.nav}>
//             <ul className={classes.list}>
//                 <li className={classes.litem}>
//                     <h1 className={classes.title}>CTA Tracker</h1>
//                 </li>
//                 <li className={classes.litem}>
//                     <span className={classes.licon}>
//                         <HomeOutlined color="primary" />
//                     </span>
//                     <Link to="/" className={classes.link}>
//                         Home
//                     </Link>
//                 </li>
//                 <li className={classes.litem}>
//                     <span className={classes.licon}>
//                         <DirectionsBus color="primary" />
//                     </span>
//                     <Link to="/bus-eta" className={classes.link}>
//                        Bus ETA
//                     </Link>
//                 </li>
//                 <li className={classes.litem}>
//                     <span className={classes.licon}>
//                         <Train color="primary" />
//                     </span>
//                     <Link to="/train-eta" className={classes.link}>
//                        Train ETA
//                     </Link>
//                 </li>
//                 <li className={classes.litem}>
//                     <span className={classes.licon}>
//                         <Map color="primary"/>
//                     </span>
//                     <Link to="/maps" className={classes.link}>
//                        Maps
//                     </Link>
//                 </li>
//                 <li className={classes.litem}>
//                     <span className={classes.licon}>
//                         <Star color="primary"/>
//                     </span>
//                     <Link to="/favorites" className={classes.link}>
//                        Favorites
//                     </Link>
//                 </li>
//                 <li className={classes.litem}>
//                     <span className={classes.licon}>
//                         <WbSunny color="primary" />
//                     </span>
//                     <Link to="/weather" className={classes.link}>
//                        Weather
//                     </Link>
//                 </li>
//                 <li className={classes.litem}>
//                     <span className={classes.licon}>
//                         <Info color="primary" />
//                     </span>
//                     <Link to="/about" className={classes.link}>
//                        About
//                     </Link>
//                 </li>
//             </ul>
//         </Container>
//     );
// }

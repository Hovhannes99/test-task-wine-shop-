import React, {useContext, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Home from "../body/Home";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Theme, withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton';
import {Store} from "../../App";
import {
    Popover,
    Typography
} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';
import SimpleMenu from "./OpenMenuButton";


const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            right: 1,
            top: 1,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }),
)(Badge);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            width: "300px",
            maxHeight:"300px",
            padding: theme.spacing(2),
        },
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
    }),
);



export default function  Header(){
    const matches = useMediaQuery('(min-width:1000px)')
    const [checked, setChecked] = React.useState([1]);
    const {winesInCart}: any = useContext(Store)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;





    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(winesInCart.length){
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return(
            <Router>
                <header className="header">
                    <div className="header__name">
                        <div className="header__logo">
                        </div>
                        <div>
                            <p className="header__site-title-big">Vite Nera</p>
                            <p className="header__site-title-small">Passion for Exellence</p>
                        </div>
                    </div>
                    {matches?<div className="nav">
                        <NavLink className="nav__links" to="/" activeStyle={{color: "orange"}}>Home</NavLink>
                        <div className="nav__links">Shop <ExpandMoreIcon style={{fontSize: "medium"}}/></div>
                        <NavLink className="nav__links" to="/blog">Blog</NavLink>
                        <NavLink className="nav__links" to="/about">About Us</NavLink>
                        <NavLink className="nav__links" to="/contact">Contact Us</NavLink>
                        <div className="nav__links">Blocks<ExpandMoreIcon style={{fontSize: "medium"}}/></div>
                    </div>:
                        <SimpleMenu/>}
                    <div className="header-shop__icon">
                        <IconButton aria-label="cart" onClick={handleClick}>
                         <StyledBadge badgeContent={winesInCart.length} color="secondary" showZero>
                          <ShoppingCartOutlinedIcon/>
                         </StyledBadge>
                        </IconButton>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Typography className={classes.typography}>

                                    {
                                winesInCart.map((item:any , index: number)=>{

                                return(
                                    <List className={classes.root} key={index}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar variant="square"  src={item.image}/>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.name}
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            className={classes.inline}
                                                            color="textPrimary"
                                                        >
                                                        </Typography>
                                                        {item.price}
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                   )
                                })
                            }
                            </Typography>
                        </Popover>
                    </div>
               </header>
                <Switch>
                    <Route exact  path="/" component={Home}/>
                </Switch>
            </Router>

    )
}
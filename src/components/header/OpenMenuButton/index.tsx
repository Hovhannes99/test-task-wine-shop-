import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router,
    NavLink, Route, Switch} from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Home from "../../body/Home";

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><NavLink className="nav__links" to="/"
                                                             activeStyle={{color: "orange"}}>Home</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}>
                        <div className="nav__links">
                            Shop <ExpandMoreIcon style={{fontSize: "medium"}}/>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}> <NavLink className="nav__links"
                                                              to="/blog">Blog</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}> <NavLink className="nav__links" to="/about">About
                        Us</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink className="nav__links" to="/contact">Contact
                        Us</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}>
                        <div className="nav__links">Blocks<ExpandMoreIcon style={{fontSize: "medium"}}/></div>
                    </MenuItem>
                </Menu>
        </div>

    );
}

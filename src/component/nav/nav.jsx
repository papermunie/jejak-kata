import './nav.css'
import { useState } from "react";
import * as React from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineFile} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse} from "@mui/material";
import { Box } from "@mui/material";

const array = [
      <ul>
       <li><Link to='/'> <AiOutlineHome className='object'/> Home</Link></li>
       <li><Link to='/about'> <AiOutlineUser className='object'/> About</Link></li>
       <li><Link to='/experience'> <BiBook className='object'/> Experience</Link></li>
       <li><Link to='/portfolio'> <AiOutlineFile className='object'/> Portfolio</Link></li>
       <li><Link to='/contact'> <BsTelephone className='object'/> Contact</Link></li>
      </ul>
];

const Nav = () => {
  const [open, setOpen] = useState(false);
    return (
      <Box>
        <List>
        <ListItem divider> 
          <ListItemButton onClick={() => setOpen (true)}>
            <ListItemIcon>{">"}</ListItemIcon>
            <ListItemText primary={"Click Me"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={open}>
      <List sx={{marginLeft: 0}}>
        {array.map((listElm) => (
          <ListItem divider>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={listElm} 
              />
              </ListItemButton>
              </ListItem>
        ))}

        </List>
      </Collapse>
        </Box>)
}

export default Nav
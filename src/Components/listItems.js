import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/" className="links">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/projects" className="links">
      <ListItemIcon>
        <AccountTreeIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button component={Link} to="/about" className="links">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItem>

    <ListItem button component={Link} to="/contact" className="links">
      <ListItemIcon>
        <ImportContactsIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Social Media</ListSubheader>
    <ListItem
      button
      component="a"
      href="https://www.facebook.com/arduinohellas"
    >
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>
      <ListItemText primary="Facebook" />
    </ListItem>

    <ListItem
      button
      component="a"
      href="https://www.instagram.com/panagiotis_papazisiss/"
    >
      <ListItemIcon>
        <InstagramIcon />
      </ListItemIcon>
      <ListItemText primary="Instagram" />
    </ListItem>

    <ListItem
      button
      component="a"
      href="https://github.com/panagiotispapazisis"
    >
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemText primary="Github" />
    </ListItem>
  </div>
);

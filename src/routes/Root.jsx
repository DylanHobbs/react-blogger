import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useLoaderData, useOutlet } from "react-router-dom";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Root.css";
import Default from "./Default";

const drawerWidth = 320;

function Root(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const posts = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const outlet = useOutlet();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="sidebar">
      <Toolbar sx={{ justifyContent: "center" }}>
        <input
          id="postSearch"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </Toolbar>
      <Divider />
      <List>
        {posts
          .filter((post) => {
            if (searchTerm === "") {
              return post;
            } else if (
              post.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post) => (
            <>
              <NavLink
                onClick={() => handleDrawerToggle()}
                to={`post/${post.slug}`}
              >
                <ListItem key={post.slug} disablePadding>
                  {post.title ? <>{post.title}</> : <i>Untitled</i>}{" "}
                </ListItem>
              </NavLink>
            </>
          ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        color="inherit"
        position="fixed"
        sx={{
          backgroundColor: { md: 'transparent' },
          boxShadow: "0px 0px",
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, boxShadow: "0px 0px" }}
          >
            <MenuIcon style={{ backgroundColor: "white" }} fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexGrow: 1,
          p: 3,
          width: "100%",
        }}
      >
        <div id="detail">
          {/* <Outlet /> */}
          {outlet || <Default></Default>}
        </div>
      </Box>
    </Box>
  );
}

export default Root;

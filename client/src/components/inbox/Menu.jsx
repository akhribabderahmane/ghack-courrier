import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { BsPersonFillUp } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import Badge from '@mui/material/Badge'
import { colors } from "@mui/material";
import { Link } from "react-router-dom";
const Menu = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const messages=[112,25,53,6,14,4];
  return (
    <div>
      <List
        sx={{ width: "260px", maxWidth: 360, bgcolor: "transparent" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ bgcolor: "transparent",position:"auto" }}
          >
            Me
          </ListSubheader>
        }
      >
        <Link to="inboxes">
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
           <Badge badgeContent={messages[0]} color="error">
            <InboxIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Inbox"/>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        </Link>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
              <Badge badgeContent={messages[1]} color="error">
                <BsPersonFillUp className=" scale-[1.5]"/>
              </Badge>
              </ListItemIcon>
              <ListItemText primary="Assigned to me" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
              <Badge badgeContent={messages[2]} color="error">
                <MdGroup className=" scale-[1.5]" />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Shared with me" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
              <Badge badgeContent={messages[3]} color="error">
                <AiOutlineMessage  className=" scale-[1.5]" />
              </Badge>
              </ListItemIcon>
              <ListItemText primary="Discussions" />
            </ListItemButton>
          </List>
        </Collapse>
        <Link to="starred">
        <ListItemButton>
          <ListItemIcon>
          <Badge badgeContent={messages[4]} color="error">
            <StarBorder />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="starred" />
        </ListItemButton>
        </Link>

        <Link to="draft">
        <ListItemButton>
          <ListItemIcon>
          <Badge badgeContent={messages[5]} color="error">
            <DraftsIcon />
          </Badge>
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        </Link>
        <Link to="sent" >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent" style={{ fontSize: '2px' }}/>
        </ListItemButton>
        </Link>
      </List>
    </div>
  );
};

export default Menu;

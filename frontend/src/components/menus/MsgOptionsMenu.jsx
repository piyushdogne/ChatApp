import { Delete, Edit, Forward } from "@mui/icons-material";
import ShortcutIcon from '@mui/icons-material/Shortcut';
import { ListItemIcon, MenuItem } from "@mui/material";
import Menu, { menuIconProps, menuItemProps } from "../utils/Menu";
import MenuItemText from "../utils/MenuItemText";

const MsgOptionsMenu = ({
  anchor,
  setAnchor,
  editMsgHandler,
  openDeleteMsgConfirmDialog,
  forwardHandler
}) => {
  return (
    <Menu
      menuAnchor={anchor}
      setMenuAnchor={setAnchor}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      {/* <MenuItem sx={menuItemProps} onClick={editMsgHandler}>
        <ListItemIcon sx={menuIconProps}>
          <Edit />
        </ListItemIcon>
        <MenuItemText>Edit Message</MenuItemText>
      </MenuItem>
      <MenuItem sx={menuItemProps} onClick={openDeleteMsgConfirmDialog}>
        <ListItemIcon sx={menuIconProps}>
          <Delete />
        </ListItemIcon>
        <MenuItemText>Delete Message</MenuItemText>
      </MenuItem> */}
      <MenuItem sx={menuItemProps} onClick={forwardHandler}>
        <ListItemIcon sx={menuIconProps}>
          <ShortcutIcon />
        </ListItemIcon>
        <MenuItemText>Forward</MenuItemText>
      </MenuItem>
    </Menu>
    
  );
};

export default MsgOptionsMenu;

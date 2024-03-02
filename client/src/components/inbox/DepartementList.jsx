import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { departements } from '../../data/departements';
import { colors } from '@mui/material';

export default function DepartementList() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
 console.log(checked)
  return (
    <List sx={{ width: '90%', maxWidth: 360, bgcolor:colors.amber,pl:4}}>
      {departements.map((departement) => {
        const labelId = `checkbox-list-label-${departement.value}`;

        return (
          <ListItem
            key={departement.id}
            // secondaryAction={
            //   <IconButton edge="end" aria-label="comments">
            //     <CommentIcon />
            //   </IconButton>
            // }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(departement)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(departement) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  sx={{color:departement.color, '&.Mui-checked': {
                    color: departement.color,
                  },}}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={` ${departement.value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

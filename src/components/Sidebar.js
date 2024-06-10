import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  const items = ['Dashboard', 'Storage', 'Collection', 'Collaboration', 'Analytics', 'Trash', 'Settings'];

  return (
    <div style={{ width: '200px', background: '#2D5B57', color: 'white', height: '100vh', paddingTop: '20px' }}>
      <List>
        {items.map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;

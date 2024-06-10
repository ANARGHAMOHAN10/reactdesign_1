import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, LinearProgress } from '@mui/material';

const Revenue = () => {
  const projects = [
    { name: 'WhimsyWorks', size: '14.2gb', due: '23/12/2023', cost: '€223,000.00' },
    { name: 'DoodleVerse', size: '123.9gb', due: '01/09/2023', cost: '€13,000.00' },
  ];

  return (
    <Box padding="20px" width="50%">
      <Typography variant="h6">Revenue</Typography>
      <Typography variant="h4">Memory Usage</Typography>
      <Box display="flex" alignItems="center" marginY="20px">
        <Typography variant="h5" style={{ marginRight: '10px' }}>57,2trb</Typography>
        <LinearProgress variant="determinate" value={57.2} style={{ flex: 1, height: '10px' }} />
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Time Due</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.size}</TableCell>
              <TableCell>{project.due}</TableCell>
              <TableCell>{project.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default Revenue;

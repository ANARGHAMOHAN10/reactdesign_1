import React from 'react';
import { Box, Typography, LinearProgress, Avatar, Grid, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const TeamActivity = () => {
  const teams = [
    { name: 'WhimsyWorks', progress: 70, members: 12, color: '#2D5B57' },
    { name: 'DoodleVerse', progress: 50, members: 8, color: '#F7E701' },
    { name: 'SparkleCraft', progress: 20, members: 5, color: '#9E9E9E' },
    { name: 'WonderWave', progress: 90, members: 10, color: '#000000' },
  ];

  return (
    <Box padding="20px" width="50%">
      <Typography variant="h6">Team Activity</Typography>
      {teams.map((team, index) => (
        <Box key={index} marginY="10px">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={2}>
              <Avatar style={{ backgroundColor: team.color }}>{team.name[0]}</Avatar>
            </Grid>
            <Grid item xs={8}>
              <Typography>{team.name}</Typography>
              <LinearProgress variant="determinate" value={team.progress} />
            </Grid>
            <Grid item xs={2} style={{ textAlign: 'center' }}>
              <IconButton><AddCircleIcon /></IconButton>
              <Typography>{team.members}</Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default TeamActivity;

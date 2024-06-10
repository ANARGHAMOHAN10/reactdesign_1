import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const MetricCard = ({ icon, label, value, total, used, available }) => (
  <Card style={{ background: '#4A7469', color: 'white', margin: '10px' }}>
    <CardContent>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {icon}
        <Typography variant="h5" style={{ marginLeft: '10px' }}>{value}</Typography>
      </div>
      <Typography>{label}</Typography>
      <Typography>Total: {total}gb</Typography>
      <Typography>Used: {used}gb</Typography>
      <Typography>Available: {available}gb</Typography>
    </CardContent>
  </Card>
);

const MainMetrics = () => {
  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      <Grid item xs={12} md={4}>
        <MetricCard icon={<PhotoIcon />} label="Pictures" value="6455" total="100" used="43" available="57" />
      </Grid>
      <Grid item xs={12} md={4}>
        <MetricCard icon={<VideoLibraryIcon />} label="Videos" value="3221" total="100" used="43" available="57" />
      </Grid>
      <Grid item xs={12} md={4}>
        <MetricCard icon={<MusicNoteIcon />} label="Sounds" value="1443" total="100" used="43" available="57" />
      </Grid>
    </Grid>
  );
}

export default MainMetrics;

import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Chip } from '@material-ui/core';

export default function ProjectCard({ project }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'green';
      case 'In Progress': return 'blue';
      case 'Planning': return 'orange';
      default: return 'gray';
    }
  };

  return (
    <Card style={{ margin: '16px 0' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {project.name}
        </Typography>
        <Typography color="textSecondary">
          {project.description}
        </Typography>
        <div style={{ margin: '8px 0' }}>
          <Chip 
            label={project.status}
            style={{ 
              backgroundColor: getStatusColor(project.status),
              color: 'white',
              marginRight: '8px'
            }}
          />
          <Chip label={`Due: ${project.deadline}`} variant="outlined" />
        </div>
        <Typography variant="body2" style={{ marginTop: '8px' }}>
          Team: {project.team.join(', ')}
        </Typography>
        <div style={{ marginTop: '16px' }}>
          <Typography variant="body2">
            Progress: {project.progress}%
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={project.progress}
            style={{ marginTop: '4px' }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
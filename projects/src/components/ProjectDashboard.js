import React from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import { mockProjects } from '../data/mockProjects';
import ProjectCard from './ProjectCard';

export default function ProjectDashboard() {
  return (
    <Container>
      <Paper style={{ padding: '24px', marginTop: '24px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Project Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {mockProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
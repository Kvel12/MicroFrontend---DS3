import React from 'react';
import { CircularProgress, Box } from '@material-ui/core';

export const Loading = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
    <CircularProgress />
  </Box>
);
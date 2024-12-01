import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Paper,
  Tabs,
  Tab,
  Box,
  TextField,
  InputAdornment
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { mockTickets } from '../data/mockTickets';
import TicketCard from './TicketCard';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default function SupportDashboard() {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const filteredTickets = mockTickets.filter(ticket => 
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openTickets = filteredTickets.filter(ticket => ticket.status === 'Open');
  const inProgressTickets = filteredTickets.filter(ticket => ticket.status === 'In Progress');
  const resolvedTickets = filteredTickets.filter(ticket => ticket.status === 'Resolved');

  return (
    <Container>
      <Paper style={{ padding: '24px', marginTop: '24px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Support Tickets
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search tickets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          style={{ marginBottom: '16px' }}
        />
        
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="All Tickets" />
          <Tab label={`Open (${openTickets.length})`} />
          <Tab label={`In Progress (${inProgressTickets.length})`} />
          <Tab label={`Resolved (${resolvedTickets.length})`} />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          {filteredTickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          {openTickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          {inProgressTickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          {resolvedTickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </TabPanel>
      </Paper>
    </Container>
  );
}
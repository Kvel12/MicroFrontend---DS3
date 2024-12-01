import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Paper,
  Tabs,
  Tab,
  Box
} from '@material-ui/core';
import { mockInvoices } from '../data/mockPayments';
import PaymentCard from './PaymentCard';

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

export default function PaymentDashboard() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const pendingInvoices = mockInvoices.filter(inv => inv.status === 'Pending');
  const paidInvoices = mockInvoices.filter(inv => inv.status === 'Paid');
  const overdueInvoices = mockInvoices.filter(inv => inv.status === 'Overdue');

  return (
    <Container>
      <Paper style={{ padding: '24px', marginTop: '24px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Payments & Invoices
        </Typography>
        
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="All" />
          <Tab label={`Pending (${pendingInvoices.length})`} />
          <Tab label={`Paid (${paidInvoices.length})`} />
          <Tab label={`Overdue (${overdueInvoices.length})`} />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {mockInvoices.map(invoice => (
                <PaymentCard key={invoice.id} invoice={invoice} />
              ))}
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {pendingInvoices.map(invoice => (
                <PaymentCard key={invoice.id} invoice={invoice} />
              ))}
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {paidInvoices.map(invoice => (
                <PaymentCard key={invoice.id} invoice={invoice} />
              ))}
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {overdueInvoices.map(invoice => (
                <PaymentCard key={invoice.id} invoice={invoice} />
              ))}
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </Container>
  );
}
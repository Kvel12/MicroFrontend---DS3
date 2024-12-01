import React from 'react';
import { Card, CardContent, Typography, Chip, Button } from '@material-ui/core';
import { AttachMoney, Warning, CheckCircle } from '@material-ui/icons';

export default function PaymentCard({ invoice }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Paid': return 'success';
      case 'Pending': return 'warning';
      case 'Overdue': return 'error';
      default: return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Paid': return <CheckCircle />;
      case 'Pending': return <AttachMoney />;
      case 'Overdue': return <Warning />;
      default: return null;
    }
  };

  return (
    <Card style={{ margin: '16px 0' }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="h2">
            {invoice.id}
          </Typography>
          <Chip 
            icon={getStatusIcon(invoice.status)}
            label={invoice.status}
            color={getStatusColor(invoice.status)}
          />
        </div>
        <Typography color="textSecondary" gutterBottom>
          Project: {invoice.projectName}
        </Typography>
        <Typography variant="body1">
          Client: {invoice.client}
        </Typography>
        <Typography variant="h6" style={{ marginTop: '8px' }}>
          Amount: ${invoice.amount.toLocaleString()}
        </Typography>
        <Typography color="textSecondary">
          Due Date: {invoice.dueDate}
        </Typography>
        {invoice.paymentDate && (
          <Typography color="textSecondary">
            Paid on: {invoice.paymentDate}
          </Typography>
        )}
        {invoice.status !== 'Paid' && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<AttachMoney />}
            style={{ marginTop: '16px' }}
          >
            Process Payment
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
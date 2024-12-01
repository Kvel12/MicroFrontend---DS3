import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar
} from '@material-ui/core';
import { 
  ErrorOutline, 
  CheckCircle, 
  Timer,
  PriorityHigh 
} from '@material-ui/icons';

export default function TicketCard({ ticket }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Open': return 'error';
      case 'In Progress': return 'warning';
      case 'Resolved': return 'success';
      default: return 'default';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return '#ff1744';
      case 'High': return '#ff9100';
      case 'Medium': return '#ffeb3b';
      case 'Low': return '#69f0ae';
      default: return 'grey';
    }
  };

  return (
    <Card style={{ margin: '16px 0' }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">
            {ticket.id}: {ticket.title}
          </Typography>
          <div>
            <Chip 
              icon={<PriorityHigh />}
              label={ticket.priority}
              style={{ 
                backgroundColor: getPriorityColor(ticket.priority),
                color: 'white',
                marginRight: '8px'
              }}
            />
            <Chip 
              icon={ticket.status === 'Resolved' ? <CheckCircle /> : <Timer />}
              label={ticket.status}
              color={getStatusColor(ticket.status)}
            />
          </div>
        </div>

        <Typography color="textSecondary" gutterBottom>
          Project: {ticket.projectName}
        </Typography>
        
        <Typography variant="body1" style={{ marginTop: '16px' }}>
          {ticket.description}
        </Typography>

        <Typography variant="body2" style={{ marginTop: '8px' }}>
          Assigned to: {ticket.assignedTo}
        </Typography>

        <Divider style={{ margin: '16px 0' }} />

        <Typography variant="h6">Comments</Typography>
        <List>
          {ticket.comments.map((comment) => (
            <ListItem key={comment.id}>
              <ListItemText
                primary={
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle2">{comment.author}</Typography>
                    <Typography variant="caption">{comment.timestamp}</Typography>
                  </div>
                }
                secondary={comment.text}
              />
            </ListItem>
          ))}
        </List>

        {ticket.status !== 'Resolved' && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Add Comment
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
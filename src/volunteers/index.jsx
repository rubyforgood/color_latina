import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const volunteerArray = [
  {
    name: 'Jane Doe',
    telephone: '123-456-7890',
    email: 'janeDoe.gmail.com',
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    name: 'Lisa Doe',
    telephone: '123-456-7890',
    email: 'johnDoe.gmail.com',
    tags: ['tag1', 'tag2', 'tag3'],
  },  
  {
    name: 'James Doe',
    telephone: '123-456-7890',
    email: 'janeDoe.gmail.com',
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    name: 'Eric Doe',
    telephone: '123-456-7890',
    email: 'johnDoe.gmail.com',
    tags: ['tag1', 'tag2', 'tag3'],
  },  
]

const Volunteer = () => {
    return (
        <div>
            <h1>Volunteer</h1>
            <Box sx={{ minWidth: 275 }}>
                {volunteerArray.map((volunteer) => (
                    <Card sx={{ minWidth: 275 }} key={volunteer.name}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {volunteer.name}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {volunteer.telephone}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {volunteer.email}
                            </Typography>
                            <Typography variant="body2">
                                {volunteer.tags}
                            </Typography>
                        </CardContent>
                  </Card>
                ))}
            </Box>
        </div>
    );
}

export default Volunteer;
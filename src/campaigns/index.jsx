import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const campaigns = [
  {
    id: 1,
    name: 'Campaign 1',
    description: 'This is the first campaign',
    status: 'active',
    created_at: '2021-09-01',
    updated_at: '2021-09-01',
  },
  {
    id: 2,
    name: 'Campaign 2',
    description: 'This is the second campaign',
    status: 'active',
    created_at: '2021-09-01',
    updated_at: '2021-09-01',
  },
  {
    id: 3,
    name: 'Campaign 3',
    description: 'This is the third campaign',
    status: 'active',
    created_at: '2021-09-01',
    updated_at: '2021-09-01',
  },
]

const Campaign = () => {
    return (
      <Box
      className="campaignContainer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        padding: '16px',
      }}
    >   
      {campaigns.map((campaign) => ( 
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {campaign.name}
            </Typography>
            <Typography variant="body2">
              {campaign.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
      </Card>
      ))}
      </Box>
    );
}


export default Campaign
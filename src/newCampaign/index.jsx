import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const volunteers = [
  { id: 1, name: 'Volunteer 1' },
  { id: 2, name: 'Volunteer 2' },
  { id: 3, name: 'Volunteer 3' },
];

const admins = [
  { id: 1, name: 'Admin 1' },
  { id: 2, name: 'Admin 2' },
  { id: 3, name: 'Admin 3' },
];

const NewCampaign = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const callBackend = () => {
    fetch('https://072d-63-211-238-146.ngrok-free.app/api/v1/campaigns/1/messages/send_to_campaign_volunteers?message_id=1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        })
  };  

  return (

    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>New Campaign</h1>
      <TextField label="To" type="number" />

      <Autocomplete
        options={volunteers}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Select Volunteers" />}
      />

      <Autocomplete
        options={admins}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Add from Admin" />}
      />

      <TextField
        label="Message"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button type="submit" variant="contained" onClick={callBackend}>
        Send
      </Button>
    </Box>
  );
};

export default NewCampaign;
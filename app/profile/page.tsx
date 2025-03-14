"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { Button, Card, CardContent, Typography, Stack, Box, Paper } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Profile() {
  return (
    <div>
      <main>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', p:2 }}>
      <Avatar sx={{ width: 75, height: 75, margin: 2 }}alt="User Profile Picture" src="/static/images/avatar/1.jpg" />
      <Typography variant="h3" align="center">Name's Profile</Typography>
      </Stack>
      <Stack spacing={3} direction="row" sx={{ alignItems: 'center', paddingBottom:10, paddingLeft:13.8, paddingTop:0 }}>
      <Typography variant="h5" align="center" gutterBottom>User ID:</Typography>
      <Typography variant="h5" align="center" gutterBottom>Email:</Typography>
      </Stack>

    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
    <Typography variant="h3" align="left" gutterBottom>Habits</Typography>
      <Item sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <CheckBox></CheckBox>
          <Typography noWrap>habit 1</Typography>
        </Stack>
      </Item>
      <Item sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Stack>
            <CheckBox></CheckBox>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>habit 2</Typography>
          </Stack>
        </Stack>
      </Item>
      <Item sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <CheckBox></CheckBox>
          <Typography noWrap>habit 3</Typography>
        </Stack>
      </Item>
      <Item sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Stack>
            <CheckBox></CheckBox>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>habit 4</Typography>
          </Stack>
        </Stack>
      </Item>
    </Box>
      </main>
    </div>
  );
}



/*import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
} from '@mui/material';

interface User {
  id: string;
  name: string;
  email: string;
}

interface Habit {
  id: string;
  title: string;
  description: string;
}

const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser ] = useState<User | null>(null);
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    if (userId) {
      const fetchUser Data = async () => {
        try {
          const response = await axios.get(`/api/users/${userId}`);
          setUser (response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      const fetchUser Habits = async () => {
        try {
          const response = await axios.get(`/api/habits?userId=${userId}`);
          setHabits(response.data);
        } catch (error) {
          console.error('Error fetching user habits:', error);
        }
      };

      fetchUser Data();
      fetchUser Habits();
    }
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        {user.name}'s Profile
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Email: {user.email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Associated Habits
      </Typography>
      <Grid container spacing={2}>
        {habits.map((habit) => (
          <Grid item xs={12} sm={6} md={4} key={habit.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {habit.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {habit.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserProfile;

sx={{ margin: 2, backgroundColor: '#f5f5f5' }}*/ 





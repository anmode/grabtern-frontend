import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Input from '@mui/joy/Input';
import SendIcon from '@mui/icons-material/Send';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function OptimizedFooter() {
  // Arrays for the list items
  const studentItems = [
    'One to One Mentorship',
    'Networking',
    'Live Sessions',
    'Resources',
  ];

  const mentorItems = [
    'Community Base',
    'Self Satisfaction',
    'Build Leadership Skills',
  ];

  const legalItems = [
    'Refund Policy',
    'Terms & Conditions',
    'Privacy Policy',
    'Contact Us',
  ];

  // State for email input and validation error
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);

  // Email validation regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle email input change and validate
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!emailPattern.test(value));
  };

  return (
    <Sheet
      variant="solid"
      sx={{
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
        backgroundColor: 'white',
        color: '#6A0DAD',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {/* Left - Logo Image and Text */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card
            variant="soft"
            size="sm"
            sx={{
              minWidth: { xs: '100%', md: 'auto' },
              border: 'none',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image alt="Logo" src="/GrabternLogo.png" width={100} height={100} />
          </Card>
          <Typography level="h6" sx={{ textAlign: 'center', mt: 1 }}>
            Grabtern, Grab your internship
          </Typography>
        </Box>

        {/* Center - Sitemap and Products */}
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{
            flexGrow: 0,
            '--ListItem-radius': '8px',
            textAlign: 'center',
            width: { xs: '100%', md: 'auto' },
          }}
        >
          {/* Map Function for List Items */}
          {[{ title: 'For Students', items: studentItems }, { title: 'For Mentors', items: mentorItems }, { title: 'Legal', items: legalItems }]
            .map((section, idx) => (
              <ListItem key={idx} nested sx={{ width: { xs: '50%', md: 180 } }}>
                <ListSubheader sx={{ fontWeight: 'xl', color: 'black' }}>{section.title}</ListSubheader>
                <List>
                  {section.items.map((item, i) => (
                    <ListItem key={i}>
                      <ListItemButton sx={{ color: '#6A0DAD', '&:hover': { textDecoration: 'underline' } }}>
                        {item}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </ListItem>
            ))}
        </List>

        {/* Right - Socials and Newsletter */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            gap: 1,
            marginRight: { xs: 0, md: 10 },
          }}
        >
          {/* Newsletter Subscription */}
          <Box sx={{ mt: 1 }}>
            <Typography level="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'black' }}>
              Subscribe to our Newsletter
            </Typography>
            <Input
              variant="soft"
              placeholder="Type your email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              endDecorator={
                <IconButton
                  variant="soft"
                  aria-label="subscribe"
                  disabled={emailError || !email} // Disable button if email is invalid or empty
                >
                  <SendIcon />
                </IconButton>
              }
              sx={{ width: { xs: '100%', md: '250px' } }}
            />
            {/* Display error message if email is invalid */}
            {emailError && (
              <Typography color="danger" sx={{ mt: 1, fontSize: 'sm', color: 'red' }}>
                Please enter a valid email address.
              </Typography>
            )}
          </Box>

          {/* Socials Section */}
          {/* Socials Section */}
<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
  <Box sx={{ display: 'flex', gap: 2 }}>
    <IconButton variant="plain">
      <FacebookRoundedIcon />
    </IconButton>
    <IconButton variant="plain">
      <XIcon />
    </IconButton>
    <IconButton variant="plain">
      <InstagramIcon />
    </IconButton>
    <IconButton variant="plain">
      <LinkedInIcon />
    </IconButton>
    <IconButton
      variant="plain"
      component="a"
      href="https://github.com/anmode/grabtern-frontend"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon />
    </IconButton>
  </Box>
</Box>

        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />
    </Sheet>
  );
}

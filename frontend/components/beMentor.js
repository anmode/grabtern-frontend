import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  input: {
    display: 'none',
  },
  uploadButton: {
    marginLeft: theme.spacing(1),
  },
}));

export default function MentorForm() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    internAt: '',
    currentStatus: '',
    social: {
      linkedin: '',
      twitter: '',
    },
    description: '',
    sessionPrice: '',
    resume: null
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialChange = e => {
    setFormData({ ...formData, social: { ...formData.social, [e.target.name]: e.target.value } });
  };

  const handleFileChange = e => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // code for handling form submission
    console.log(formData);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Mentor Registration
      </Typography>
      <TextField
        required
        id="name"
        name="name"
        label="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        required
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        required
        id="mobile"
        name="mobile"
        label="Mobile"
        type="tel"
        value={formData.mobile}
        onChange={handleChange}
      />
      <TextField
        required
        id="internAt"
        name="internAt"
        label="Intern At"
        value={formData.internAt}
        onChange={handleChange}
      />
      </form>
      )
  } 
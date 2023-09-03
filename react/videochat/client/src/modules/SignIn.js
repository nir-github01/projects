import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { Stack, Button, Link } from "@mui/material";
// import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default class SignIn extends Component {
  render() {
    return (
      <div className="loginContainer">
        <div className="loginbox">
          <h3>Welcome</h3>
          <h4>Let's signin for more explore</h4>
          <form>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
              <TextField
                type="email"
                variant="outlined"
                color="secondary"
                label="Email"
                autoComplete="userName"
                value=""
                required
                sx={{ mb: 4 }}
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
              <TextField
                type="password"
                variant="outlined"
                color="secondary"
                label="current-password"
                value=""
                autoComplete="current-password"
                required
                sx={{ mb: 4 }}
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
              <FormControlLabel
                control={<Checkbox name="tc" />}
                label="Remember me"
              />
            </Stack>
            <div>
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                type="submit"
                fullWidth
              >
                LogIn
              </Button>
            </div>
            <small>
              Create new account ? <Link to="/register">Create Account</Link>
            </small>
          </form>
        </div>
      </div>
    );
  }
}

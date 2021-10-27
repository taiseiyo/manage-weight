import * as React from "react";
import {useState, useEffect} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://taiseiyo.com/"
        target="_blank"
        rel="noopener"
      >
        taiseiyo.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn(props) {
  const {setName, setPassword} = props;
  let [flag, setFlag] = useState(true);
  let [preName, setPreName] = useState("");
  let [prePassword, setPrePassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get("name"),
      password: data.get("password"),
    });
  };

  useEffect(() => {
    preName.length > 0 && prePassword.length > 0
      ? setFlag(false)
      : setFlag(true);
  }, [preName, prePassword]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Weight Manager
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              autoFocus
              autoComplete="off"
              onChange={(e) => setPreName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPrePassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}
              disabled={flag}
              onClick={(e) => {
                setName(preName);
                setPassword(prePassword);
              }}
            >
              start
            </Button>
          </Box>
        </Box>
        <Copyright sx={{mt: 8, mb: 4}} />
      </Container>
    </ThemeProvider>
  );
}

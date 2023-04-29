import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const backend = process.env.REACT_APP_BACKEND || "http://localhost:1337/";

const Succes = () => {
  const [err, setError] = useState();
  const location = useLocation();
  const provider = location.pathname.replace("/succes", "");

  fetch(`${backend}api/auth${provider}/callback${location.search}`)
    .then((resp) => resp.json())
    .then((data) => {
      if (data.error) {
        setError(data.error);
      }

      window.location = `app://succes?token=${data.jwt}`;
    });

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {err && (
        <>
          <Typography>{err.message}</Typography>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              window.location = "app://";
            }}
          >
            Return to app
          </Button>
        </>
      )}
      {/* <button
        onClick={async () => {
          fetch(
            `http://localhost:1337/api/auth/google/callback${location.search}`
          )
            .then((resp) => resp.json())
            .then((data) => {
              window.location = `app://jwt=${data.jwt}`;
            });
        }}
      >
        Click
      </button> */}
      {/* <a href={`app://?id_token=${params.getAll("id_token")}`}>Click</a> */}
      {/* {params.get("id_token")} */}
    </Container>
  );
};

export default Succes;

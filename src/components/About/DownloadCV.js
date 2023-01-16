import React, { useRef } from "react";
import { Typography } from "@mui/material";

const getBlob = async (cv, ref) => {
  const res = await fetch(cv.attributes.url);
  const blob = await res.blob();
  const url = URL.createObjectURL(new Blob([blob]));

  ref.current.href = url;
};

const DownloadCV = ({ cv }) => {
  const downloadBtn = useRef();

  getBlob(cv, downloadBtn);

  return (
    <Typography
      component="a"
      sx={{
        background: "var(--active)",
        padding: "0.95rem 0.5rem",
        borderRadius: "15px",
        fontWeight: 600,
      }}
      href="#"
      download="Razvan's WebDev CV.pdf"
      ref={downloadBtn}
    >
      Download CV
    </Typography>
  );
};

export default DownloadCV;

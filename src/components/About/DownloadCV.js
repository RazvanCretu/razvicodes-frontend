import React, { useRef } from "react";
import { Typography } from "@mui/material";
import CyberButton from "../Buttons";

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
    <CyberButton
      component="a"
      href="#"
      download="Razvan's WebDev CV.pdf"
      ph="1.75rem"
      pv="0.6rem"
      f="1rem"
      c=".77rem"
      errText="$_error_&;"
      hideTag
      ref={downloadBtn}
    >
      Download CV
    </CyberButton>
  );
};

export default DownloadCV;

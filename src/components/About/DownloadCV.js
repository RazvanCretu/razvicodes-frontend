import React, { useRef } from "react";
import CyberButton from "../Buttons";

const getBlob = async (cv, ref) => {
  const res = await fetch(cv.url);
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
      sx={{
        "--button-font-size": "1rem",
        "--button-padding-v": "0.6rem",
        "--button-padding-h": "1.75rem",
        "--button-cutout": ".77rem",
      }}
      errText="$_error_&;"
      hideTag
      // disableHover
      ref={downloadBtn}
    >
      Download CV
    </CyberButton>
  );
};

export default DownloadCV;

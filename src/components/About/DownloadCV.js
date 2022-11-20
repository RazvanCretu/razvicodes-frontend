import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/About/DownloadCV.module.css";

const DownloadCV = ({ cv }) => {
  const downloadBtn = useRef();

  useEffect(() => {
    const getBlob = async () => {
      const res = await fetch(cv.attributes.url);
      const blob = await res.blob();
      const url = URL.createObjectURL(new Blob([blob]));

      //   console.log(url);
      downloadBtn.current.href = url;
    };
    getBlob();
  }, [cv]);

  return (
    <a
      className={styles.download}
      href="."
      download="Razvan's WebDev CV.pdf"
      ref={downloadBtn}
    >
      Download CV
    </a>
  );
};

export default DownloadCV;

import React, { useState, useEffect } from "react";
import styles from "../../styles/About/DownloadCV.module.css";

const DownloadCV = ({ cv }) => {
  const [blob, setBlob] = useState("");
  useEffect(() => {
    const getBlob = async () => {
      if (cv) {
        const res = await fetch(cv.attributes.url);
        const blob = await res.blob();
        const url = URL.createObjectURL(new Blob([blob]));

        console.log(url);
        setBlob(url);
      }
    };
    getBlob();
  }, []);

  return (
    <a className={styles.download} href={blob} download="Razvan's CV.pdf">
      Download CV
    </a>
  );
};

export default DownloadCV;

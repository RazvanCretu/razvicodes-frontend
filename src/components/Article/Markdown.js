import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { Typography, Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FaCopy, FaCheck } from "react-icons/fa";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import copy from "copy-to-clipboard";

const Highlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  lineHeight: "1.1",
  "& code": {
    fontSize: "1.05rem",
    lineHeight: "inherit",
  },
}));

const Inline = styled("code")(({ theme }) => ({
  padding: ".12rem .5rem",
  color: "var(--text-primary)",
  borderRadius: "7.5px",
  backgroundColor: "var(--inlineCode)",
  fontSize: "1rem",
}));

const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "300px",
  borderRadius: "5px",
  objectFit: "fill",
  [theme.breakpoints.up("md")]: {
    height: "600px",
  },
}));

const Code = ({ node, inline, className, children, ...props }) => {
  const [isCopied, setIsCopied] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsCopied(false), 1500);

    return () => clearTimeout(timeoutId);
  }, [isCopied]);

  const match = /language-(\w+)/.exec(className || "");

  const handleCopy = () => {
    if (isCopied) {
      return;
    }

    setIsCopied(true);
    if ("clipboard" in navigator) {
      copy(children);
    } else {
      document.execCommand("copy", true, children);
    }
  };

  return !inline && match ? (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {document.queryCommandSupported("copy") && (
        <Box
          sx={{
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
          onClick={handleCopy}
        >
          {isCopied ? <FaCheck /> : <FaCopy />}
        </Box>
      )}
      <Highlighter
        language={match[1]}
        children={String(children).replace(/\n$/, "")}
        style={theme.palette.mode === "dark" ? oneDark : oneLight}
        {...props}
      />
    </Box>
  ) : (
    <Inline className={`${className}`} {...props}>
      {children}
    </Inline>
  );
};

const Image = ({ node, className, alt, ...props }) => {
  return <Img alt={alt} {...props} />;
};

const components = {
  code: Code,
  img: Image,
  p: ({ node, ...props }) => {
    return <Typography {...props} sx={{ fontSize: "1.2rem" }} />;
  },
};

const Markdown = ({ children }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      components={components}
      children={children}
    />
  );
};

export default Markdown;

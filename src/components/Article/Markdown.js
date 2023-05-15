import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import {
  Typography,
  Box,
  List,
  ListItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FaCopy, FaCheck } from "react-icons/fa";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import copy from "copy-to-clipboard";
import { Title1, Title2, Title3, Title4, Title5, Title6 } from "../Titles";

const Highlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  lineHeight: "1.1",
  "& code": {
    fontSize: "1.05rem",
    lineHeight: "inherit",
  },
}));

const Inline = styled("code")(({ theme }) => ({
  padding: ".12rem .5rem",
  color: "cyan",
  borderRadius: "7.5px",
  backgroundColor: "#333",
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
  ul: ({ node, ordered, ...props }) => {
    return <List {...props} />;
  },
  li: ({ node, ordered, ...props }) => {
    return <ListItem {...props} disableGutters disablePadding />;
  },
  p: ({ node, ...props }) => (
    <Typography {...props} sx={{ fontSize: "1.2rem" }} />
  ),
  h1: ({ node, ...props }) => <Title2 {...props} />,
  h2: ({ node, ...props }) => <Title3 {...props} />,
  h3: ({ node, ...props }) => <Title4 {...props} />,
  h4: ({ node, ...props }) => <Title5 {...props} />,
  h5: ({ node, ...props }) => <Title6 {...props} />,
  h6: ({ node, ...props }) => <Title6 {...props} />,
  // h6: ({ node, ...props }) => (
  //   <Typography variant="h6" fontWeight={500} {...props} />
  // ),
  table: ({ node, ...props }) => (
    <Table sx={{ width: "50%", margin: "0 auto" }} {...props} />
  ),
  thead: ({ node, isHeader, ...props }) => <TableHead {...props} />,
  tr: ({ node, isHeader, ...props }) => <TableRow {...props} />,
  th: ({ node, isHeader, style, ...props }) => <TableCell {...props} />,
  tbody: ({ node, ...props }) => <TableBody {...props} />,
  td: ({ node, isHeader, style, ...props }) => <TableCell {...props} />,
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

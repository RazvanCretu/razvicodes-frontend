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
  IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { FaCopy, FaCheck } from "react-icons/fa";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  solarizedDark,
  solarizedLight,
  railscasts,
  androidstudio,
  dracula,
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import copy from "copy-to-clipboard";
import { Title2, Title3, Title4, Title5, Title6 } from "../Titles";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Highlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  "::before": {
    content: "attr(data-language)",
    display: "block",
    color: theme.palette.text.opposite,
    textShadow: `${theme.palette.text.shadow} 1px 1px`,
    marginBottom: "1rem",
  },
  lineHeight: "1 !important",
  "& code": {
    fontSize: "1.05rem",
    lineHeight: "inherit",
  },
}));

const Inline = styled("code")(({ theme }) => ({
  padding: ".3rem .5rem",
  color: "cyan",
  borderRadius: "5px",
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

const TableContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    overflowX: "scroll",
  },
}));

const StyledTable = styled(Table)(({ theme }) => ({
  display: "inline-block",
  width: "unset",
  margin: "0 auto",
  padding: "0 !important",
  border: "none !important",
  borderCollapse: "collapse",
  "& thead th": {
    borderBottomWidth: "2px",
  },
  "& th,& td": {
    border: `1px solid ${theme.palette.text.main}`,
    padding: "0.5rem 0.75rem",
  },
  "&::after,&::before": {
    content: "' '",
    width: "100%",
    height: "6px",
    display: "block",
    backgroundColor: `${theme.palette.text.main}`,
    position: "relative",
    clipPath: "polygon(60% 0, calc(60% + 6px) 100%, 100% 100%, 100% 0)",
  },
  "&::before": {
    clipPath:
      "polygon(0 100%, 100% 100%, 100% 0, 80% 0, calc(80% - 6px) 100%, 30% 100%, calc(30% - 6px) 0, 6px 0);",
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
        clipPath:
          "polygon(0 0, 0 100%, calc(100% - 3rem) 100%, 100% calc(100% - 3rem), 100% 0);",
      }}
    >
      {document.queryCommandSupported("copy") && (
        <IconButton
          sx={{
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
          onClick={handleCopy}
          size="small"
        >
          {isCopied ? <FaCheck /> : <FaCopy />}
        </IconButton>
      )}
      <Highlighter
        language={match[1]}
        children={String(children).replace(/\n$/, "")}
        style={theme.palette.mode === "dark" ? solarizedLight : solarizedDark}
        data-language={match[1]}
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
    <TableContainer>
      <StyledTable {...props} />
    </TableContainer>
  ),
  thead: ({ node, isHeader, ...props }) => <TableHead {...props} />,
  tbody: ({ node, ...props }) => <TableBody {...props} />,
  tr: ({ node, isHeader, ...props }) => <TableRow {...props} />,
  th: ({ node, isHeader, style, ...props }) => (
    <TableCell
      sx={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1rem",
      }}
      {...props}
    />
  ),
  td: ({ node, isHeader, style, ...props }) => (
    <TableCell
      sx={{
        fontSize: "1rem",
      }}
      {...props}
    />
  ),
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

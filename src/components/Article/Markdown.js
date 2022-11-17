import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useTheme } from "../../contexts/ThemeContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FaCopy, FaCheck } from "react-icons/fa";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "../../styles/Article/Markdown.module.css";
import "katex/dist/katex.min.css";

const Code = ({ node, inline, className, children, ...props }) => {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsCopied(false), 1500);

    return () => clearTimeout(timeoutId);
  }, [isCopied]);

  const { theme } = useTheme();

  const match = /language-(\w+)/.exec(className || "");

  const handleCopy = async (txt) => {
    if (isCopied) {
      return;
    }

    setIsCopied(true);
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(children);
    } else {
      document.execCommand("copy", true, children);
    }
  };

  return !inline && match ? (
    <div
      style={{
        position: "relative",
      }}
    >
      <div className={styles.copy} onClick={handleCopy}>
        {isCopied ? <FaCheck /> : <FaCopy />}
      </div>
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, "")}
        style={theme === "dark" ? oneDark : oneLight}
        language={match[1]}
        // PreTag="div"
        {...props}
      />
    </div>
  ) : (
    <code className={`${className} ${styles.code}`} {...props}>
      {children}
    </code>
  );
};

const components = {
  code: Code,
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

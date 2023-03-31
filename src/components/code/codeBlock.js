import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeBlock({ children }) {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {children}
    </SyntaxHighlighter>
  );
}

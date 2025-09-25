import React, { type ComponentProps, type ReactNode } from "react";
import clsx from "clsx";
import { useCodeBlockContext } from "@docusaurus/theme-common/internal";
import { usePrismTheme } from "@docusaurus/theme-common";
import { Highlight } from "prism-react-renderer";
import type { Props } from "@theme/CodeBlock/Content";
import Line from "@theme/CodeBlock/Line";
import { FaLightbulb } from "react-icons/fa";

import styles from "./styles.module.css";
import Tooltip from "../../../components/Tooltip";

const Pre = React.forwardRef<HTMLPreElement, ComponentProps<"pre">>(
  (props, ref) => (
    <pre
      ref={ref}
      tabIndex={0}
      {...props}
      className={clsx(props.className, styles.codeBlock, "thin-scrollbar")}
    />
  )
);

function Code(props: ComponentProps<"code">) {
  const { metadata } = useCodeBlockContext();
  return (
    <code
      {...props}
      className={clsx(
        props.className,
        styles.codeBlockLines,
        metadata.lineNumbersStart !== undefined &&
          styles.codeBlockLinesWithNumbering
      )}
      style={{
        ...props.style,
        counterReset:
          metadata.lineNumbersStart === undefined
            ? undefined
            : `line-count ${metadata.lineNumbersStart - 1}`,
      }}
    />
  );
}

export default function CodeBlockContent({
  className: classNameProp,
}: Props): ReactNode {
  const { metadata, wordWrap } = useCodeBlockContext();
  const prismTheme = usePrismTheme();
  const { code, language, lineNumbersStart, lineClassNames } = metadata;

  // magic comments with tips
  const lines = code.split("\n");
  const lineTips: Record<number, string> = {};

  const cleanedLines = lines.map((line, i) => {
    const match = line.match(/\/\/\s*tip="(.+)"/);
    if (match) {
      lineTips[i + 1] = match[1];
      return line.replace(match[0], "");
    }
    return line;
  });

  return (
    <Highlight
      theme={prismTheme}
      code={cleanedLines.join("\n")}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre
          ref={wordWrap.codeBlockRef}
          className={clsx(classNameProp, className)}
          style={style}
        >
          <Code>
            {tokens.map((lineTokens, i) => {
              const lineNumber = i + 1;
              const tipText = lineTips[lineNumber];

              return (
                <div key={i} style={{ display: "flex", alignItems: "center" }}>
                  <Line
                    line={lineTokens}
                    getLineProps={getLineProps}
                    getTokenProps={getTokenProps}
                    classNames={lineClassNames[i]}
                    showLineNumbers={lineNumbersStart !== undefined}
                  />
                  {tipText && (
                    <Tooltip text={tipText}>
                      <FaLightbulb className={styles.tipIcon} />
                    </Tooltip>
                  )}
                </div>
              );
            })}
          </Code>
        </Pre>
      )}
    </Highlight>
  );
}

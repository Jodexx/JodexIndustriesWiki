import React, { ReactNode } from "react";
import styles from "./styles.module.css";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

function parseTooltipText(text: string): ReactNode {
  return <span dangerouslySetInnerHTML={{ __html: text }} />;
}

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <span className={styles.tooltipWrapper}>
      {children}
      <span
        className={styles.tooltipText}
        dangerouslySetInnerHTML={{ __html: text }}
      ></span>
    </span>
  );
}

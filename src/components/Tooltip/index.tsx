import React, { ReactNode } from "react";
import styles from "./styles.module.css";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <span className={styles.tooltipWrapper}>
      {children}
      <span className={styles.tooltipText}>{text}</span>
    </span>
  );
}

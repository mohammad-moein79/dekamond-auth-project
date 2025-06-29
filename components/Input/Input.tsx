"use client";

import React from "react";
import styles from "./Input.module.scss";

type Props = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, ...props }: Props) {
  return (
    <div className={styles.inputWrapper}>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input className={styles.input} {...props} />
    </div>
  );
}

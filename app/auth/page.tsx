// app/auth/page.tsx
"use client";

import { AuthAction } from "@/actions/AuthAction";
import { useActionState } from "react";
import styles from "./auth.module.scss";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

export default function AuthPage() {
  const [state, formAction, isPending] = useActionState(AuthAction, {
    error: "",
  });

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.formContainer}>
        <h1>ورود</h1>
        <Input name="phone" type="text" placeholder="شماره تلفن" />
        {state?.error && <p className={styles.error}>{state.error}</p>}
        <Button type="submit" disabled={isPending}>
          {isPending ? "در حال ورود..." : "ورود"}
        </Button>
      </form>
    </div>
  );
}

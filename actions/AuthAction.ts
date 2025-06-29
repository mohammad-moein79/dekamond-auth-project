// actions/AuthAction.ts
"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function AuthAction(_: any, formData: FormData) {
  const rawPhone = formData.get("phone") as string;
  const phone = rawPhone.trim().replace(/[^0-9]/g, "");

  console.log("شماره نهایی:", phone);

  if (!/^09\d{9}$/.test(phone)) {
    return { error: "شماره تلفن معتبر نیست" };
  }

  const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
  const data = await res.json();
  const user = data.results[0];

  (await cookies()).set("user", JSON.stringify(user), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  redirect("/dashboard");
}

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const userCookie = (await cookies()).get("user");

  if (!userCookie) {
    redirect("/auth");
  }

  return <h1>Welcome to the Dashboard</h1>;
}

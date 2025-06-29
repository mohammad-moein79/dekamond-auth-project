import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  return <h1>Welcome to the Dashboard</h1>;
}

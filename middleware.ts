import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get("user");

  const isAuthPage = request.nextUrl.pathname === "/auth";
  const isDashboardPage = request.nextUrl.pathname === "/dashboard";

  if (userCookie && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!userCookie && isDashboardPage) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth", "/dashboard"],
};

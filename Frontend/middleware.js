import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");
  const url = req.url;

  if (token && (url.includes("/login") || url.includes("/register"))) {
    return NextResponse.redirect(new URL("/user", req.url));
  }

  if (!token && (url.includes("/user") || url.includes("/dashboard"))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user", "/dashboard", "/login", "/register"],
};

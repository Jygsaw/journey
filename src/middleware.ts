import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const publicRoutes = ["/login", "/signup", "/"];

export const middleware = async (req: NextRequest) => {
  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")?.value;

  const path = req.nextUrl.pathname;
  if (!userId && !publicRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

export default middleware;

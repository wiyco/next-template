import { type NextRequest, NextResponse } from "next/server";

import { sleep } from "@/utils/sleep";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const t = parseInt(searchParams.get("t") ?? "");
  const time = !isNaN(t) ? t : 1500;
  console.log(time);
  await sleep(time);

  return NextResponse.json(
    { message: "Hello, World!", t: time },
    { status: 200 }
  );
}

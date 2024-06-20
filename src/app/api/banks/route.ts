import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch("https://dev.obtenmas.com/catom/api/challenge/banks") 
  const data = await res.json()
  return NextResponse.json({data});
}
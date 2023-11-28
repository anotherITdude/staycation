import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

import { getFileExtension } from "@/lib/utils";
import { randomUUID } from "crypto";
import { createAWSUrl } from "@/lib/s3";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, mobile, email, emirate, eid, receiptName, lan, contentType } =
      body;

    //for aws
    const stringName = receiptName.toString();
    const extension = getFileExtension(stringName!);
    const Key = `${randomUUID()}.${extension}`;
    const { url, fields } = await createAWSUrl(Key, contentType);
    //for aws

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const entry = await prismadb.staycation.create({
      data: {
        name,
        mobile,
        email,
        emirate,
        eid,
        receipt: `${url}${Key}`,
        lan: `${lan}`,
        selected: false,
        info: "",
      },
    });
    console.log(url)
    return NextResponse.json({ url, fields });
  } catch (error) {
    console.log("[ENTRY_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

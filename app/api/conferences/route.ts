import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const conferences = await prisma.conference.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(conferences);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch conferences" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (
      !body.title ||
      !body.shortName ||
      !body.venue ||
      !body.startDate ||
      !body.endDate ||
      !body.submissionDeadline ||
      !body.registrationDeadline
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const conference = await prisma.conference.create({
      data: {
        title: body.title,
        shortName: body.shortName,
        venue: body.venue,
        mode: body.mode,

        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate),

        submissionDeadline: new Date(body.submissionDeadline),
        registrationDeadline: new Date(body.registrationDeadline),

        registrationFee: Number(body.registrationFee) || 0,

        description: body.description || null,
        website: body.website || null,
        email: body.email || null,

        status: "Draft",
      },
    });

    return NextResponse.json(conference, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
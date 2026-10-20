import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "bazardor");
    
    // Ping database
    await db.command({ ping: 1 });
    
    return NextResponse.json({
      success: true,
      message: "Successfully connected to MongoDB!",
      database: db.databaseName,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        hint: "Please ensure your MongoDB cluster address in .env.local is correct and IP Access List allows connections (0.0.0.0/0).",
      },
      { status: 500 }
    );
  }
}

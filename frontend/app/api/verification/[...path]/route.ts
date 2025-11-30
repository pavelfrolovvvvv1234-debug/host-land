import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * API Route for serving verification files
 * 
 * This route handles verification files for:
 * - Google Search Console
 * - Yandex Webmaster
 * - Bing Webmaster Tools
 * 
 * Place verification files in: /public/verification/
 * 
 * Example URLs:
 * - /api/verification/google1234567890abcdef.html
 * - /api/verification/yandex_1234567890.html
 * - /api/verification/BingSiteAuth.xml
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const filePath = params.path.join("/");
  
  try {
    // Security: prevent path traversal
    if (filePath.includes("..") || filePath.includes("/")) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    // Path to verification files in public directory
    const publicPath = path.join(process.cwd(), "public", "verification", filePath);
    
    // Check if file exists
    if (!fs.existsSync(publicPath)) {
      return new NextResponse("File not found", { status: 404 });
    }

    // Read file
    const fileContent = fs.readFileSync(publicPath, "utf-8");
    
    // Determine content type based on extension
    const extension = path.extname(filePath).toLowerCase();
    const contentTypeMap: Record<string, string> = {
      ".html": "text/html",
      ".xml": "application/xml",
      ".txt": "text/plain",
      ".json": "application/json"
    };
    
    const contentType = contentTypeMap[extension] || "text/plain";
    
    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400" // Cache for 24 hours
      }
    });
  } catch (error) {
    console.error("Error serving verification file:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}



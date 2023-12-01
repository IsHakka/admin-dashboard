import { NextResponse } from "next/server"
import { NextRequest } from "next/server";

export const GET = (req: NextRequest, { params }: any) => {
    return NextResponse.json({
        success: true,
        errorMessage: '出現錯誤' + params.id,
        data: {},
    });
};
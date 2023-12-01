import { NextRequest, NextResponse } from "next/server"
import prisma from "@/db";

export const GET = async () => {

    const data = await prisma.goods.findMany({
        // 數據根據創建時間倒敘排列
        orderBy: {
            createdAt: 'desc'
        }
    })

    return NextResponse.json({
        success: true,
        errorMessage: '獲取數據成功',
        data
    });
};

export const POST = async (req: NextRequest) => {
    const data = await req.json();
    await prisma.goods.create({
        data
    });
    return NextResponse.json({
        success: true,
        errorMessage: '創建成功',
        data: {},
    });

};
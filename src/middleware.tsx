import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
//   console.log('中間件執行了');
    if(request.nextUrl.pathname.startsWith('/admin')){
        if(!request.nextUrl.pathname.startsWith('./admin/login')){
            // 判斷是否登入(不在登入頁時)
            if(request.cookies.get('admin-token')){
                // 已經登入了
            }else {
                // 跳轉
                return NextResponse.redirect(new URL('/admin/login',request.url))
            }
        }
    }
  
}

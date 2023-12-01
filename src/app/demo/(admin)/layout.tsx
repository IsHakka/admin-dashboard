import React, { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className='bg-rose-600'>
            <h1>這是admin的群組頁面</h1>
            {children}
        </div>
    )
}

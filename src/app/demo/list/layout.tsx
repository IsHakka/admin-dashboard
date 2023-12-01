import React from 'react'

export default function DemoLayout({ children }: any) {
    return (
        <div className='demo'>
            <h1>這是demoList頁面的模板</h1>
            {children}
        </div>
    )
}

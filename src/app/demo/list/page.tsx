import { Metadata } from 'next'
import List from './_components/List';

export const metadata: Metadata = {
    title: '這是list的title',
    description: 'list敘述',
    keywords: 'next.js,react'
};


export default function Page() {

    return (
        <>
            <div className='list-page'>PageList</div>
            <List></List>
        </>
    )
}

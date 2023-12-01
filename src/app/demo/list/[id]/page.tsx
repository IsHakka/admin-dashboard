import React from 'react'
import { Metadata } from 'next'
import { type } from 'os'

type Props = {
    params: { id: string },
    searchParams: any
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    return {
        title: '這是詳情頁' + searchParams.name
    }
}

export default function page({ params, searchParams }: Props) {
    return (
        <div>DetailList page {params.id},query---{searchParams.name}</div>
    )
}

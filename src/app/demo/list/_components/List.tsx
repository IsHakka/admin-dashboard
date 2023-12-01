"use client"
import { type } from 'os'
import React, { useEffect } from 'react'
import { useState } from 'react'

type Item = {
    id: number,
    name: string
}

export default function List() {
    const [data, setData] = useState<Item[]>([])
    useEffect(() => {
        fetch('/api/goods')
            .then(res => res.json())
            .then(res => setData(res.data))
    }, [])
    return (
        <div className='list'>
            <ul>
                {data.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div >
    )
}

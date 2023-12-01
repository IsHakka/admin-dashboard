'use client'
import React from 'react'
import { Card, Form, Button, Input } from 'antd'
import {useRouter} from 'next/navigation'

export default function LoginPage() {
    const nav = useRouter()
    return (
        <div className='login-form pt-20'>
            <Card title="全站管理後台" className='w-4/5 mx-auto mt-10'>
                <Form labelCol={{ span: 2 }} onFinish={async (e) => {                    
                    const res = await fetch('/api/admin/login', {
                        method: 'POST',
                        body: JSON.stringify(e)
                    }).then(res => res.json())
                    console.log(res);
                    nav.push('/admin/dashboard')
                }}>
                    <Form.Item name='username' label='帳號'>
                        <Input placeholder='請輸入帳號' />
                    </Form.Item>
                    <Form.Item name='password' label='密碼'>
                        <Input.Password placeholder='請輸入密碼' />
                    </Form.Item>
                    <Form.Item className='flex justify-center'>
                        <Button block type='primary' htmlType='submit'>
                            登入
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

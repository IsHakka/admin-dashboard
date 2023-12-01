'use client'
import React from 'react'
import { Card, Form, Button, Input } from 'antd'

export default function LoginPage() {
    return (
        <div className='login-form'>
            <Card title="全站管理後台">
                <Form labelCol={{span:2}}>
                    <Form.Item label='帳號'>
                        <Input placeholder='請輸入帳號' />
                    </Form.Item>
                    <Form.Item label='密碼'>
                        <Input.Password placeholder='請輸入密碼' />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            登入
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

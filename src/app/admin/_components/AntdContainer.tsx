'use client'
import { ConfigProvider} from 'antd';
import zhTW from 'antd/locale/zh_TW';
import 'antd/dist/reset.css'


export default function AntdContainer({ children }: any) {
    return (
        <ConfigProvider locale={zhTW}>
            {children}
        </ConfigProvider>
    )
}

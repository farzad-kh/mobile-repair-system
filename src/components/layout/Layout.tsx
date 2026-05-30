


import type { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'
import faIR from "antd/locale/fa_IR";

import { ConfigProvider } from 'antd';
import useShadcnTheme from '@/shadcnTheme';
import { NotificationProvider } from '@/context/NotificationProvider';
const Layout = ({ children }: PropsWithChildren) => {

    const configProps = useShadcnTheme();
    return (

        <NotificationProvider>

            <ConfigProvider direction="rtl" locale={faIR} {...configProps}>

                <Header />
                <main
                    className='min-h-[calc(100vh-84.6px-152.6px)] container max-w-screen-2xl   m-auto mt-2 max-md:p-4 p-7'
                >
                    {children}
                </main>


                <Footer />
            </ConfigProvider>
        </NotificationProvider>

    )
}

export default Layout


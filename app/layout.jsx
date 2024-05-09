import { Inter, Poppins } from 'next/font/google'
import './globals.css'

import { RootProvider } from './_providers/RootProvider'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'

// const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  preload: false,
})

export const metadata = {
  title: 'Restaurante Univalle',
  description: 'Restaurante Univalle',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'w-full h-full'}>
      <body className={poppins.className + ' w-full h-full bg-slate-200'}>
        <RootProvider>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                token: { fontFamily: poppins.style.fontFamily },
                components: {
                  Button: {
                    colorPrimary: '#B91C1C',
                    colorPrimaryHover: '#AC1A2A',
                    colorPrimaryActive: '#AC1A2A',
                  },
                },
              }}
            >
              {children}
            </ConfigProvider>
          </AntdRegistry>
        </RootProvider>
      </body>
    </html>
  )
}

import { Flex } from 'antd'

export default function LoginLayout({ children }) {
  return (
    <html>
      <body>
        <Flex className="items-center justify-center h-full w-full">
          <Flex className="items-center justify-center" vertical>
            {children}
          </Flex>
        </Flex>
      </body>
    </html>
  )
}

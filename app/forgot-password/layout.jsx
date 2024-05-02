import { Flex } from 'antd'

export default function ForgotLayout({ children }) {
    return (
        <Flex className="items-center justify-center h-full w-full">
            <Flex className="items-center justify-center" vertical>
                {children}
            </Flex>
        </Flex>
    )
}

import { Flex } from 'antd'

RecoveryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function RecoveryLayout({ children }) {
  return (
    <Flex className="items-center justify-center h-full w-full">
      <Flex className="items-center justify-center" vertical>
        {children}
      </Flex>
    </Flex>
  )
}

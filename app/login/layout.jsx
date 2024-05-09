import { Flex } from 'antd'
import PropTypes from 'prop-types'

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function LoginLayout({ children }) {
  return (
    <Flex className="items-center justify-center h-full w-full">
      <Flex className="items-center justify-center" vertical>
        {children}
      </Flex>
    </Flex>
  )
}

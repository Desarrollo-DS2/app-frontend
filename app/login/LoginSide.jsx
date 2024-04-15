import { IoRestaurant } from 'react-icons/io5'

import { Flex } from 'antd'

function LoginSide() {
  return (
    <Flex
      className="items-center justify-center bg-red-700 p-5 pt-7 rounded-tl-md rounded-bl-md"
      data-testid="side"
    >
      <IoRestaurant size={50} data-testid="icon-restaurant" color='white'/>
    </Flex>
  )
}

export default LoginSide

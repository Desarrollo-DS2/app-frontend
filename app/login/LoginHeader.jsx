import React from 'react';

import { Flex } from 'antd';
import Image from 'next/image';

function LoginHeader() {
  return (
    <Flex className="items-start justify-between">
      <h1 className="text-2xl font-bold text-black">Iniciar Sesión</h1>
      <Image src="/logoUnivalle.png" alt="logo" width={50} height={50} />
    </Flex>
  );
}

export default LoginHeader;
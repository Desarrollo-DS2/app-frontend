import React from 'react'

import { Flex } from 'antd'
import LoginSide from '../LoginSide'
import ForgotHeader from './ForgotHeader'
import ForgotPassForm from './ForgotPassForm'



export default function ForgotPage() {
    return (
        <Flex className="shadow-md m-5">
            <LoginSide />
            <Flex
                gap={10}
                className="bg-slate-100 p-5 pt-7 rounded-tr-md rounded-bt-md"
                vertical
            >
                <ForgotHeader />
                <ForgotPassForm />
            </Flex>
        </Flex>
    )
}

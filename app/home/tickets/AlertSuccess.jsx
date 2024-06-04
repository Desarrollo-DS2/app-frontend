import React, { useEffect } from 'react'
import { Result } from 'antd'

import PropTypes from 'prop-types'

const AlertSuccess = ({ message, subtitle, open, setOpen }) => {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false)
      }, 3000)
    } else {
      clearTimeout()
    }

    return () => {
      clearTimeout()
    }
  }, [open, setOpen])

  return (
    <Result
      status="success"
      title={message}
      subTitle={subtitle}
      style={{
        opacity: open ? '1' : '0',
        pointerEvents: open ? '' : 'none',
        transition: 'all 0.5s',
      }}
    />
  )
}

AlertSuccess.propTypes = {
  message: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default AlertSuccess

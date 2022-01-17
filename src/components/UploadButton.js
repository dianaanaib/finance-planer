import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const UploadButton = () => {

    return (
        <Button icon={<UploadOutlined />}/>
    )
}

export default UploadButton
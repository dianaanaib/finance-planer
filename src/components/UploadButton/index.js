import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import './index.css'

const UploadButton = () => {

    return (
        <Button icon={<UploadOutlined />}/>
    )
}

export default UploadButton
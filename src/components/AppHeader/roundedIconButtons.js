import React, { useState } from 'react'
import QuickStart from '../QuickStart'
import ProductInfo from '../ProductInfo'
import ProductDoc from '../ProductDoc'

const RoundedIconButtons = () => {
  const [isQuickStartActive, setQuickStartActive] = useState(false)
  const [isProductInfoActive, setProductInfoActive] = useState(false)
  const [isProductDocActive, setProductDocActive] = useState(false)

  const IconLink = ({ src, text, handleClick }) => (
    <a className='example-link' onClick={handleClick}>
      <img className='example-link-icon' src={src} alt={text} />
      {text}
    </a>
  )

  return (
    <div className='roundedButtons'>
      <IconLink
        src='https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg'
        text=' Quick Start'
        handleClick={() => setQuickStartActive(true)}
      />
      <IconLink
        src='https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg'
        text=' Product Info'
        handleClick={() => setProductInfoActive(true)}
      />
      <IconLink
        src='https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg'
        text=' Product Doc'
        handleClick={() => setProductDocActive(true)}
      />
      <QuickStart isModalVisible={isQuickStartActive} setIsModalVisible={setQuickStartActive} />
      <ProductInfo isModalVisible={isProductInfoActive} setIsModalVisible={setProductInfoActive} />
      <ProductDoc isModalVisible={isProductDocActive} setIsModalVisible={setProductDocActive} />
    </div>
  )
}

export default RoundedIconButtons
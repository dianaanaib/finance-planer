import { Modal, Button } from 'antd'

const ProductInfo = ({ isModalVisible, setIsModalVisible }) => {
  const handleOk = () => {
    setIsModalVisible(false)
  }

  return (
    <Modal
      title={
        <div style={{ color: '#6294F9' }}>Product Information</div>
      }
      visible={isModalVisible}
      closable={false}
      footer={
        <Button style={{ backgroundColor: '#6294F9' }} key="submit" type="primary" onClick={handleOk}>
          Ok
        </Button>
      }
    >
      <p></p>
      <img
        src={require('./buddy-19.gif')}
        alt='lala'
        style={{ marginLeft: '6.5em', height: '200px', width: '280px' }}
      />
      <p></p>
    </Modal>
  )
}

export default ProductInfo
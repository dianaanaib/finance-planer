import { Modal, Button } from 'antd'

const ProductDoc = ({ isModalVisible, setIsModalVisible }) => {
  const handleOk = () => {
    setIsModalVisible(false)
  }

  return (
    <Modal
      title="Product Documentation"
      visible={isModalVisible}
      closable={false}
      footer={
        <Button key="submit" type="primary" style={{ backgroundColor: '#6294F9' }} onClick={handleOk}>
          Ok
        </Button>
      }
    >
      <p></p>
      <img
        src={require('./buddy-7.gif')}
        alt='lala'
        style={{ marginLeft: '10em', height: '200px', width: '200px' }}
      />
      <p></p>
    </Modal>
  )
}

export default ProductDoc
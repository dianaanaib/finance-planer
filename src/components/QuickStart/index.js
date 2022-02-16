import { Modal, Button } from 'antd'

const ProductDoc = ({ isModalVisible, setIsModalVisible }) => {
	const handleOk = () => {
		setIsModalVisible(false)
	}

	return (
		<Modal
			title="Basic Modal"
			visible={isModalVisible}
			closable={false}
			footer={
				<Button key="submit" type="primary" onClick={handleOk}>
					Ok
				</Button>
			}
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Modal>
	)
}

export default ProductDoc
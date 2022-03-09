import { Modal, Button } from 'antd'
import './index.css'

const QuickStart = ({ isModalVisible, setIsModalVisible }) => {
	const handleOk = () => {
		setIsModalVisible(false)
	}

	return (
		<Modal

			title={
				<div style={{ height: '80px', marginTop: '-3em', paddingTop: '1em' }}>
					<img
						src={require('./buddy-rocket.gif')}
						alt='lala'
						style={{ marginLeft: '-4em', height: '100px', width: '170px' }}
					/>
					<span style={{ marginLeft: '-2em', color: '#6294F9' }}>Quick Start</span>
				</div>}
			visible={isModalVisible}
			closable={false}
			footer={
				<Button style={{ backgroundColor: '#6294F9' }} key="submit" type="primary" onClick={handleOk}>
					Ok
				</Button>
			}
		>
			<p></p>
			<p></p>
			<p>Hey, look around and you will understand.</p>
			<p>The app is too easy to explain something!</p>
			<p></p>
			<p></p>
		</Modal>
	)
}

export default QuickStart
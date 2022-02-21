import { FileDoneOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import './index.css'

const TableActions = ({ setIsChosenList }) => {
	return (
		<div className='tableViewSwitch'>
			<Tooltip title='Transactions' mouseEnterDelay={1.5} mouseLeaveDelay={0.3}>
				<UnorderedListOutlined
					onClick={() => setIsChosenList('transactions')}
					style={{ fontSize: '18px' }}
				/>
			</Tooltip>
			<Tooltip title='Uploaded files' mouseEnterDelay={1.5} mouseLeaveDelay={0.3}>
				<FileDoneOutlined
					onClick={() => setIsChosenList('uploadedFiles')}
					style={{ fontSize: '18px' }}
				/>
			</Tooltip>
		</div>
	)
}

export default TableActions
import { FileDoneOutlined, UnorderedListOutlined } from '@ant-design/icons'
import './index.css'

const TableActions = ({ setIsChosenList }) => {
	return (
		<div className='tableViewSwitch'>
			<UnorderedListOutlined
				onClick={() => setIsChosenList('transactions')}
				style={{ fontSize: '18px' }}
			/>
			<FileDoneOutlined
				onClick={() => setIsChosenList('uploadedFiles')}
				style={{ fontSize: '18px' }}
			/>
		</div>
	)
}

export default TableActions
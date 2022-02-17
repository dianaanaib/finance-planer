import { FileDoneOutlined, UnorderedListOutlined } from '@ant-design/icons'
import './index.css'

const TableActions = () => {
	return (
		<div className='tableViewSwitch'>
			<UnorderedListOutlined style={{ fontSize: '18px' }} />
			<FileDoneOutlined style={{ fontSize: '18px' }} />
		</div>
	)
}

export default TableActions
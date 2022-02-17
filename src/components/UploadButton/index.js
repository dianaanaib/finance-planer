import { Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const UploadButton = () => {
	const props = {
		name: 'file',
		action: '/api/v1/upload',
		onChange(info) {
			if (info.file.status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (info.file.status === 'done') {
				message.success(`${info.file.name} file uploaded successfully`);
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
	};

	return (
		<Upload {...props}>
			<Button icon={<UploadOutlined />}>Click to Upload</Button>
		</Upload>
	)
}

export default UploadButton
export async function getAllBankStatements() {
    const response = await fetch('/api/v1/data', {
        headers: {
            'accept': 'application/json',
        }
    })
    return response.json()
}

export async function getAllUploadedFiles() {
    const response = await fetch('/api/v1/files', {
        headers: {
            'accept': 'application/json',
        }
    })
    console.log('res', response)
    return response.json()
}
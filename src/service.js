export async function getAllBankStatements() {
    const response = await fetch('http://localhost:8080/api/v1/data')
    return response.json()
}

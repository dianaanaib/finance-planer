export async function getAllBankStatements() {
    const response = await fetch('/api/v1/data', { headers: { 'accept': 'application/json' } })
    return response.json()
}

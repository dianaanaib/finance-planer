export async function getAllBankStatements() {
    let headers = new Headers()

    headers.append('Content-Type', 'application/json')

    const response = await fetch('https://cryptic-headland-94862.herokuapp.com/http://localhost:8080/api/v1/data')
    return response.json()
}

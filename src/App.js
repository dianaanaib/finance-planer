
import './App.css'
import {getAllBankStatements} from './service'
import cors from 'cors'
import express, { Express, NextFunction, Request, Response } from 'express'
import {LineChart, PieChart, List, UploadButton} from './components'

function App() {
  //const [data, setData] = useState({ hits: [] });

  //useEffect(() => {
  //  (async () => {
  //      let response = await fetch('http://localhost:8080/api/v1/data')
  //      response = await response.json()
  //      console.log('data', data)
  //      setData(response);
  //  })();
  //}, [])

  return (
    <div className="App">
      <div className='chartsWrapper'>
        <PieChart />
        <LineChart />
      </div>
      <List />
    </div>
  )
}
export default App

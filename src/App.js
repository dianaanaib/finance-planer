
import './App.css'
import {getAllBankStatements} from './service'
import cors from 'cors'
import express, { Express, NextFunction, Request, Response } from 'express'
import LineChart from './components/LineChart'
import PieChart  from './components/PieChart'
import List  from './components/List'
import UploadButton  from './components/UploadButton'

function App() {
  //const [data, setData] = useState({ hits: [] });

  //useEffect(() => {
  //  (async () => {
  //      let response = await getAllBankStatements()
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

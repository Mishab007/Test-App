import CommonRouter from "../src/routes/CommonRouter"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/*' Component={CommonRouter}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App 
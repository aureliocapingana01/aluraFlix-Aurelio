import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home/'
import NovoVideo from "./pages/NovoVideo"


function App() {

  return (
  
    <BrowserRouter>
<Routes>
  <Route index element={<Home />} />
  <Route path="/NovoVideo" element={<NovoVideo />} />
</Routes>
</BrowserRouter>
  )
  
}

export default App

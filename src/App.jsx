
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Disease from "./Disease"
import "../public/style/style.css"
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/disease/:vector" element={<Disease />} />
    </Routes>
  </BrowserRouter>
}


export default App
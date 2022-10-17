import './App.css'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Atvd01 from "./pages/atividade01/atvd01"
import Atvd02 from "./pages/atividade02/atvd02"
import Atvd03 from "./pages/atividade03/atvd03"
import Atvd04 from "./pages/atividade04/atvd04"
import Atvd05 from "./pages/atividade05/atvd05"


function App() {

  return (
    <div className="App">
       <Router>
        <nav className="nav">
        <Link to="/" className="link-nav">
            ATVD 01
          </Link>
          <Link to="/atvd02" className="link-nav">
            ATVD 02
          </Link>
          <Link to="/atvd03" className="link-nav">
            ATVD 03
          </Link>
          <Link to="/atvd04" className="link-nav">
            ATVD 04
          </Link>
          <Link to="/atvd05" className="link-nav">
            ATVD 05
          </Link>
        </nav>
        <Routes>
          <Route index element={<Atvd01 />} />
          <Route path="atvd02" element={<Atvd02 />} />
          <Route path="atvd03" element={<Atvd03 />} />
          <Route path="atvd04" element={<Atvd04 />} />
          <Route path="atvd05" element={<Atvd05 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

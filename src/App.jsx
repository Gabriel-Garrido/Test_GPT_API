import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home"
import { TestGPT } from "./pages/TestGPT"
import { Navigation } from "./components/Navigation"

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testGPT" element={<TestGPT />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Captainlogin from "./pages/Captainlogin"
import Captainsign from "./pages/Captainsign"
import Userlogin from "./pages/Userlogin"
import Usersignup from "./pages/Usersign"
import UserLogout from "./pages/UserLogout"
import CaptainRiding from "./pages/CaptainRiding"
import Start from "./pages/Start"
import CaptainLogout from "./pages/CaptainLogout"
import UserProtected from "./pages/UserProtected"
import CaptainHome from "./pages/CaptainHome"
import Check from "./pages/Check"
import CaptainProteced from "./pages/CaptainProtect"
function App() {
  

  return (
   <>
   <Routes>
    <Route path="/check" element={<Check />} />
<Route path="/" element={<Start />} />
<Route path="/home" element={
<UserProtected>
<Home />
</UserProtected>

} />
<Route path="/captain-riding" element={<CaptainRiding />} />
<Route path="/captainlogin" element={<Captainlogin />} />
<Route path="/captainsignup" element={<Captainsign />} />
<Route path="/login" element={<Userlogin />} />
<Route path="/signup" element={<Usersignup />} />
<Route path="/logout" element={<UserLogout />} />
<Route path="/captainHome" element={
  <CaptainProteced>
<CaptainHome />
  </CaptainProteced>
} />
<Route path="/captainlogout" element={
  <CaptainProteced>
<CaptainLogout/>
  </CaptainProteced>
} />
   </Routes>
   
   
   </>
  )
}

export default App

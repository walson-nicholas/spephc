import Navbar from "./assets/components/Navbar"
import Header from "./assets/components/Header"
import Theme from "./assets/components/Theme"
import Keynote from "./assets/components/Keynote"
import SpeGuest from "./assets/components/SpeGuest"
import Panelist from "./assets/components/Panelist"
import ShortCourses from "./assets/components/ShortCourses"
/*
import BreakOut from "./assets/components/BreakOut"
import CareerFair from "./assets/components/CareerFair"
import Sponsors from "./assets/components/Sponsors"
import Footer from "./assets/components/Footer"
*/
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Theme />
      <Keynote />
      <SpeGuest />
      <Panelist />
      <ShortCourses />
    </div>
  );
}

export default App;
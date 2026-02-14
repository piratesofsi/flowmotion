import Herosection from "./components/Herosection"
import LibrarySection from "./components/LibrarySection"
import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast";


function App() {
  

  return (
    <>
     <div className=" ">
        <Toaster position="top-right" />
      <Navbar/>
      <Herosection/>
       <LibrarySection/>
     </div>
    </>
  )
}

export default App

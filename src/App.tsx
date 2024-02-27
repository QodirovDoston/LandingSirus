import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { PreFooter, Footer, NavbarPage, Header, Carusel, OnlineCourse, OurMentor } from "./components"

function App() {
  useEffect(() => {
    AOS.init();
   }, [])

  return (
    <>
      <NavbarPage />
      <Carusel />
      <Header />
      <OnlineCourse />
      <OurMentor />
      <PreFooter />
      <Footer />
    </>
  )
}
export default App
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"


const App = () => {
    return (
        <BrowserRouter>
            <div className=" bg-primary">
                <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat z-0">
                    <Navbar />
                    <Hero />
                </div>
            </div>
            <About />
            <Experience />
            <div className="flex justify-center items-center">
                <Tech />
            </div>
            <div className="flex justify-center items-center">
                <Works />
            </div>
            <Contact />
        </BrowserRouter>
    )
}

export default App

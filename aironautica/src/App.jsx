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
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
                <Contact />
                <StarsCanvas />
            </div>
        </BrowserRouter>
    )
}

export default App

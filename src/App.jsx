import NavBar from './components/NavBar';
import Home from './components/Home';
import Features from './components/Features';
import Video from './components/Video';
import Crafted from './components/Crafted ';
import BugFree from './components/BugFree';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
    return (
        <div>
            <NavBar />
            <Home />
            <Features />
            <Video />
            <Crafted />
            <BugFree />
            <Blog />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
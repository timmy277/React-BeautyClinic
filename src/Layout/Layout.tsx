
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Footer from '../components/Footer/Footer'
import Home1 from '../pages/Home1/Home1'
import { Route, Routes } from "react-router-dom";
import Home2 from '../pages/Home2/Home2';

const Layout = () => {
    return (
        <>
            <NavigationBar />
                <Routes>
                    <Route path="/Home1" element={<Home1 />} />
                    <Route path="/Home2" element={<Home2 />} />
                </Routes>
            <Footer />
        </>
    )
}

export default Layout
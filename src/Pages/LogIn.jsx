import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Login from '../components/Login'
import LoggedInModal from "../components/LoggedInModal"

function HomePage() {

    return (
        <div className="w-full  ">
            <Navigation />
            <Login />
            <LoggedInModal />
            <Footer />
        </div>
    )
}
export default HomePage
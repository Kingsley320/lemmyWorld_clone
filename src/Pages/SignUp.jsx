import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SignUpForm from "../components/SignUpForm"
import SignUpNotice from "../components/SignUpNotice"

function HomePage() {

    return (
        <div className="w-full  ">
            <Navigation />
            <SignUpForm />
            <SignUpNotice />
            <Footer />
        </div>
    )
}
export default HomePage
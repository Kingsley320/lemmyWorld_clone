import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SignUp from "../components/SignUp"

function HomePage(){

    return(
        <>
        <Navigation/>
        <SignUp/>
        {/* <h1>Hi Lemmy</h1> */}
        <Footer/>
        </>
    )
}
export default HomePage
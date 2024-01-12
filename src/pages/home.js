import Header from "../header";
import Gibjohnpicture from "../components/homepageimage";
import Homepagebuttons from "../components/frontpagebuttons";
import CookieConsent from "react-cookie-consent";

export default function Home(){
    return(
        <>
            <div>
                <Header></Header>
                <Gibjohnpicture></Gibjohnpicture>
                <Homepagebuttons></Homepagebuttons>
                <div>
                <CookieConsent debug={true}>This site uses cookies.</CookieConsent>
                </div>

            </div>
        </>
    )
}




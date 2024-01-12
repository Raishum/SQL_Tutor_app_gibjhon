import Header from "../header";
import "../App.css";
import Homepagebuttons from "../components/frontpagebuttons";

export default function CookiesPolicyPage (){
  return (
    <div>
        <Header></Header>
        <Homepagebuttons></Homepagebuttons>
        <div class="cookie">
            <h2>Our tutoring website employs cookies to enhance the overall user experience and provide personalized services to our visitors. Cookies are small text files stored on your device that contain information about your preferences and browsing behavior.<p></p> We use cookies to analyze website traffic, optimize content, and tailor our services to meet individual needs. By accepting our cookie policy, you consent to the use of these cookies. However, you have the option to manage your cookie preferences through your browser settings.<p></p> Please note that restricting cookies may impact certain functionalities of the website. Our commitment is to ensure transparency and security in handling your data, and we encourage you to review our privacy policy for a comprehensive understanding of how we safeguard your information.</h2>
      </div>
    </div>
  );
}
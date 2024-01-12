import Header from "../header";
import "../App.css";
import Homepagebuttons from "../components/frontpagebuttons";

export default function CookiesPolicyPage (){
  return (
    <div>
        <Header></Header>
        <Homepagebuttons></Homepagebuttons>
        <div class="contact">
            <h1><p>Contact us on email or give us a call today:</p></h1>
            <h3><p>Email:GibJohn@tutoring.co.uk</p></h3>
            <h3><p>Number:01618821234</p></h3>
      </div>
    </div>
  );
}
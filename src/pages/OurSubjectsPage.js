
import Header from "../header";
import "../App.css";
import Homepagebuttons from "../components/frontpagebuttons";

export default function OurSubjectsPage (){
  return (
    <div class="text">
        <Header></Header>
        <Homepagebuttons></Homepagebuttons>
        <div>
        <ul className="list">
            <li  className="list">Maths</li>
            <li>English</li>
            <li>Science</li>
            <li>History</li>
            <li>Geography</li>
            <li>Design and Technology</li>
        </ul>
      </div>
    </div>
  );
}
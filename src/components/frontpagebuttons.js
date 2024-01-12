import { useNavigate } from "react-router-dom";


export default function Homepagebuttons() {
  const navigate = useNavigate();

  
  return (
    <div className='HomePageButtons'>
      <button onClick={() => {navigate('/Login')}}className='LoginPage'>Login</button>
      <button onClick={() => {navigate('/OurSubjectsPage')}} className="SubjectsButton">Our Subjects</button>
      <button onClick={() => {navigate('/AboutUsPage')}}className="AboutusButton">About us</button>
      <button onClick={() => {navigate('/ContactUsPage')}}className="ContactButton">Contact Us</button>
      <button onClick={() => {navigate('/CookiesPolicyPage')}}className="CookiesButton">Cookies Policy</button>
    </div>
  );
}


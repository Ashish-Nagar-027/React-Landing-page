import logo from '../../assets/header-logo.png'
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home() {

  const navigate = useNavigate();
  
  return (
    <div className="container">
      <div className="header">
         <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="hero-section">
         <div className="hero-text-container">
            <h1>Struggling to figure out which ad is actually giving you results ?</h1>
            <p className="hero-title gradient-text">Meet Trackocity!</p>
            <p className='description-text'>You all-in-one attribution tool which will accurately tell you which campaign , ad set , ad or platform is deleivering results! it removes all the guesswork from the equation</p>
            <button onClick={() => navigate('/signin')} className="free-trial-btn">Start Your Free Trial Today</button> 
         </div>
      </div>
    </div>
  )
}

export default Home
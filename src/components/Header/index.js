import {FaGooglePlay} from 'react-icons/fa'
import './index.css'

const Header = () => (
  <div className="background">
    <img
      src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1695189184/hands-5482892_1280_kirbdk.png"
      className="image"
      alt="logoImage"
    />

    <div className="middleSection">
      <p className="para">Home</p>
      <p className="para">Health Conditions</p>
      <p className="Lab">Lab Tests</p>
      <p className="para">Medicines</p>
      <button className="buttons">For patients</button>
      <button className="buttons">For Hospitals</button>
    </div>

    <div className="rightSide">
      <button className="playStore">
        <FaGooglePlay className="googleIcon" />
        <p className="text">Play Store</p>
      </button>
    </div>
  </div>
)

export default Header

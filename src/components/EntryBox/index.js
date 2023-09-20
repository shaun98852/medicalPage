import {IoMdPerson} from 'react-icons/io'
import {MdCall} from 'react-icons/md'
import {FaLocationDot} from 'react-icons/fa'

import './index.css'

const EntryBox = () => (
  <div className="entryBox">
    <div className="leftSection">
      <div className="topSection">
        <p className="topPara">Fill in the details to get a call!</p>
        <div className="userInput">
          <IoMdPerson className="userIcon" />
          <input type="text" className="inputbox" placeholder="Full Name" />
        </div>

        <div className="userInput">
          <IoMdPerson className="userIcon" />
          <input type="text" className="inputbox" placeholder="Phone Number" />
        </div>

        <div className="userInput">
          <IoMdPerson className="userIcon" />
          <input type="text" className="inputbox" placeholder="Location" />
        </div>

        <div className="checkBox">
          <input type="checkbox" className="checkBoxs" />
          <p className="textCheckbox">
            By Continuing, you agree to our T&C and privacy policy
          </p>
        </div>

        <button className="button">Proceed</button>
      </div>
    </div>

    <div className="rightBox">
      <img
        src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1695192654/pngwing.com_fojpse.png"
        className="rightImage"
      />
    </div>
  </div>
)

export default EntryBox

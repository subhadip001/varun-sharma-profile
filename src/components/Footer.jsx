import React from 'react'
import '../css/footer.scss'
import linkedin from "../assets/footer/linkedin.png"
import instagram from "../assets/footer/instagram.png"
import twitter from "../assets/footer/twitter.png"
import email from "../assets/footer/email.png"
import youtube from "../assets/footer/youtube.png"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footercontent">
          <h2>Lab Address</h2>
        <div className="socialconnect">
          <h2>Social Connect</h2>
          <div className="icons">
            <img src={linkedin} alt="" />
            <img src={email} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
        <form action="">
            <h3>Interested students may contact:</h3>
            <label htmlFor="name">Name(Required)</label> <br />
            <input type="text" name='name' required={true}/>
            <br />
            <label htmlFor="email">Email(Required)</label> <br />
            <input type="email" name='email' required={true}/>
            <br />
            <label htmlFor="yourcv">Your CV(Required)</label> <br />
            <input type="file" name='yourcv' required={true}/>
            <br />
            <label htmlFor="message">Message(Optional)</label> <br />
            <input type="text" name='message'/>
            <br />
            <button>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Footer
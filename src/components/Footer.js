import React from 'react';

function Footer() {
  return(
    <div className="footer-container">
      <div className="footer">
        <hr />
        <div className="newsletter">
          <form>
            <div className="title">NYHETSBREV</div>
            <p>Abonner på vårt nyhetsbrev og ta del av seineste nytt og unike tilbud</p>
            <input type="email" name="_replyto" placeholder="your@email.com" />
            <input type="submit" value="Send" />
          </form>
        </div>

        <hr />

        <div className="socials">
          Følg oss
          <br />
          <i className="icon fab fa-instagram"></i>
          <i className="icon fab fa-facebook-f"></i>
          <i className="icon fab fa-twitter"></i>
        </div>

        <hr />
        Created by <a href="https://www.isaks.io">isaks.io</a>
      </div>
    </div>
  );
}

export default Footer;
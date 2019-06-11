import React from 'react';

function Footer() {
  return(
    <div className="footer-container">
      <hr />
      <div className="newsletter">
        <form>
          <div className="title">NYHETSBREV</div>
          <p>Abonner på vårt nyhetsbrev og ta del av seineste nytt og unike tilbud</p>
          <input type="email" name="_replyto" placeholder="your@email.com" />
          <input type="submit" value="Send" />
        </form>
      </div>
      Footer, created by isaks.io
    </div>
  );
}

export default Footer;
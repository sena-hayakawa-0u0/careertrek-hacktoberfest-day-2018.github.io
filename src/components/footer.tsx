import * as React from 'react';

import bizreachIcon from '../images/bizreach-icon.png';
import careerTrekIcon from '../images/careertrek-icon.png';

const Footer = () => (
  <footer
    style={{
      width: '100vw',
      backgroundColor: '#f9f9f9',
      padding: '32px 0 16px 0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 940,
        fontFamily:
          '"Sailec-Bold", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      }}
    >
      <h2 style={{ fontWeight: 200 }}>Our Company Product</h2>
      <div style={LinkWrapperStyle}>
        <img src={bizreachIcon} style={iconStyle} />
        <a href="https://www.bizreach.jp/" target="_blank" style={linkStyle}>
          BizReach
        </a>
      </div>
      <div style={LinkWrapperStyle}>
        <img src={careerTrekIcon} style={iconStyle} />
        <a href="https://www.careertrek.com/" target="_blank" style={linkStyle}>
          CareerTrek
        </a>
      </div>
    </div>
    <div
      style={{
        marginTop: '24px',
        color: '#888',
        textAlign: 'center',
      }}
    >
      <p>
        <small>CareerTrek Hacktoberfest Day 2018</small>
      </p>
    </div>
  </footer>
);

const LinkWrapperStyle = {
  display: 'flex',
};

const iconStyle = {
  display: 'inline-block',
  width: '24px',
  height: '24px',
  marginRight: '8px',
};

const linkStyle = {
  color: '#888',
};

export default Footer;

import * as React from 'react';

interface FooterProps {
    copyright: string;
}

const Footer = ({copyright}: FooterProps) => (
    <footer
    style={{
        backgroundColor: '#582D41',
        color: '#2FFEFE',
        textAlign: 'center',
      }}>
        <p
        style={{
            margin: 0,
        }}
        ><small>{copyright}</small></p>
    </footer>
);

export default Footer;
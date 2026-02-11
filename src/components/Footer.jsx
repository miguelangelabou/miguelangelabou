import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="bg-blue-400 text-white py-6 mx-auto w-full md:w-4/5 md:rounded-t-[200px]">
      <div className="container mx-auto px-4 text-center">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
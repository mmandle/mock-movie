// footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p>Proflix is a Netflix Frontend Clone</p>
            {/* Add more information as needed */}
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p>service@proflix.com</p>
            <p>(123) 456-7890</p>
            {/* Add more contact information as needed */}
          </div>

          {/* More Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">More</h3>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            {/* Add more links or information as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

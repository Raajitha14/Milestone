import React, { useState } from 'react';

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState('');

  const handleAccordionToggle = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? '' : accordionId);
  };

  return (
    <>
      <h1>About Us_Details</h1>
      <div id="accordion">
        <div className={`card ${activeAccordion === 'headingOne' ? 'active' : ''}`}>
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button className="btn btn-link" type="button" onClick={() => handleAccordionToggle('headingOne')}>
                Organization Name
              </button>
            </h5>
          </div>
          <div className={`collapse ${activeAccordion === 'headingOne' ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              <strong>Organization Name:</strong> Travel Adventures
            </div>
          </div>
        </div>
        <div className={`card ${activeAccordion === 'headingTwo' ? 'active' : ''}`}>
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" type="button" onClick={() => handleAccordionToggle('headingTwo')}>
                Address
              </button>
            </h5>
          </div>
          <div className={`collapse ${activeAccordion === 'headingTwo' ? 'show' : ''}`} aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
              <strong>Address:</strong> 1234 Travel Street, Cityville, Country
            </div>
          </div>
        </div>
        <div className={`card ${activeAccordion === 'headingThree' ? 'active' : ''}`}>
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" type="button" onClick={() => handleAccordionToggle('headingThree')}>
                Location
              </button>
            </h5>
          </div>
          <div className={`collapse ${activeAccordion === 'headingThree' ? 'show' : ''}`} aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
              <strong>Location:</strong> Cityville, Country
            </div>
          </div>
        </div>
        <div className={`card ${activeAccordion === 'headingFour' ? 'active' : ''}`}>
          <div className="card-header" id="headingFour">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" type="button" onClick={() => handleAccordionToggle('headingFour')}>
                Contact Details
              </button>
            </h5>
          </div>
          <div className={`collapse ${activeAccordion === 'headingFour' ? 'show' : ''}`} aria-labelledby="headingFour" data-parent="#accordion">
            <div className="card-body">
              <strong>Email:</strong> info@traveladventures.com<br />
              <strong>Phone:</strong> +1 123-456-7890<br />
              <strong>Website:</strong> <a href="https://www.traveladventures.com">www.traveladventures.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;


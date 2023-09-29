'use client'
// components/GoogleMap.js

import React from 'react';

const GoogleMap = () => {
  return (
    <div className="h-full w-full">
<iframe style={{height:'100%', width:'100%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8010838827936!2d36.83966897419997!3d-1.2938420356328117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f113e6b4c1ceb%3A0x833f89d6d3f7ed3e!2sNairobi%20City%20Stadium!5e0!3m2!1sen!2ske!4v1695972895732!5m2!1sen!2ske" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
  );
};

export default GoogleMap;

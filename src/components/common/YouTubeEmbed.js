'use client'

import React from 'react';

const YouTubeEmbed = ({ embedUrl }) => {
  return (
    <div className="w-full h-full  ">


<iframe
src="https://www.youtube.com/embed/3LG9LyDQfkY?si=vokxjr94WcM_OXAN"
  width="560"
  height="315"
  style={{ border: '0' }}
  allowFullScreen // Use camelCase here
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade" // Use camelCase here
></iframe>

    </div>
  );
};

export default YouTubeEmbed;

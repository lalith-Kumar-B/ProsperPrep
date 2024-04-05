import React from 'react';
import ReactPlayer from 'react-player';

function Video({ id, video_id }) {
  return (
    <div key={id} className="rounded-md border border-gray-300 shadow-md overflow-hidden">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${video_id}`}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
}

export default Video;

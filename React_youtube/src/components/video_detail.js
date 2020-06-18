import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>		
	}

	const videoId = video.id.videoId;
	const { title, channelTitle } = video.snippet

	return (
		<div className="video-detail col-lg-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoId}`}></iframe>
			</div>
			<div className="details">
				<div>{title.replace(/&quot;/g,'"')}</div>
				<div className="subtitle">{channelTitle}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
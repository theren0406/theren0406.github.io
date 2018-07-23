import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// const video = props.video;
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-item">
			<div className="media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
					<div className="media-channelTitle">{video.snippet.channelTitle}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;
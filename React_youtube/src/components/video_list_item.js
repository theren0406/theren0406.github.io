import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
	const { thumbnails, title, channelTitle } = video.snippet
	const imageUrl = thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-item">
			<div className="media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{title.replace(/&quot;/g,'"')}</div>
					<div className="media-channelTitle">{channelTitle}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;
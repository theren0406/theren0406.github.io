import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import searchYoutube from 'youtube-api-v3-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// import '../style/style.scss';

const API_KEY = 'AIzaSyANo_LkU_EVFT9u2bzR3XnrfE9KXLp_NNc';

const App = () => {
	const [videos, setVideos] = useState([])
	const [selectedVideo, setSelectedVideo] = useState()

	useEffect(() => {
		videoSearch('coldplay')
	}, []);

	const videoSearch = (query) => {
		searchYoutube(API_KEY, { q: query }, (error, data) => {
			const { items } = data

			setVideos(items)
			setSelectedVideo(items[0])
		}); 
	}

	return (
		<div>
			<SearchBar onSearchTermChange={query => videoSearch(query)}/>
			<VideoDetail video={selectedVideo} />
			<VideoList 
				onVideoSelect={selectedVideo => setSelectedVideo(selectedVideo) }
				videos={videos} />
		</div>
	);
}

ReactDom.render(<App />, document.querySelector('.container'));
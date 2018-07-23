import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import '../style/style.scss';

const API_KEY = 'AIzaSyDe2MozdnWp75mSCBc3pew3feBxIwZ-0k4';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos : [],
			selectedVideo: null
		};

		this.videoSearch('coldplay');		
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (data) => {
			this.setState({ 
				videos: data,
				selectedVideo: data[0]
			});
		console.log(data);
		});
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector('.container'));
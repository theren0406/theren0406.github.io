import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	
	renderPosts() {
		return _.map(this.props.posts, (post) => {
			return (
				<li 
					className="list-item" key={post.id}
					onClick={() => {this.props.history.push(`/posts/${post.id}`)}}
				>
					{post.title}
				</li>
			);
		});
	}

  render() {
    return (
      <div>
      	<div className="text-right">
					<Link className="btn btn-custom" to="/posts/new">
						新增圖書
					</Link>
      	</div>
      	<h3 className="title">圖書列表</h3>
      	<ul>
      		{this.renderPosts()}
      	</ul>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
	return { posts };
}

function MapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
}

export default withRouter(
	connect(mapStateToProps, MapDispatchToProps)(PostsIndex)
	);
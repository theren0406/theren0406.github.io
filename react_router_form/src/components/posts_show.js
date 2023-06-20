import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions/index';


class PostsShow extends Component {
	componentDidUpdate(prevProps) {
		const id = this.props.match.params.id;
		if (id !== prevProps.match.params.id) {
			this.onFetchPost(id)
		}
	}

	componentDidMount() {
		// match the params from route :id
		this.onFetchPost(this.props.match.params.id);
	}

	onFetchPost(id) {
		window.scrollTo(0, 0);
		if (!this.props.post) {
			this.props.fetchPost(id);
		}
	}

	onDeleteClick() {
		const id = this.props.match.params.id;

		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}

	render() {
		// this.props === ownProps
		// avoid the long syntax below
		// this.props.posts[this.props.match.params.id];
		
		const { post, error } = this.props;
		if (error) {
			return <Redirect to="/404"/>
		}
		if (!post) {
			return <div className="loader"></div>
		}
		return (
			<div>
				<Link className="btn btn-custom" to="/">回到列表</Link>
				<div className="content">
					<h3>{post.title}</h3>
					<p>作者 : {post.categories}</p>
					<p>簡介 : <br/>{post.content}</p>
				</div>
				<button
					className="btn btn-danger btn-delete float-right"
					data-toggle="modal" 
					data-target="#delete-modal"
				>
					刪除
				</button>

				{ /* Modal */ }
				<div className="modal fade" id="delete-modal" tabIndex="-1" role="dialog">
					<div className="modal-dialog modal-sm">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">是否確定刪除此筆圖書 ?</div>
							<div className="modal-footer">
								<button className="btn btn-danger" data-dismiss="modal">取消</button>
								<button
									className="btn btn-custom btn-confirm"
									data-dismiss="modal"
									onClick={this.onDeleteClick.bind(this)}
								>確定
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ data }, ownProps) {

	if (!_.isUndefined(data.data)) {
		return {
			...data,
			post: _.find(data.data, { id: parseInt(ownProps.match.params.id) }) 
		}
	}
	return data;
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
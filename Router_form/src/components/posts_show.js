import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions/index';


class PostsShow extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		// match the params from route :id
		if (!this.props.post) {
			const id = this.props.match.params.id;
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
		
		const { post } = this.props;
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

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
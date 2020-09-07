import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectItem } from '../actions';

class DataList extends Component {
  constructor(props) {
    super(props);
  }

  showDeleteModal = (item, e) => {
		$('#delete-modal').modal('show');
		this.props.selectItem(item);
		e.stopPropagation();
  }
  
  listItems() {
    return this.props.data.map((item, index) => {
      return (
        <li key={index} className="item myRow"
          onClick={() => this.props.showEditModal(item)}
        >
          <div className="small-col">{index + 1}</div>
          <div>{item.name}</div>
          <div>{item.phone}</div>
          <div className="email">{item.email}</div>
          <div className="small-col">
            <img src="./img/delete.png" title="刪除此列" alt="delete"
              onClick={(e) => this.showDeleteModal(item, e)}
            />
          </div>
        </li>
      );
    })
  }

  render() {
    return (
      <ul>
        <li className="title myRow">
          <div className="small-col">編號</div>
          <div>姓名</div>
          <div>電話</div>
          <div className="email">電子信箱</div>
          <div className="small-col"></div>
        </li>
        {this.listItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
	return { 
    data: state.data,
		item: state.item
	 };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
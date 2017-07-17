import React, {
	Component
} from 'react';

class Comment extends Component {

	//处理删除相关操作
	 _delInfo(e){
		if(this.props.delData){
		 	this.props.delData(this.props.index);

	 	}
	 }
	 
	render() {
		return (
			<div className="content">
				<div className="id"><span className="id-span">{this.props.comment.id}</span>:</div>
				<p className = "infos" >{this.props.comment.content}</p>
				<span className="del" onClick={this._delInfo.bind(this)}>删除</span>
				<span className="time">发表于：{this.props.comment.curTime} </span>
			</div>
		)
	}
}
export default Comment;

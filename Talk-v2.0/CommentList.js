import React, {
	Component
} from 'react';
import Comment from './Comment';
class CommentList extends Component {

	//处理删除相关操作
	handleDeleteData (index) {
	 if (this.props.delData) {
		 this.props.delData(index)
	 }
 }
	render() {
		return (
			<div className="c-list">
			{this.props.contents.map((comment,i)=><Comment comment={comment} key={i} index={i} delData={this.handleDeleteData.bind(this)}/>)}{
			}
			</div>
		)
	}
}
export default CommentList;

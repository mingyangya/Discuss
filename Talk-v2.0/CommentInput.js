import React, {
	Component
} from 'react';
import Fun from '.././function/Function';

export default class CommentInput extends Component {
constructor(){
	super();
	this.state={
		id:'',
		content:'',
		curTime:''
	}
}
//处理用户姓名
inputChange(e){
	this.setState({id:e.target.value});
}
//处理讨论信息
contentChange(e){
	this.setState({content:e.target.value});
}

//处理信息提交操作
handleClick(){
	if(this.props.onData){
		this.props.onData({
			id:this.state.id,
			content:this.state.content,
			curTime:Fun.getLocalTime()
		});
	}
	//清空输入内容
	this.setState({content:''});
}

//缓存用户id

handleUsernameBlur (event) {
	this._saveId('id',event.target.value)
}
_saveId(key,value){
	Fun.setItem(key,value);
}
_loadId(){
	Fun.getItem('id');
}
componentWillMount () {
	this._loadId();
}

	render() {
		return (
			<div className="c-input">
				<div className="item item-input">
					<label htmlFor="name">用户名:</label>
					<input type="text" name="name"  onChange={this.inputChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)} value={this.state.id}/>
				</div>
				<div className="item item-textarea">
					<label htmlFor="content">评论内容:</label>
					<textarea name="content" id="talk" cols="30" rows="7" onChange={this.contentChange.bind(this)} value={this.state.content}></textarea>
				</div>
				<div className="upload"><button className="btn" onClick={this.handleClick.bind(this)}>发布</button></div>
			</div>
		)
	}
}

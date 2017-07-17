import React, { Component } from 'react';
import './index.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
/**
*评论界面的构件
*@
*/
class App extends Component {
  constructor(){
    super();
    this.state={
      contents:[]
    }
  }
//加载localStorage中的数据信息，用于页面的信息渲染
_loadData(){
  let contents=localStorage.getItem('contents');
  if(contents){
    contents=JSON.parse(contents);
    this.setState({contents:contents});
  }
}
//储存用户数据到localStorage中
_saveData(contents){
  localStorage.setItem('contents',JSON.stringify(contents));
}
//页面被渲染之前执行,获取页面的数据
componentWillMount(){
  this._loadData();
}
//处理删除信息相关操作
_delData(index){
  const  contents=this.state.contents;
  contents.splice(index,1);
  this.setState({'contents':contents});
  this._saveData(contents);
}

  // 接受子组件传递的数据
  handleData(data){
    //console.log(data)
    if(!data) return ;
    if(!data.id) return alert('请输入用户名！')
    if(!data.content)return alert('内容不能为空！')
    const contents=this.state.contents;
    contents.unshift(data);
    this.setState({contents:contents});
    // 存储contents数据
    this._saveData(contents);
  }

    render() {
      return (
        <div className="c-app">
  			<CommentInput onData={this.handleData.bind(this)}/>
  			<CommentList contents={this.state.contents} delData={this._delData.bind(this)}/>
  			</div>
      );
    }
}

export default App;

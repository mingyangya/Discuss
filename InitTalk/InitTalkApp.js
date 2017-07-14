import React, {
  Component
} from 'react'
import TalkList from './TalkList'
import TalkInput from './TalkInput'
import './index.css';
/**
 * 对构建整体结构
 * @param 
 */
class InitTalkApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    }
  }

  /**
   * 接受子组件talkInput传入的信息并进行处理
   * @param 
   * 
   */
  handleData(data) {

    this.state.comments.push(data)
    this.setState({
      comments: this.state.comments
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <TalkInput onData={this.handleData.bind(this)} />
        <TalkList comments={this.state.comments}/>
      </div>
    )
  }
}

export default InitTalkApp
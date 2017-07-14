import React, {
  Component
} from 'react'

class TalkInput extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      content: ''
    }
  }
  inputChange(e) {
    this.setState({
      id: e.target.value
    })
  }
  contentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  /**
   * 对信息进行提交
   * @param 
   */
  handleClick() {

    if (this.props.onData) {
      this.props.onData({
          id: this.state.id,
          content: this.state.content
        }

      );
    }
    this.setState({
      content: ''
    })
  }


  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input onChange={this.inputChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea  onChange={this.contentChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleClick.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default TalkInput
import React, {
  Component
} from 'react'
/**
 * 对评论信息进行展示
 * @param 
 */
class Talk extends Component {
  render() {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.talk.id} </span>：
        </div>
        <p>{this.props.talk.content}</p>
      </div>
    )
  }
}

export default Talk
import React, {
  Component
} from 'react'
import Talk from './Talk'
/**
 * 对评论信息进行展示
 * @param 
 */
class TalkList extends Component {

  render() {
    return (
      <div>
         {this.props.comments.map((c,i)=><Talk talk={c} key={i} />)}
      </div>
    )
  }
}

export default TalkList
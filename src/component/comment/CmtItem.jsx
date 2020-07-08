import React from 'react';
// 评论列表组件
export default class CmtItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{border:'1px solid #000',margin:'10px 0'}}>
        <h3>评论人：{this.props.user}</h3>
        <h5>评论内容：{this.props.content}</h5>
      </div>
    );
  }
}

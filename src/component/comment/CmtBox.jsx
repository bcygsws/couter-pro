import React from 'react';
// 评论列表组件
export default class CmtBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <label>评论人：</label>
        <br />
        <input type="text" ref="user" />
        <br />
        <label>评论内容：</label>
        <br />
        <textarea cols="30" rows="6" ref="content"></textarea>
        <br />
        <input
          type="button"
          value="发表评论"
          onClick={this.submitComment.bind(this)}
        />
      </div>
    );
  }
  submitComment() {
    // 1.获取评论人和评论内容
    // 在jQuery中有text()方法和val()方法来获取值，但是注意text()方法只能获取textarea的初始值，textarea中内容变化后就
    // 获取不到了，需要使用val()来获取。综上，js中获取textarea内容值最好使用value属性，而jQuery中用val()方法来获取
    var cmtInfo = {
      user: this.refs.user.value,
      content: this.refs.content.value,
    };
    // 2.从本地存储中获取之前的评论数组,短路运算第二个操作数，表示没有存储内容时
    var list = JSON.parse(localStorage.getItem('cmt')) || [];
    // 3.把本条数据unshift原数组前面去
    list.unshift(cmtInfo);
    // 4.把新数组存放到本地存储localStorage中
    localStorage.setItem('cmt', JSON.stringify(list));
    // 5.清空文本框和多行文本输入框中的内容，方便下次输入内容
    this.refs.user.value = this.refs.content.value = '';
    // 每次添加完新内容，就重新更新组件
    this.props.reload();
  }
}

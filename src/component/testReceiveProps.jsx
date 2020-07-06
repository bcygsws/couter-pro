import React from 'react';
import propTypes from 'prop-types';
// 这是父组件
export default class TestReceiveProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '这是父组件中的msg消息',
    };
    // 在构造函数中props可以直接接收当前组件所在父组件被传入的属性值
    console.log(props);
  }
  changedValue = () => {
    console.log(this);
    this.setState({
      msg: '张三李四王五',
    });
  };
  render() {
    return (
      <div>
        <h1>这是父组件</h1>
        <input
          type="button"
          value="修改父组件的state值"
          onClick={this.changedValue}
        />
        <hr />
        <Son pmsg={this.state.msg}></Son>
      </div>
    );
  }
}
// 这是子组件
class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>这是子组件---{this.props.pmsg}</h3>
      </div>
    );
  }
  //   组件将要接收新的props属性值
  //   注意：
  //   1.初始渲染的时候，这个接收了新属性值的生命周期函数是不会被执行的
  //   2.点击按钮改变时，父组件的state值也是传入子组件的属性值，发生改变，则该Son子组件的生命周期函数才会执行
  componentWillReceiveProps(nextProps) {
    console.log('属性改变了，属性改变生命周期函数执行了');
    // 那么传递给子组件的属性值是不是最新的呢？不是，结合React生命周期图
    // 注意：1.在componentWillReceiveProps被触发的时候，我们使用this.props来获取属性值时，拿到的属性值不是最新的，而是上一次的
    //2.如果要拿到最新的属性值，要使用这个生命周期函数的参数列表
    console.log(this.props.pmsg + '---' + nextProps.pmsg); //这是父组件中的msg消息    不是最新的属性值
  }
}

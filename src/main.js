/* 这是js入口文件 */
import React from 'react';
import ReactDOM from 'react-dom';
// 导入组件Counter
import Counter from './component/Counter.jsx';
ReactDOM.render(
  <div>
    <Counter initcount={3}></Counter>
    <hr />
    {/* 父组件中没有传属性值，initcount，在子组件中渲染时，会检测是否定义了defaultProps属性就拿来使用，{this.props.initcount} */}
    <Counter initcount="哈哈，我是张翰啊"></Counter>
  </div>,
  document.getElementById('app'),
);

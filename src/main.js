/* 这是js入口文件 */
import React from 'react';
import ReactDOM from 'react-dom';
// 导入组件Counter
import Counter from './component/Counter.jsx';
// 导入子组件TestReceiveProps
import Test from './component/testReceiveProps.jsx';
// 导入子组件BindThis
import BindThis from './component/BindThis.jsx';
// 评论列表组件
import CmtList from './component/comment/CmtList.jsx';
import Com1 from './component/Context.jsx';
// const l1 = React.createElement('li', null, 'one');//列表项不设置key，将提示警告:Warning: Each child in a list should have a unique "key" prop.
// const l1 = React.createElement('li', { key: 1 }, 'one'); //列表项不设置key，将提示警告:Warning: Each child in a list should have a unique "key" prop.
// const l2 = React.createElement('li', { key: 2 }, 'two');
// // const content = React.createElement('ul', { title: '这是一个ul列表' }, l1, l2);
// const content = React.createElement('ul', { title: '这是一个ul列表' }, [
//   l1,
//   l2,
// ]);
// ReactDOM.render(content, document.getElementById('app'));
ReactDOM.render(
  <div>
    {' '}
    {/* <Couter></Couter> 由于定义组件的时候，为该组件设定了启动参数initcount(defaultProps)，所以即使不在Counter标签中插入initcount也是可以的*/}
    <Counter initcount={0}> </Counter>
    <hr />{' '}
    {/* 父组件中没有传属性值，initcount，在子组件中渲染时，会检测是否定义了defaultProps属性就拿来使用，{this.props.initcount} */}{' '}
    {/*  <Counter initcount="哈哈，我是张翰啊"></Counter> */}
    <Test param={1}></Test>
    <hr />
    <BindThis></BindThis>
    <CmtList></CmtList>
    <Com1></Com1>
  </div>,
  document.getElementById('app'),
);

/* 这是js入口文件 */
import React from 'react';
import ReactDOM from 'react-dom';
// 要渲染的数据
/* 
CommentList = [
    { user: '张三', content: '哈哈，沙发' },
    { user: '张三2', content: '哈哈，板凳' },
    { user: '张三3', content: '哈哈，凉席' },
    { user: '张三4', content: '哈哈，砖头' },
    { user: '张三5', content: '哈哈，楼下山炮' }
]
*/
import CommentList from './components/comment1/CommentList.jsx';
// 导入样式文件CommentList.css 注：在此处导入是全局样式
import './css/CommentList.css';
// 封装一个评论项组件，该组件由于不需要私有数据，只渲染即可
// function CommentItem(props) {
//   return (
//     <div>
//       <h1>评论人：{props.user}</h1>
//       <h3>评论内容：{props.content}</h3>
//     </div>
//   );
// }
// 组件有私有数据，使用有状态组件来实现
// class CommentList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cmt: [
//         //定义私有列表的数据
//         { user: '张三', content: '哈哈，沙发' },
//         { user: '张三2', content: '哈哈，板凳' },
//         { user: '张三3', content: '哈哈，凉席' },
//         { user: '张三4', content: '哈哈，砖头' },
//         { user: '张三5', content: '哈哈，楼下山炮' },
//       ],
//     };
//   }
//   // 在有状态组件中，render是必须的，表示渲染哪些虚拟DOM元素并展示出来
//   render() {
//     // 循环渲染方式1：
//     // 最快想到的方式是我们创建多个标签对象数组，然后 { 数组名 } ，就可以渲染列表(不推荐)
//     // var arr = [];
//     // this.state.cmt.forEach((element) => {
//     //   arr.push(<h1>{element.user}</h1>);
//     // });
//     {
//       /* return <div>这是评论列表组件：{arr}</div> */
//     }

//     // 渲染方式2：
//     // 我们可以在jsx语法内部使用数组的map函数，遍历数组的每一项，然后使用map返回的新数组
//     return (
//       <div>
//         {/* 返回<h1>>{item.user}</h1>组织成的新数组，新数组在 {}实现渲染 */}
//         {this.state.cmt.map((item, i) => {
//           //数组的map方法：Calls a defined callback function on each element of an array, and returns an array that contains the results. map将数组的每一项拿出来，返回一系列新数组
//           // 向子组件传值的方法 user={item.user} content={item.content}
//           {
//             /* <div key={i}>
//               {/* 对于下面内容，只是完成数据的渲染，不涉及状态，可以使用无状态组件(上面定义的fuction函数)完成渲染 */
//           }
//           {
//             /*  <h1>评论人：{item.user}</h1>
//               <h3>评论内容：{item.content}</h3>
//             </div> */
//           }
//           // return (<CommentItem user={item.user} content={item.content} key={i}></CommentItem>);
//           // 上面分开写属性很繁琐，使用属性扩散的方式更好
//           return <CommentItem {...item} key={i}></CommentItem>;
//         })}
//       </div>
//     );
//     // 渲染方式3：将61~62代码抽象成一个无转态组件<CommentItem></CommentItem>，并以属性值的方式向子组件CommentItem传参
//   }
// }
ReactDOM.render(
  <div>
    <CommentList></CommentList>
  </div>,
  document.getElementById('app'),
);

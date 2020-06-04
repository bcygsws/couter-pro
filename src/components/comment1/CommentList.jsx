// 导入组件和生命周期依赖的包
import React from 'react';
import CommentItem from './CommentItem.jsx';
// 需求渲染列表数据，数据是某个子组件私有，就使用有状态组件(class类创建)来实现
export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmt: [
        //定义私有列表的数据
        { user: '张三', content: '哈哈，沙发' },
        { user: '张三2', content: '哈哈，板凳' },
        { user: '张三3', content: '哈哈，凉席' },
        { user: '张三4', content: '哈哈，砖头' },
        { user: '张三5', content: '哈哈，楼下山炮' },
      ],
    };
  }
  // 在有状态组件中，render是必须的，表示渲染哪些虚拟DOM元素并展示出来
  render() {
    // 循环渲染方式1：
    // 最快想到的方式是我们创建多个标签对象数组，然后 { 数组名 } ，就可以渲染列表(不推荐)
    // var arr = [];
    // this.state.cmt.forEach((element) => {
    //   arr.push(<h1>{element.user}</h1>);
    // });
    {
      /* return <div>这是评论列表组件：{arr}</div> */
    }

    // 渲染方式2：
    // 我们可以在jsx语法内部使用数组的map方法：map方法的作用是创建一个新数组。其结果是该数组中的每个元素都调用一次提供的函数后返回
    return (
      <div>
        {/* 注意：在jsx语法中，如果使用style，不接收字符串，只接收对象。{{键：值}} ，外层花括号表示写js代码，内层花括号是对象的括号*/}
        <h1 className="title">评论列表案例</h1>
        {/* 返回<h1>>{item.user}</h1>组织成的新数组，新数组在 {}实现渲染 */}
        {this.state.cmt.map((item, i) => {
          //数组的map方法：Calls a defined callback function on each element of an array, and returns an array that contains the results. map将数组的每一项拿出来，返回一系列新数组
          // 向子组件传值的方法 user={item.user} content={item.content}
          {
            /* <div key={i}> 
              {/* 对于下面内容，只是完成数据的渲染，不涉及状态，可以使用无状态组件(上面定义的fuction函数)完成渲染 */
          }
          { 
            /*  <h1>评论人：{item.user}</h1>
              <h3>评论内容：{item.content}</h3>
            </div> */
          }
          // return (<CommentItem user={item.user} content={item.content} key={i}></CommentItem>);
          // 上面分开写属性很繁琐，使用属性扩散的方式更好
          return <CommentItem {...item} key={i}></CommentItem>;
        })}
      </div>
    );
    // 渲染方式3：将61~62代码抽象成一个无转态组件<CommentItem></CommentItem>，并以属性值的方式向子组件CommentItem传参
  }
}

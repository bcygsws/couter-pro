// 导入react组件和生命周期依赖的包
// 注意：样式优化的4种方式：
import React from 'react';
// c.样式优化3：样式也是js代码，可以继续抽离出来，成为一个模块，再在本文件中引入即可
// import inlineStyle from './cmtStyle.jsx';
// d.样式优化4：导入评论项的样式文件-CommentItem.css样式。但由此也会带来一个问题，当父组件和子组件中，有相同类样式的时候，会出现样式的混合覆盖情况，
// a.如何解决呢？在vue中很明显，我们使用scoped指令来限制父子组件之前重复类样式名称导致的样式覆盖问题，而react中指令这个概念。
// b.在react中有css样式表模块化的概念
// c.下面的这种import '路径'的方式，并不是样式表模块化，这种形式import cssStyle from '路径'这种方式才是样式表模块化

/*
注意：对于.css文件，vscode选择的编程语言是scss。根据自身配置，发现使用Prettier格式化代码后，css文件一切正常，此时最好关闭
Formatting格式化工具
 */
// import '../../css/CommentItem.css';//非模块化的方式
import itemStyle from '../../css/CommentItem.css'; //样式表模块化的方式
// 默认情况下，如果没有为css启用模块化，这种模块化的方式导出的自定义对象是一个空对象{},
console.log(itemStyle);

export default function CommentItem(props) {
  // 注意：在react的style样式规则中，如果属性值的单位是px,则px可以省略，直接写一个数值即可
  // a.样式优化1：行内样式既然写在对象中，可以提取出来
  // const boxStyle = {
  //   border: '1px solid grey',
  //   margin: '10px 0',
  //   paddingLeft: '15px',
  // };
  // const titleStyle = { fontSize: 16, color: 'purple' };
  // const contentStyle = { fontSize: 14, color: 'red' };
  // b.样式优化2：把所有样式对象封装到唯一的一个对象中
  // const inlineStyle = {
  //   boxStyle: {
  //     border: '1px solid grey',
  //     margin: '10px 0',
  //     paddingLeft: '15px',
  //   },
  //   titleStyle: { fontSize: 16, color: 'purple' },
  //   contentStyle: { fontSize: 14, color: 'red' },
  // };

  // c.如果不想把css样式，以html的形式写在html中，怎么办呢？
  // 使用模块化的样式：引用方法：{对象.类样式名称}
  return (
    <div className={itemStyle.box}>
      <h1 className={itemStyle.title}>评论人：{props.user}</h1>
      <h3 className={itemStyle.body}>评论内容：{props.content}</h3>
    </div>
  );
}

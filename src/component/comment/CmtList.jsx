// 导入React组件和生命周期函数需要的包
import React from 'react';
import CmtItem from './CmtItem.jsx';
import CmtBox from './CmtBox.jsx';
// 创建评论子组件
export default class CMTList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { user: '张三', content: '123' },
        { user: '李四', content: '1232243' },
        { user: '小红', content: '123ee' },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>这是评论列表组件</h1>
        {/* 发表评论的组件 */}
        <CmtBox></CmtBox>
        {/* 循环渲染内容的组件---注意渲染循环列表，使用map方法 */}
        {this.state.list.map((item,index) => {
          return <CmtItem {...item} key={index}></CmtItem>;
        })}
      </div>
    );
  }
}

// 导入React组件和生命周期函数需要的包
import React from 'react';
import CmtItem from './CmtItem.jsx';
import CmtBox from './CmtBox.jsx';
// 创建评论子组件
export default class CMTList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: [
      //   { user: '张三', content: '123' },
      //   { user: '李四', content: '1232243' },
      //   { user: '小红', content: '123ee' },
      // ],
      // 不把数据写死，让其从本地存储中获得
    };
  }
  // 该组件挂载在页面前，就完成对数据的初始化
  // 但是这样做是不够的，初始化阶段是可以很好的完成本地存储（key="cmt"）的渲染，但是再在页面中添加1条信息，需要手动刷新页面后才能看到。为此，我们需要在点击按钮（在子组件中）后，就立即刷新内容。涉及到父子组件之间的传值了
  componentWillMount() {
    this.initState();
  }
  initState = () => {
    this.setState({
      list: JSON.parse(localStorage.getItem('cmt')) || [],
    });
  };
  render() {
    return (
      <div>
        <h1>这是评论列表组件</h1>
        {/* 发表评论的组件 */}
        {/* CmtList组件向子组件CmtBox传值，以自定义属性的方式传值。在CmtBox中拿到属性值后调用即可。
        1.在Vue中，父组件向子组件传值，对于子组件属性使用props:[]来接收。而对于父组件传递给组件的方法，则使用this.$emit('方法名')来接收。
        2.而在React中父组件传递给子组件的属性和方法，子组件都是以属性的方式this.props.*来接收，更简单一些 */}
        <CmtBox reload={this.initState}></CmtBox>
        {/* 循环渲染内容的组件---注意渲染循环列表，使用map方法 */}
        {this.state.list.map((item, index) => {
          return <CmtItem {...item} key={index}></CmtItem>;
        })}
      </div>
    );
  }
}

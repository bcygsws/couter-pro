// 导入react组件和生命周期依赖的包
import React from 'react';
// 封装组件的目的：是为了团队协作开发更为方便，有的人只负责开发组件，有的只负责调用别人的组件

// propTypes属性校验，在15.*版本之后，已经从react包中分离出来，需要多装一个prop-types包做属性校验
import PropTypes from 'prop-types';
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    // 初始化组件的私有状态-保存的是组件的私有数据
    this.sate = {};
  }
  //   在封装一些组件时，组件内部肯定有一些数据是必须的。哪怕用户没有设置相关的启动参数，这时候，组件也应该为自己提供一个启动参数
  // 在react中，使用defaultProps设置组件的默认属性值
  static defaultProps = {
    initcount: 0,
  };
  // 这是创建一个propTypes对象。作用：在这个对象中，可以把传递过来的属性作类型校验
  // 如果要为传递过来的属性作类型校验，必须安装React提供的第三方包，叫做 prop-types,prop-types这个包在v.15.*之前，还没有抽离出来，那个时候还和react包在一起。在v15.*版本以后，prop-types包已经被抽来出来了

  static propTypes = {
    initcount: PropTypes.number, //使用prop-types包，来进行校验，如果在父组件中添加的属性不是number数值型，则弹出警告
  };
  render() {
    return (
      <div>
        <h1>这是Counter计数器组件</h1>
        <input type="button" value="+1" />
        <hr />
        {/* 接收在父组件中，main.js中，向子组件传递的属性值 */}
        <h3>当前的数量是：{this.props.initcount}</h3>
      </div>
    );
  }
}

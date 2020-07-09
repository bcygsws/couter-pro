import React from 'react';
// 属性校验childContextTypes同样用到包react-types
import ReactTypes from 'prop-types';

// 1.父亲向孙子组件传值先试验一层一层的拿到值---上面注释的一行
// 2.采用Context(语境 环境 上下文)的方法
export default class Com1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }
  render() {
    return (
      <div>
        <h1>这是父组件</h1>
        {/* <Com2 color1={this.state.color}></Com2> */}
        <Com2></Com2>
      </div>
    );
  }
  // 使用Context实现父组件向孙子组件传值的
  //   注意：一组固定名称 getChildContext 静态成员在父组件中名称为childContextTypes，而在子组件中直接就是contextTypes,组件中使用父组件的这种方式传递过来的数据时，使用this.context.键值（本例为color）
  /* 记忆小诀窍：getChildContextTypes  前3个单词方法，后3个单词父组件静态属性，后2个单词子组件对应的校验静态变量名，都改成驼峰命名的形式。1个方法 2个属性 */
  // 步骤：1.在父组件中，定义函数function,该函数有个固定的名字，getChildContext()。该函数内部必须返回一个对象，这个对象就是要
  // 共享给所有子孙的数据
  getChildContext() {
    return { color: this.state.color };
  }
  //步骤2：在父组件使用属性校验，规定传递一下传递给子组件的数据类型。需要定义一个静态的static变量，变量名固定为childContextTypes,至此父组件的设定完成
  static childContextTypes = {
    color: ReactTypes.string,
  };
  //步骤3：哪一层的子组件要拿到父组件传递的数据。上来之后，先去校验一下父组件传递过来的数据类型。
}
class Com2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>这是子组件</h2>
        {/* <Com3 color2={this.props.color1}></Com3> */}
        <Com3></Com3>
      </div>
    );
  }
}
class Com3 extends React.Component {
  //子组件先校验再拿数据的类型，静态变量名是contextTypes，特别注意
  static contextTypes = {
    color: ReactTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <h3 style={{color:this.props.color2}}>这是孙子子组件</h3> */}
        <h3 style={{ color: this.context.color }}>
          这是孙子子组件---{this.context.color}
        </h3>
      </div>
    );
  }
}

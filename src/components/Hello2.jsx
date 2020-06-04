// 創建組件时先导入和组件以及组件生命周期相关的包react
import React from 'react';
export default class Hello2 extends React.Component {
  // 在constructor构造器中，如果要访问props属性，不能使用this.props(不同于render函数)，需要在构造器参数列表中显示定义一个参数
  // 如果写了构造器函数，必须在构造器函数中调用一下super()方法，否则将报错（missing super() call in constructor）
  constructor(props1) {
    super(props1);
    // constructor构造器的形参props1输出的结果就是render函数中的this.props
    console.log(props1); //在constructor中直接调用将报错，为此需要显示的设定一个形参，不一定是props,也可以是其他名称

    // 注意：这里的this.state表示当前组件实例的私有数据对象，就好比vue中，组件实例的 data(){return{}}函数
    // 如果要使用组件上的数据，使用this.state.*即可
    this.state = {
      msg: '一曲新词酒一杯',
      info: '瓦塔西***',
    };
  }
  // 没有写render函数报错：Hello2(...): No `render` method found on the returned component instance: you may have forgotten to define `render`
  // 在render函数中使用props参数(组件标签中定义的属性)，不需要显示定义，直接使用this.props就可以获得
  render() {
    // return null;
    // 没有写return语句报错：Nothing was returned from render.
    /* 
    输出this参数：
    props:{address: "北京博客", info: "黑马程序员"}
    */
    // 输出组件Hello2的实例
    console.log(this);
    // 如果return中存在两个及其以上的兄弟标签，则外层需要套div,使其具有唯一的根节点
    return (
      <div>
        <h3>这是class类创建的组件中一个h3</h3>
        <h2>
          外界传递过来的数据：{this.props.address}---{this.props.info}
        </h2>
      </div>
    );
  }
}

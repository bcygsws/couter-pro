// 导入react组件和生命周期依赖的包
import React from 'react';
// 封装组件的目的：是为了团队协作开发更为方便，有的人只负责开发组件，有的只负责调用别人的组件

// propTypes属性校验，在15.*版本之后，已经从react包中分离出来，需要多装一个prop-types包做属性校验
import PropTypes from 'prop-types';
// ES6语法
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    // 初始化组件的私有状态-保存的是组件的私有数据
    this.state = {
      // 把外界传递过来的initcount，传递给this.state。这样就把count改为可读可写的属性。就能实现count值+1的操作了
      // count: this.props.initcount,
      // 注意：构造函数中props属性，不需要this.props引用。而是存在构造函数中定义了一个参数props，就可以直接调用了
      count: props.initcount,
    };
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
  /* 对比：react中的componentWillMount相当于vue中的created生命周期函数 */
  // 钩子函数：在组件尚未挂载到页面上时执行的
  // 此时，虚拟DOM也没有开始创建，在render阶段才开始渲染虚拟DOM
  componentWillMount() {
    // 输出结果为null,原因是:依照上面所说，此时虚拟DOM只是将要开始渲染，还没开始渲染
    console.log(document.getElementById('myh3')); //null
    //在main.js 中ReactDOM.render()中传入的属性initcount。如果多处定义，则多次分别输出：
    // 第一次输出：null 3 第二次输出：null "哈哈，我是张翰啊" 原因是：该子组件在ReactDOM.render()被调用了两次
    console.log(this.props.initcount);
    // 验证在本阶段可以调用组件中自定义的函数
    this.myselfFunc();
    console.log(this); //在生命周期函数中this直接指得是Counter组件
  }
  // 当执行到render函数生命周期阶段：开始渲染虚拟DOM了，完成了虚拟DOM的渲染，并存放在内存中，但是页面上尚未真正显示DOM元素
  // 在组件运行阶段，每当调用render函数时，页面上的元素还是旧的
  render() {
    // 在return之前，虚拟DOM也还没有创建。页面上也是空的，拿不到任何元素
    console.log(document.getElementById('myh3')); //null
    console.log(this); //render仍然是生命周期函数，所以
    // 更新阶段的render函数执行---短路运算符&& 和 ||
    console.log(this.refs.h3 && this.refs.h3.innerHTML);
    return (
      <div>
        <h1>这是Counter计数器组件</h1>
        <input type="button" value="+1" id="btn" onClick={this.increment} />
        <hr />
        {/* 接收在父组件中，main.js中，ReactDOM.render()向子组件传递的属性值 */}
        {/* initcount是自增属性，而属性是只读的，为此我们需要借助组件的state，来修改谁 */}
        <h3 id="myh3">
          当前的数量是：{this.props.initcount}
        </h3>
        <h3 id="myh3" ref="h3">当前的数量是：{this.state.count}</h3>
      </div>
    );
    // 当return语句执行完，虚拟dom已经在内存中创建完成了，当仍然没有挂载到页面上
  }
  // 那么，与组件生命组件函数无关，在组件中自定义的函数在componentWillMount阶段能实现调用吗？是可以调用的
  myselfFunc() {
    console.log(this);
    console.log(
      '这是一个与生命周期无关的自定义函数，验证其在componentWillMount阶段能否调用？',
    );
  }
  // 2.使用React提供的事件，区别于JavaScript，事件名称采用驼峰命名法，例如：onClick,而不是onclick。事件点击--onClick={increment} 【按钮】自增的业务逻辑
  // 特别注意：在React中改变state状态值，不要使用this.state.*=值。改变state状态值需要使用
  // this.setState({state中定义的变量名：值});
  increment = () => {
    console.log(this); //非箭头函数时2undefined，箭头函数时表示组件
    // 类似小程序中的事件，this.setState设置才能将state状态值更新，并且同步渲染到页面上
    this.setState({
      // 构造器中this.state定义的组件私有状态，名称为count,一一对应，这里面也是count
      count: this.state.count + 1,
    });
  };
  //当组件挂载到页面上之后，就进入这个生命周期函数。进入这个生命周期后，必然说明页面上已经有了可见的DOM元素了
  componentDidMount() {
    // 在这个函数中，可以操作页面上需要使用的DOM元素。
    // 总结：如果要操作DOM元素，则至少在componentDidMounted阶段，相当于vue中的Mounted阶段
    // console.log(document.getElementById('myh3'));
    console.log(this.props); //initcount参数对象
    // 1.原生的js实现点击事件，为什么非要在这个生命周期函数中加点击事件？原因这个是能够获取到虚拟DOM节点的最早的一个生命周期
    // document.getElementById('btn').onclick = () => {
    //   console.log('ok'); //测试点击事件是否执行
    //   // 点击后，报错：Uncaught TypeError: Cannot read property 'initcount' of undefined at HTMLInputElement.document.getElementById.onclick
    //   console.log(this); //使用普通的函数，this指得就是括号外的被点击对象btn,所以改用箭头函数,this就指向组件实例了
    //   // console.log(this.props);//undefined
    //   // console.log(this.props.initcount); //undefined
    //   // this.props.initcount++; //props中传入的属性值是可读的，无法改变，需要借用this.state私有数据
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // };

    // 2.使用React提供的事件来实现 onClick  C大写
  }
  // 当组件执行完，componentDidMount生命周期函数后，就进入到了运行中的状态。所以这个函数是函数创建阶段最后一个钩子

  // 从这里开始，我们就进入了组件运行中状态
  // 判断组件是否需要更新

  // 最新的值要到componentDidUpdate钩子里才是最新的，提前获取最新值使用参数列表。nextProps和nextState将最新的属性值和状态值获取，分别在存放参数nextProps和参数nextState中
  shouldComponentUpdate(nextProps, nextState) {
    //   // Make sure to return true or false.
    //   // 1.在shouldComponentUpdate中必须返回一个布尔值：true或者false,否则将报上面错误
    //   // return true;
    //   // return false;
    //   // 2.如果返回值为false,则不会继续执行后面的生命周期函数，而是退回到了运行中状态，此时，由于后续的render函数并没有被调用，因此页面不会被更新。但是，组件的state状态已经被修改了
    console.log(this.state.count + '==' + nextState.count);
    //   // 功能需求：如果count值是偶数，则更新页面。如果count值是奇数，则不更新页面
    // return this.state.count % 2 == 0 ? true : false;
    // nextState中提供的永远是及时最新的state状态值
    // 先忽略需求，偶数更新，奇数不更新。让其一直可以更新，以方便观察后续的生命周期函数事件
    // return nextState.count % 2 == 0 ? true : false;
    return true;
  }
  // 知识点：组件将要更新以及ref的使用
  // 组件将要更新，此时尚未更新。在进入这个生命周期函数中，内存中的虚拟DOM是旧的，页面上的DOM元素也是旧的
  componentWillUpdate() {
    // 经过打印分析，得到此时DOM上的打印节点都是旧的。应该慎重操作，可能操作的是旧DOM
    // console.log(document.getElementById('myh3').innerHTML);//打印出来当前数量为0，还是旧的。页面初始打开后，点击+1,此时值已经变成1了
    // 也可以不使用这种原生的方式来获取对象。回想vue中，在标签中定义ref="h3"，然后this.$refs.h3就可以拿到这个原生对象了。在react
    // 中，也差不多。只是引用时，使用this.refs.h3就可以了，没有 $符号了
    // console.log(this.refs.h3.innerHTML);
  }
  //那么问题来了？执行到更新阶段时，会再一次执行render函数，上面的this.refs.h3.innerHTML输出时，怎么处理？还放在第一个render函数中，可能获取不到。但是在这个类中只能写一个render函数。需要借助短路运算符来做连接
  // 组件完成了更新，这是state中的数据，虚拟DOM,页面中的DOM都是最新的了，此时可以放心大胆的操作页面了
  componentDidUpdate() {
    console.log(this.refs.h3.innerHTML);//此时输出是最新的页面DOM了
  }
}

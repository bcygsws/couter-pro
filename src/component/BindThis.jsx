// 创建组件和组件生命周期需要引入的包
import React from 'react';
// 创建BindThis子组件
export default class BindThis extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: '这是默认的message' };
    // 2.绑定方法并传参方式2：在构造函数内部使用bind方法绑定并传参
    // 知识点：bind方法的返回值问题：返回原函数的一个拷贝，并拥有指定的this值和初始参数
    // a.注意：当一个函数调用bind方法改变this指向后，bind函数调用有一个返回值，这个值就是改变this指向的一个函数引用
    // b.注意：bind不会修改原函数的this指向

    // this.changeMsg2.bind(this,'●','☀');//原因是原函数changeMsg2中的this指向，不会因为绑定bind方法后改变
    this.changeMsg2 = this.changeMsg2.bind(this, '●', '☀');
  }
  render() {
    return (
      <div>
        <h1>绑定this并传参的几种方式</h1>
        {/* 箭头函数的方式 */}
        {/* <input
          type="button"
          value="这是绑定this并传参的方式1"
          onClick={this.changeMsg1}
        /> */}
        {/* 1.这是第一种绑定方式，在事件内部使用bind()方法绑定this并传参 */}
        {/* 绑定this并传参的方式，其中bind(this)方法改变this的指向，以让函数内部的this指向bind参数列表中的第一个参数。并且bind()方法第一个参数是this指向，后面若干个参数都是调用时，前面的方法要传递的参数bind(this,arg1,arg2,……)  */}
        {/* bind方法和call/apply之间的区别：bind方法只是修改this的指向，而call/apply方法在修改this指向后，会立即调用前面的函数 */}
        <input
          type="button"
          value="这是绑定this并传参的方式1"
          onClick={this.changeMsg1.bind(this, '★', '♣')}
        />
        <hr />
        <input
          type="button"
          value="这是绑定this并传参的方式2"
          onClick={this.changeMsg2}
        />
        <hr />
        <input
          type="button"
          value="这是绑定this并传参的方式3"
          onClick={() => {
            // 测试一下this的指向---正好是BindThis组件
            console.log(this);
            this.changeMsg3('♣', '▓');
          }}
        />
        <hr />
        {/*在vue中有v-model实现双向数据绑定，但是在React中没有指令这个概念，因此，React默认也不支持双向数据绑定 */}
        {/* React只支持把数据传输到页面，但是无法实现把数据从页面传送到state上保存，也就是React不支持数据的自动逆向传输，只实现了数据的单向绑定 */}
        {/* 注意：如果为表单元素提供了value属性绑定，必须同时提供为表单元素绑定一个叫做readOnly或者提供一个onChange事件。如果是readOnly表示value值是只读的，不能修改。如果是是onChange，表示值能够修改。 */}
        <input
          type="text"
          value={this.state.msg}
          style={{ width: '100%' }}
          onChange={this.txtChange.bind(this)}
          ref="txt"
        />
        <h3>{this.state.msg}</h3>
      </div>
    );
  }
  //   changeMsg1(){男孩 男孩儿
  //       console.log(this);//这里面的this是指undefined
  //   }
  // 这种箭头函数的方式，前面经常使用。我们试着使用bind()方法来绑定this。而不是一个箭头函数的形式
  //   changeMsg1=()=>{
  //     // console.log(this);//这里的this才是BindThis组件
  //     this.setState({
  //         msg:'绑定this并传参数方式1'
  //     });
  //   }
  // 方式1：在点击事件时使用bind绑定调用
  changeMsg1(arg1, arg2) {
    // 都是为了让各自事件处理函数中的this指向为组件类的实例对象
    this.setState({
      msg: '绑定this并传参方式1' + arg1 + arg2,
    });
  }
  // 方式2：在构造函数中赋值调用
  changeMsg2(arg1, arg2) {
    //  上文中b.注意已经提及， bind只是修改了返回值那个拷贝的this指向，原函数中this指向并没有发生改变
    this.setState({
      msg: '绑定this并传参方式2' + arg1 + arg2,
    });
  }
  // 方式3：在点击事件时使用箭头函数
  changeMsg3(arg1, arg2) {
    //  上文中b.注意已经提及， bind只是修改了返回值那个拷贝的this指向，原函数中this指向并没有发生改变
    this.setState({
      msg: '绑定this并传参方式3' + arg1 + arg2,
    });
  }
  // 为文本框绑定txtChange事件
  txtChange(e) {
    console.log('ok');
    // 如果想文本框在触发onChange时，同时把输入的文本内容保存到state中
    // 获取文本框中最新文本的三种方式：
    // 1.使用document.getElementById()来拿
    // 2.使用ref来拿
    console.log(this.refs.txt.value);
    // 3.使用事件对象的参数e来拿---类似小程序中的思路
    console.log(e.target); //表示发生value值改变的事件源对象，即<input type="text"
    console.log(e.target.value);
    this.setState({
      msg: e.target.value,
    });
  }
}

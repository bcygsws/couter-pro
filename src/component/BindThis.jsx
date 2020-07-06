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
        <input
          type="button"
          value="这是绑定this并传参的方式2"
          onClick={this.changeMsg2}
        />
        <hr />
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
  changeMsg1(arg1, arg2) {
    this.setState({
      msg: '绑定this并传参方式1' + arg1 + arg2,
    });
  }
  changeMsg2(arg1, arg2) {
    //  上文中b.注意已经提及， bind只是修改了返回值那个拷贝的this指向，原函数中this指向并没有发生改变
    this.setState({
      msg: '绑定this并传参方式2' + arg1 + arg2,
    });
  }
}

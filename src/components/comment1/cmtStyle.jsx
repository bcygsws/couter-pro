// 既然是是export default了，就可以不必写成 export default inlineStyle{},这种写法将报错
export default {
  boxStyle: {
    border: '1px solid grey',
    margin: '10px 0',
    paddingLeft: '15px',
  },
  titleStyle: { fontSize: 16, color: 'purple' },
  contentStyle: { fontSize: 14, color: 'red' },
};

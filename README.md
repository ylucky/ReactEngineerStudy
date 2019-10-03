#目标：React.js工程师
#ToDoList DEMO

项目介绍：  
yarn install  
yarn start 运行  

1. 【demo1】  
//老的写法  
import ToDoList1 from './ToDoList1';  

2. 【demo2】  
//加入redux,拆分redux  
import ToDoList2 from './ToDoList2';  

3. 【demo3】  
//拆分UI  
import ToDoList3 from './ToDoList3';  

4. 【demo4】  
//redux-thunk中间件  
import ToDoList4 from './ToDoList4';  

5. 【demo5】  
//react-redux  
import store from './todolist5Store';  
import ToDoList5 from './ToDoList5';  
import {Provider} from 'react-redux';  


笔记：  
 [官方网址](https://reactjs.org/)
 react初探
 项目搭建：
 官方脚手架-create-react-app
 项目1.ToDoList
 Fragment 便签占位符
 dangerouslySetInnerHTML 不转义显示html
 htmlFor label的for标签
组件首字母大写
 propTypes  import PropTypes from 'prop-types';
 defaultProps
 虚拟DOM就是一个js对象，用来描述真实的DOM
 index做key值不稳定
 ref={(ul)=>{this.ul=ul}}
 this.setState({},()=>{}) //setState异步函数
 [charles前端数据模拟](https://www.charlesproxy.com/)
 [axios请求](http://www.axios-js.com/)

# redux
 const store = createStore(reducer);

# react-redux
 Provider store reducer
 connect(_mapStateToProps,_mapDispatchToProps)(ToDoList5)
 箭头函数 onClick={()=>this.props.deleteItem(index)}
 connect 容器组件  
 ToDoList5UI组件


#markdown语法
我展示的是一级标题
=================

我展示的是二级标题
-----------------
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

段落的换行是使用两个以上空格加上回车

*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
创建脚注格式类似这样 [^RUNOOB]。
[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项

1. 第一项
2. 第二项
3. 第三项

> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想

> 最外层
> > 第一层嵌套
> > > 第二层嵌套

> 区块中使用列表
> 1. 第一项
> 2. 第二项
> + 第一项
> + 第二项
> + 第三项

`printf()` 函数

```javascript
$(document).ready(function () {
    alert('RUNOOB');
});
```

这是一个链接 [菜鸟教程](https://www.runoob.com)

链接也可以用变量来代替，文档末尾附带变量地址：
这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [runoob]: http://www.runoob.com/
  
  ![alt 属性文本](图片地址)
  
  ![alt 属性文本](图片地址 "可选标题")
  
  
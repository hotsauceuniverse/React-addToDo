import { Component } from "react";
import TodoList from './TodoList'
import TodoListItem from "./TodoListItem";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state ={
      itemNum: 0,
      items: [ // TodoListItem을 관리하는 배열
      ]
    }
  }

  deleteItem(num) {
    const select = document.querySelector('#todo-item' + num)
    if(select) {
      select.remove()
    }
  }

  addItem() {
    const inputText = document.querySelector('#inputText');
    if(inputText.value) {
      const textArray = [...this.state.items] // 깊은 복사
      console.log(textArray)
      // 얕은 복사 : 여러항목을 입력 해도 [Array(2)] 으로 노출됨
      // 깊은 복사 : 여러항목을 입력 하면  [{…}, {…}, {…}, ...] 으로 노출됨 
      // 데이터가 복사가 아닌 참조 / 똑같은 데이터 생성
      textArray.push(<TodoListItem 
        id={this.state.itemNum++} // props로 식별을 위한 itemNum
        text={inputText.value} 
        delete={(num)=>{this.deleteItem(num)}} />)
      this.setState({
        items: textArray
      })
      inputText.value = ""
    }
  }

	render() {
		return (
			<div>
				<input id="inputText" type="text" placeholder="입력"></input>
				<input type="button" value="추가하기" onClick={() => {this.addItem() }}></input>
        <TodoList items={this.state.items} /> {/*props를 이용하여 전달*/}
      </div>
		);
	}
}
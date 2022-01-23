import { Component } from "react";

export default class TodoListItem extends Component {
  check() {
    const checkComponent = document.querySelector('#todo-item' + this.props.id)
    if(checkComponent.style.cssText) {
      checkComponent.style.cssText = 0
    } else {
      checkComponent.style.cssText = "text-decoration: line-through";
    }
  }
  render() {
    return (
      <li id={"todo-item"+this.props.id}>
        <input type="checkbox" onClick={() => {this.check()}} />
        {this.props.text}
        <input type="button" value="일정 삭제" onClick={() => {this.props.delete(this.props.id)}} /> {/* 버튼이 눌릴 때, this.props.delet 이벤트 호출 */}
      </li>
    )
  }
}
import { Component } from 'react'
import Title from './components/Title'
import Contents from './components/contents'

export default class App extends Component {
  render() {
    return (
      <div>
        <Title text='To Do List' />
        <Contents />
      </div>
    )
  }
}

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import Practice from './Practice'

class MyList extends Component {
  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''
    }
  }

  clearList = (e) => {
    console.log('clearing list!')
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange = (e) => {
    // toDoItemArray = this.state.toDoItemArray
    this.setState({
      // set state
      // push the new item
      newItem: e.target.value
    })
    
  }

  addItem = (e) => {    
    e.preventDefault()
    let thisArray = this.state.toDoItemArray
    thisArray.push(this.state.newItem)
    this.setState({
      newItem: '',
      toDoItemArray: thisArray
    })
    
  }

  render() {
    // here we will enable all todo items to be rendered to page
    let toDoItems = this.state.toDoItemArray.map((td, i) => {
      return <ListItems key={'todo ' + i} doThis={td} />
    })
    console.log(toDoItems)
    return (
      <div>
        <h1> Things I should stop procrastinating over: </h1>
        <ul>
            {toDoItems} 
        </ul>
        <button onClick={e => this.clearList(e) }>Clear dat</button>
        <form>
          <input type="text"
          placehoder="Type an item here"
          onChange={e => {this.newItemChange(e)}}
          value={this.state.newItem}
          />
          <button onClick={e => this.addItem(e)}>Add it!</button>
        </form>
      </div>
    )
  }
}

export default MyList;

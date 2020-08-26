import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import Practice from './Practice'

class MyList extends Component {
  render() {
    // here we will enable all todo items to be rendered to page
    let toDoItems = this.props.theList.map((td, i) => {
      return <ListItems key={'todo ' + i} doThis={td} />
    })
    console.log(toDoItems)
    return (
      <div>
        <h1> Things I should stop procrastinating over: </h1>
        <ul>
            {toDoItems} 
            <Practice />
        </ul>
      </div>
    )
  }
}

export default MyList;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'


class MyList extends Component {
  render() {
    let toDoItems = this.props.theList.map((td, i) => {
      return <ListItems key={'todo ' + i} doThis={td} />
    })
    console.log(toDoItems)
    return (
      <div>
        <h1> Things I should stop procrastinating over: </h1>
        <ul>
            {toDoItems} 
        </ul>
      </div>
    )
  }
}

export default MyList;

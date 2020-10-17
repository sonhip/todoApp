import React from 'react';
import './App.css';
import ListItems from "./ListItems.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items:[],
        currentItem:{
          text: '',
          key: ''
        }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
  }
  handleInput = (event) => {
    this.setState({
      currentItem: {
          text: event.target.value,
          key: Date.now()
      } 
    })
  }
  addItem = (event) => {
      event.preventDefault();
      const newItem = this.state.currentItem;

      if(newItem.text!==""){
        const newItems = [...this.state.items, newItem ];
        this.setState({ 
            items: newItems,
            currentItem: {
              text:"",
              key: ""
            }
        }); 
      }
  }
  deleteItem = (key) => {
        const filterItems = this.state.items.filter(item => item.key!==key)
        this.setState({items:filterItems})
  }
 
  setUpdate = (text, key) => {
    const item = this.state.items;
          item.map(item =>{
              if(item.key===key){
                  item.text=text;
            }
    })
    this.setState({items:item})
  }
  render() {
    return (
      <div className="App">
          <header>
            <form id="todo-form" onSubmit={this.addItem}>
              <input type="text" value={this.state.currentItem.text} onChange={this.handleInput} placeholder="todo name..."/>
              <button>Add</button>
            </form>
          </header>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></ListItems>
      </div>
    );
  }
}

export default App;

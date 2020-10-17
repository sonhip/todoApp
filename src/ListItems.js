import React from 'react';
import './ListItems.css'
import { DeleteTwoTone } from '@ant-design/icons'
import FlipMove from 'react-flip-move'
function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item =>{
        return (
            <div className="list" key={item.key}>
                <p>
                    <input id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value, item.key)}} type="text"/>
                    <DeleteTwoTone className="trash" onClick={() =>props.deleteItem(item.key)} ></DeleteTwoTone>
                </p>
            </div>
        )
    })
   return (
        <>
            <FlipMove duration={500} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </>
   )
}
export default ListItems;
import './productComponent.css'
import React, { forwardRef} from 'react';


const Product= forwardRef((props, ref) => {

  
    function add(id){
      props.data[id].quantity = props.data[id].quantity + 1
      props.change([...props.data])
    }

    function sub(id){
      if(props.data[id].quantity-1 >= 0){
        props.data[id].quantity = props.data[id].quantity - 1
        props.change([...props.data])
      }else{
        if(window.confirm("Do You Wish To Remove This Item ?")){
          remove(id)
        }
      }
      }
    
    function remove(id){
      props.data.splice(id,1)
      props.change([...props.data])
    }

    return (
            <div className="inline" ref={ref}>
              <div className="name">{props.name}</div>
              <div className="block">
                <span className="item price"> ${props.price}</span>
              </div>
              <div className="block">
                <span className="item sub" onClick={() => sub(props.id)}>-</span>
                <span className="item quantity">{props.quantity}</span>
                <span className="item add" onClick={() => add(props.id)}>+</span>  
              </div>
              <div className="block">${props.price * props.quantity}</div>
              <div className="block">
                <span className="item remove" onClick={() => remove(props.id)}>Remove</span>
              </div>
            </div>
    )
})

export default Product
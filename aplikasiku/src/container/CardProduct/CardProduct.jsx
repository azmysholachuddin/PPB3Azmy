import React, { Component } from "react";


class CardProduct extends Component {
    state ={
        order: 4
        
    }
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })      
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1

            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }
    render(){
        return(
          
      
            <div className="card">
            <div className="img-thumb-prod">
                <img src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2020/07/15/1665743615.jpg" alt="product_image"/>

            </div>
            <p className="product-title">Daging Ayam </p>
            <p className="product-price">Rp.34.000 </p>
            <div className="counter"> 
            <button className="minus" onClick={this.handleMinus}>-</button>
            <input type="text" value={this.state.order}/>

            <button className="plus" onClick={this.handlePlus}>+</button>

                </div>
            </div>
         
            
        );
    }
}

export default CardProduct;
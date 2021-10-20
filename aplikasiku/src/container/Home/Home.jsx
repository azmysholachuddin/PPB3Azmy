import React, {Component} from "react";
import YutubComp from "../../component/YutubComp/YutubComp";
import Product from "../Product/Product";

class Home extends Component {
    render(){
        return (
            <div>
                {/* <p> Youtube Component </p>
                <hr/> 
            <YutubComp time= "07.12" title="limbo 1" desc="limboo"/>
            <YutubComp time= "01.01" title="limbo 1" desc="limboo"/>
            <YutubComp time= "12.03" title="limbo 1" desc="limboo"/>
            <YutubComp time= "10.00" title="limbo 1" desc="limboo"/>
            <YutubComp time= "05.15" title="limbo 1" desc="limboo"/> */}
            <p> Counter </p>
            <hr/>
            <Product />

            </div>
            
        )
    }
}

export default Home;

import React, { Component } from 'react'
import {connect} from 'react-redux';
 
    function Items(props) {
        return(
    <div>
    <h1>ADD! {props.items} </h1>  
      
    </div>
    )  
}
    
function mapStateTopProps(state){
        
    console.log('mapStateToProps', state);
    return {
        
            items: state.items
        }
}  





export default connect(mapStateTopProps)(Items);

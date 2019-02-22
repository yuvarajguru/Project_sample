import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as action from './Store/Action/data'
 class table extends Component {
     state={
        tabledata:[]
     }
     componentDidUpdate(props){
console.log(props);
console.log(this.props)
         if(this.props!== props){
             this.setState({
                 tabledata:this.props.tabledata
             })
         }
     }
     componentWillReceiveProps(props){
         console.log('rece')
     }
     delete = (i)=>{
        this.props.delete(i);
        this.setState({
            test:true
        })
     }
  render() {
      let tbodydata = this.props.tabledata.map((item,i)=>{
          return(
              <tr key={i}>
              <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                    <button >edit</button>
                    <button onClick={this.delete.bind(this,i)}>delete</button>
                </td>
              </tr>
          )
      })
    return (
      <div>
        <table>
            <thead>
                <tr>
                <th>
                    s.no
                </th>
                <th>
                    name
                </th>
                <th>
                    age
                </th>
                </tr>
            </thead>
            <tbody>
                {tbodydata}
            </tbody>
        </table>
      </div>
    )
  }
}
const mapStateToProps = state => {
    console.log(state)
    return {
      tabledata:state.data.data
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      newuser: obj => dispatch(action.fetchUserSuccess(obj)),
      delete :(i)=>dispatch(action.deleteuser(i))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(table);
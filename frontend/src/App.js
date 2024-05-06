import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component{
  state = { details: [], }
  componentDidMount(){
    let data;
    axios.get('http://localhost:8000')
    .then(res => {
      data = res.data;
      this.setState({
        details : data
      });
    }) 
    .catch(err => {})
  }
  render(){
    return(
      <div>
        <div className='header'>
          <hr></hr>
          <h1>---- Student details ----</h1>
          <hr></hr>
        </div>
        {
          this.state.details.map((output, id) => (
            <div key={id} className='details'>
                  <h2 className='number'>{id}.</h2>
                  <h2 className='name'>Name: {output.employee},</h2>
                  <h2 className='department'>Department: {output.department}</h2>
            </div>
          ))
        }
      </div>

    )
  }
}



export default App;

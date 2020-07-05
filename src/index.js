import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';



class CustomForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {obj: {id: 0, text: ''}, valueArr: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({obj: {id: this.state.valueArr.length, text: event.target.value}});
  }

  handleSubmit(event) {
    // .map((item) => (item) copies over the items and returns a new, exact copy array
    var tmpArr = this.state.valueArr.map((item) => (item));
    tmpArr.push(this.state.obj);

    // never mutate the state like this
    // this.state.valueArr = [...tmpArr];

    // resets the text and puts new array
    this.setState({obj: {id: 0, text:''}, valueArr: tmpArr});

    event.preventDefault();
  }

  render() {
    return(
      <div id="main-div">
        <div id="inner-div">
          <form onSubmit={this.handleSubmit}>
            {/* input tags have their own state, so we are pointing to the react state as the only state */}
            {/* setting tmp text variable every time we type */}
            <input id="text-input" type="text" value={this.state.obj.text} placeholder="Enter todo item" onChange={this.handleChange} /> 

            {/* clicking this triggers onSubmit on the form */}
            <input type="submit" value="Add item" /> 
          </form>

          <h1>Count: {this.state.valueArr.length} </h1>


          <ul>
            {this.state.valueArr.map((value) => (
              <li key={value.id}>{value.text}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <CustomForm />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

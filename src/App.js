import React from 'react';
import { connect } from 'react-redux';
import Users from './users/Users';
import './App.css';
import {
  selectUserData,
  removeAllUserData
} from './redux/users/users.selector';
import { addUserData, removeUserData } from './redux/users/users.actions';

function App(props) {
  console.log(props)
  const addUser = (evt) => {
    if(evt && evt.preventDefault) {
      evt.preventDefault();
    }
    const form = new FormData(evt.target);
    let postData = {};
    for(let pair of form.entries()) {
        postData[pair[0]] =  pair[1]; 
    }
    props.addUserData(postData)

    evt.target.reset();

  }
  
  const removeAll = (evt) => {
    console.log('1')
    if(evt && evt.preventDefault) {
      evt.preventDefault();
    }
    props.removeUserData()
    evt.target.reset();
  }

  return (
    <div className="App">
        <button onSubmit={removeAll} className="clear-all">CLEAR</button>
        <form onSubmit={addUser}>
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="email" placeholder="email@gmail.com"/>
            <button className="submit-btn">SAVE</button>
        </form>
        <Users users={props.users}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  const { session } = state;
  return {
    checked: session.checked,
    authenticated: session.authenticated,
    users : selectUserData(state.userData.users),
    removeUsers : removeAllUserData(state.userData.users)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addUserData: user => dispatch(addUserData(user)),
    removeUserData: user => dispatch(removeUserData(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";

class UserClass extends React.Component {

constructor(props){
    super(props)
    // console.log(props)
    // console.log('child constructor')

    // this.state = {
    //     count1: 0,
    //     count2: 1
    // }


    this.state = {
        userInfo: 'dummy',
        location: 'dummy',
        avatar_url: ''
    }
}


async componentDidMount() {
    // console.log('child component Did Mount');
    const api = await fetch('https://api.github.com/users/vinay');
    const data = await api.json();
    console.log(data);
    this.setState({
        userInfo: data
    })
}

  render() {

    console.log('child render')
    
    const {name, location, avatar_url} = this.state.userInfo;

    return (
      <div className="user-profile">
        {/* <h3>count 1: {this.state.count1}</h3>
        <h3>count 2: {this.state.count2}</h3> */}

        {/* <button 
        onClick={
            ()=>{
                this.setState({
                    count1: this.state.count1 + 1,
                    count2: this.state.count2 + 2
                })
            }
        }
            >update Count</button> */}

        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <img src={avatar_url}/>
      </div>
    );
  }
}

export default UserClass;

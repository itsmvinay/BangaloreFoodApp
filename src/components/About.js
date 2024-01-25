// function based component
// import User from '../components/User';
// import UserClass from '../components/UserClass';

// const About = () => {
//     return (
//         <div>
//             <h1>About US</h1>
//             {/* <User name={'I am vinay'} location= {'Bangalore'}/> */}
//             <UserClass name={'Hello vinay'} location= {'Bangalore'}/>
//         </div>
//     )
// };

// export default About;



// class based component
import User from '../components/User';
import UserClass from '../components/UserClass';
import React from 'react';

class About extends React.Component {

    constructor() {
        super()
        console.log('Parent constructor')
    }

    componentDidMount() {
        console.log('Parent component Did Mount')
    }

    render() {
        console.log('Parent render')
        return (
            <div>
                <h1>About US</h1>
                <UserClass name={'Hello vinay'} location= {'Bangalore'}/>
            </div>
        )
    }
}


export default About;
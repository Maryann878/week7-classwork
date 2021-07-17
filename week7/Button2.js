// eg 1
// import { render } from '@testing-library/react';
// import React from 'react';


//    export default class Button2 extends React.Component {

//    render(){
//    return <button>Sign Up</button>;
   
// }
// }

 
// eg2
import { render } from '@testing-library/react';
import React from 'react';

   export default class Button2 extends React.Component {
render(){
   return <button>{this.props.name}</button>;
   
}
   }
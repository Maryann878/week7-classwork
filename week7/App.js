// eg1
// import logo from './logo.svg';
// import './App.css';
// import Button from './Button';
// import Button2 from './Button2';

// function App() {
//   return (
//     <div className="App">
     
//     <Button/>
//     <Button2/>
//     </div>
//   );
// }

// export default App;

// eg2
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button2 from './Button2';
import Card from './Card'

function App() {
const Products = {title:'Gold',
 description:'Gold is everything beautiful!',
  price:3000}

  const handleProduct = () => {
    alert(Products.title);
  };

  return (
    <div className="App">
     
    <Button text = "Learn More"/>
    <Button text = "Discover more"/> 

    <Card product = {Products} myClick = {handleProduct}/>
   


    {/* <Button2 name = "Log Out"/> */}

    </div>
  );
}

export default App;

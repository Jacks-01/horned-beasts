import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Horned_Beasts from './Horned-Beasts';
import { Component } from "react";


class App extends Component {
 
  render() { 
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    );
  }
}
 
export default App;
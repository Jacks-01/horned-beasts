import Header from './Header';
import Footer from './Footer';
import Main from './Main';
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
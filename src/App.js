import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
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
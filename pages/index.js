import Jumbotron from '../component/jumbotron';
import Header from '../component/header';
import Footer from '../component/footer';
import Position from '../component/layout';
import Features from '../component/features';

export default ()=>{
  return(
    <div>
      <Header/>
      <Jumbotron/>
      <Features/>
      <Position/>
      <Footer/>
    </div>
  );
}
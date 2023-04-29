import Product from "./Product";
import Header from "./Header";


export default function Basket(props) {
   const {counter} = props;
    return <>
      <div>{counter}</div>
      <Header />
    
  </>
}
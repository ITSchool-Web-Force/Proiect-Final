import ProductGroup from "./ProductGroup";
import data from "./data";


export default function App() {
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist) {
            const newCartItems = (
              cartItems.map((item) =>
                item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
            );
            setCartItems(newCartItems);
            localStorage.setItem("cartItems", JSON.stringify(newCartItems));
          } else {
            const newCartItems = ([...cartItems, { ...product, qty: 1 }]);
            setCartItems(newCartItems);
            localStorage.setItem("cartItems", JSON.stringify(newCartItems));
          }
        };

    const onRemove = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist.qty === 1) {
            const newCartItems = (
                cartItems.filter((item) => item.id !== product.id));
            setCartItems(newCartItems);
            localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        } else {
            const newCartItems = (
                cartItems.map((item) =>
                item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
            )
            );
            setCartItems(newCartItems);
            localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        }
        };

    useEffect(() => {
        setCartItems(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []);
    },[]);

    return (
        <div>
            <ProductGroup 
                products={products}>
            </ProductGroup>
        </div>
        );
    }

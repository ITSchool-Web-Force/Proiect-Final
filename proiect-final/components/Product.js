

export default function Product(product) {
    const pro={product};
    return <>
       <div>{pro.id}</div> 
        <div>{pro.price}</div>
        <div>{pro.name}</div> 
        <div>{pro.image}
        </div>
    
    
    </>
}
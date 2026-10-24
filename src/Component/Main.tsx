import React, { useEffect, useState } from 'react'

const Main = () => {
    const [products, setProduct] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(1);

    useEffect(() =>{
        const fetchProducts = async () =>{
            try{
                const skip = (current - 1)*8;
                const res = await fetch(`https://dummyjson.com/products?limit=8&skip=${skip}`);
                if(!res.ok){
                    throw new Error("Error fetching products");
                }
                const data = await res.json();
                setProduct(data.products);
                setTotal(Math.ceil(data.total/8));
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    }, [current]);

  return (
    <div className='p-5 flex justify-center items-center'>
      {error && <div><p className='text-red-600 text-center text-4xl'>{error}</p></div>}
      {loading ? <div><p className='text-4xl text-green-500 p-3.5'>Loading...</p></div>:
        <div className='flex flex-col justify-between items-center min-h-[70vh]'>
            <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {products.map((item)=>(
                    <div key={item.id} className='bg-blue-50 border rounded-2xl p-2 flex flex-col items-center'>
                        <img src={item.thumbnail} alt={item.title} className='w-34 mb-4' />
                        <h2 className='font-bold'>{item.title}</h2>
                        <div className='flex gap-5 mt-4'>
                            <p className='text-blue-900'>price: {item.price}</p>
                            <p className='text-blue-900'>rating: {item.rating} ⭐</p>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <button onClick={() => setCurrent(current-1)} disabled = {current === 1} className='border p-1 rounded-md cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'>«</button>
                {Array.from({length: total} , (_, index)=>{
                    const num = index + 1;
                    const isCurrent = current === num;
                    return(
                        
                        <button key={num}
                        onClick={()=>setCurrent(num)}
                        className={`border p-1 mt-3 mx-1.5 cursor-pointer rounded-md ${isCurrent? "bg-blue-300" : "bg-white"}`}
                        >{num}</button>
                    );
                })}
                <button onClick={() => setCurrent(current+1)} disabled = {current === total} className='border p-1 rounded-md cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'>»</button>
            </div>
        </div>
      }
        
    </div>
  )
}

export default Main

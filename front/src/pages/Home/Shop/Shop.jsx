import React from 'react'
import "./shop.css"
const Shop = () => {
    return (
        <div>
            <h1 className='shoptext'>Shop by Category</h1>
            <div className='photo'>
                <div className='img1'>
                    <h1 className='womentext'>Owmen'S</h1>
                    <button className='dealsbtn'>Best New Deals</button>
                    <h2 className='collectext'>New Collection</h2>
                </div>
                <div className='img2'>
                    <h2 className='distext'>Discount!</h2>
                    <h1 className='wintertext'>Winter Cloth</h1>
                    <h3 className='coltext'>New Collection</h3>
                </div>
                <div className='img3'>
                    <h1 className='mantext'>Man'S Cloth</h1>
                    <button className='dealsbtn'>Best New Deals</button>
                    <h1 className='newtext'>New Collection</h1>
                </div>
            </div>
        </div>
    )
}

export default Shop
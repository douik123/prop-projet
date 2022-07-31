import React from 'react'
import image from './jus.png'
const ProductTable = ({price,name,category}) =>(
<div> 
    <div><h1>name : {name}</h1></div>

    <div className='image'><img src={image}/></div>

    <div><h1>price : {price} dt</h1></div>

    <div><h1>category : {category}</h1></div>
</div>
);
export default ProductTable

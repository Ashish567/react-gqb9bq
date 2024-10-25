import React,{useEffect, useState} from 'react'
import './StarRating.css'
export default function StarRating() {
    const [fill, setFill] = useState(0);
    const [clicked, setClicked] = useState(0)
    useEffect(() => {
        console.log(fill)
    },[fill])
    return (
    <div className='rating-container'>
        <div>Star Rating...</div>
        <div className="star-rating" onMouseLeave={() => {
            setFill(-1)
        }}>
            {
                [1,2,3,4,5].map((val,index) => <Star key={index} val={val} setFill={setFill} fill={fill} />)
            }
        </div>
    </div>)
}
function Star({val, setFill, fill}) {
    const [color, setColor] = useState('gray');
    useEffect(() => val <= fill ? setColor('yellow') : setColor('gray'),[fill])
    function fillStar(val) {
        setFill(val);
    }
    return <span className="star" style={{
        color: color
    }} onMouseEnter={() => fillStar(val)} onClick={() => {
        console.log("star clicked! " + val)
    }} data-value={val}>&#9733;</span>
}

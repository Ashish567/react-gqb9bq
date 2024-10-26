import React,{useEffect, useState} from 'react'
import './StarRating.css'
export default function StarRating() {
    const [fill, setFill] = useState(0);
    const [clicked, setClicked] = useState(-1)
    
    return (
    <div className='rating-container'>
        <div>Star Rating...</div>
        <div className="star-rating" onMouseLeave={() => setFill(clicked)}>
            {
                [1,2,3,4,5].map((val,index) => <Star key={index} val={val} setFill={setFill} fill={fill} setClicked={setClicked} />)
            }
        </div>
    </div>)
}
function Star({val, setFill, fill, setClicked}) {
    const [color, setColor] = useState('gray');
    useEffect(() => val <= fill ? setColor('yellow') : setColor('gray'),[fill])
    function fillStar(val) {
        setFill(val);
    }
    return <span className="star" style={{
        color: color
    }} onMouseEnter={() => fillStar(val)} onClick={() => setClicked(val)} data-value={val}>&#9733;</span>
}

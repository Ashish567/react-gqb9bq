import React,{useState, useEffect, useId} from 'react';
import './Accordian.css'
export default function Accordian2() {
  const id = useId()
  const [accordianData, setAccordianData] = useState([{
    name: 'Section 1',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
  },
    {
      name: 'Section 2',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
      name: 'Section 3',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    }
  ]);
  

  return (
    <>
      {' '}
      <p>Accordian</p>
      <section className='accordian'>
        {
          accordianData.map(({name, content},index) => {
            return <AccordBox key={index+id} name={name} content={content} />
          })
        }
      </section>
    </>
  );
}

function AccordBox({name,content}) {
 const [visible, setVisible] = useState(false)
 function handleClick(e) {
    e.preventDefault()
    setVisible(!visible)
 }
 return <div className='bdy'  onClick={handleClick} >
         <div  className='header'>{name}</div>
         {visible && <p className='desc'>{content}</p>}
        </div>
}

import React,{useState, useEffect, useId} from 'react';
import './Accordian.css'
export default function Accordian() {
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
  useEffect(() => {
    const accord = document.getElementById("accord")
    function select(event) {
     const siblingElement = event.target.nextSibling;
     siblingElement.style.display = siblingElement.style.display == 'none' ? 'block' : 'none';
    }
    accord.addEventListener('click',select);
    return () => accord.removeEventListener('click',select)
  },[])

  return (
    <>
      {' '}
      <p>Accordian</p>
      <section data-name="accordian" className='accordian' id="accord">
        {
          accordianData.map(({name, content},index) => {
            return <div className='bdy' key={index+id} data-name={name}>
            <div data-name={name} className='header'>{name}</div>
            <p className='desc'>{content}</p>
            </div>
          })
        }
      </section>
    </>
  );
}

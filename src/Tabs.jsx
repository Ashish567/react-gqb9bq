import React,{useState} from 'react'
import './Tabs.css'

export default function Tabs() {
   const [tab, setTab] = useState([{
      name:'Tab 1',
      content: 'Content for Tab 1'
   },{
      name:'Tab 2',
      content: 'Content for Tab 2'
   },
   {
      name:'Tab 3',
      content: 'Content for Tab 3'
   }
  ])
   const [active,setActive] = useState('Tab 1')
    return <>
    <section class="tabs">
       <ul class="tab-headers">
         {
            tab.map(({name}) => <li onClick={() => setActive(name)} className={`tab-header ${active == name && "active-tab"}`}>{name}</li>)
         }
       </ul>
       <TabComp activeTab={active} tab={tab}/>
    </section>
    </>
}

function TabComp({activeTab, tab}) {
 
 return (
      <>
        <div class="tab-contents">
         {
            tab.filter(({name}) => name === activeTab).map((data,index) => {
               return <div key={index}>
                  <div className='tab-content'>{data.content}</div>
               </div>
            })
         }
        </div>
      </>
 )
}
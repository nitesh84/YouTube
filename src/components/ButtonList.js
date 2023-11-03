import React from 'react'
import Button from './Button'
import _map from 'lodash/map';


const ButtonList = () => {

  const list=["All","News","Gaming","Movies","Cooking","KapilSharma","Live","SitComs","Standup","CSS","React","RTK"];
  return (
    <div className='flex'>
      {_map(list,listitems=><Button key={listitems} title={listitems} />)}
    </div>
  )
}

export default ButtonList


import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import './CheckBoxTag.scss'

const CheckBoxTag = ({tags , tag}) => {

  const [tagGet, setTagGet] = useState(false)
  const [tagName, setTagName] = useState(tags.tag)

  const tagFunction = () => {
    if (!tagGet) {
      setTagName(tags.tag)
      tag(tagName)
      setTagGet(true)
    }
    if (tagGet) {
      setTagName('')
      tag(tagName)
      setTagGet(false)
    }
    
      
    
  }

  return (
    <div className="options__checkbox-content">
        <input type="checkbox" name="" id="" onClick={() => tagFunction()}/>
        <div className="options__title-checkbox">{tags.tag}</div>
    </div>
  )
}

export default CheckBoxTag
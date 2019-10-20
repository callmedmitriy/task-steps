import React, { useState } from 'react'

import Training from '../models/Training'


function Form(props) {
  
  const [date,setDate] = useState('2019-10-08')
  const [distance,setDistance] = useState('10')

  const dateChange = ({target}) => {

    setDate(target.value)

  }

  const distanceChange = ({target}) => {

    let str = target.value.replace(/[^0-9\.]$/g,"")
    setDistance(str)

  }

  const addTraining = evt => {

    evt.preventDefault()

    props.add(new Training(date,distance))

  }



  return (
      <form className="form">
        <div className="group">
          <label htmlFor="date">Дата</label>
          <input type="date" id="date" value={date} onChange={dateChange}/>
        </div>
        <div className="group">
          <label htmlFor="distance">Пройдено км</label>
          <input type="text" id="distance" value={distance} onChange={distanceChange}/>
        </div>
        <div className="group">
          <button onClick={addTraining}>Добавить</button>
        </div>
      </form>
  )
}

export default Form
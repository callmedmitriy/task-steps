import React, { useState } from 'react'

import Training from '../models/Training'
import List from './List'

import './Form.scss'

function Form() {
  
  const [trainingList, setTrainingList] = useState([new Training('2019-10-16',132)])
  const [date,setDate] = useState()
  const [distance,setDistance] = useState()

  const dateChange = ({target}) => {

    setDate(target.value)

  }

  const distanceChange = ({target}) => {

    let str = target.value.replace(/[^0-9\.]$/g,"")
    setDistance(str)

  }

  const addTraining = evt => {

    evt.preventDefault()

    let insert = true
    
    trainingList.forEach(function(el){
      if (el.date === date) {
       el.distance = parseFloat(el.distance) + parseFloat(distance)
       insert = false
      }
    })
    
    if (insert) {
      setTrainingList(prevTrainings => [...prevTrainings, new Training(date,distance)])
    }
    /*setTrainingList(prevTrainings => prevTrainings.map(
      o => o.date === date ? new Training(date,parseFloat(o.distance) + parseFloat(distance)) : o
    ))*/
  }

  const removeTraining = (dt) => {
    setTrainingList(prevTrainings => prevTrainings.filter(o => o.date !== dt))
  }

  return (
    <div className="wrapper">
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
      <List list={trainingList} remove={removeTraining}/>
    </div>
  )
}

export default Form
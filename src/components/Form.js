import React, { useState } from 'react'

import Training from '../models/Training'
import List from './List'

import './Form.scss'

function Form() {
  
  const [trainingList, setTrainingList] = useState([])
  const [date,setDate] = useState('10.10.1001')
  const [distance,setDistance] = useState()

  const dateChange = ({target}) => {

    setDate(target.value)
  }

  const distanceChange = ({target}) => {

    let str = target.value.replace(/[^0-9\.]$/g,"")
    setDistance(str)

  }

  const addTraining = ({target}) => {
    trainingList.map(result => result.date === date ? result.distance += parseFloat(distance) : null)
    let Training = new Training(date,distance)
    setTrainingList(prevTrainings => [...prevTrainings, ])
  }

  return (
    <div className="wrapper">
      <form className="form">
        <div className="group">
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input type="date" id="date" value={date} onChange={dateChange}/>
        </div>
        <div className="group">
          <label htmlFor="distance">Пройдено км</label>
          <input type="text" id="distance" value={distance} onChange={distanceChange}/>
        </div>
        <div className="group">
          <button>Добавить</button>
        </div>
      </form>
      <List list={trainingList}/>
    </div>
  )
}

export default Form
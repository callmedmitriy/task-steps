import React, { useState } from 'react';

import Form from './components/Form'
import List from './components/List'

import Training from './models/Training'

import './App.scss'


function App() {

  const [trainingList, setTrainingList] = useState([new Training('2019-10-16',132),new Training('2019-10-14',2),new Training('2019-10-18',10)])

  const addTraining = (at) => {
    
    let insert = true
    
    trainingList.forEach(function(el){
      if (el.date === at.date) {
        setTrainingList(prevTrainings => prevTrainings.map(
          o => o.date === at.date ? new Training(at.date,parseFloat(o.distance) + parseFloat(at.distance)) : o
        ))
        insert = false
      }
    })
    
    if (insert) {
      setTrainingList(prevTrainings => [...prevTrainings, at])
    }
  }

  const removeTraining = (dt) => {
    setTrainingList(prevTrainings => prevTrainings.filter(o => o.date !== dt))
  }

  return (
    <div className="wrapper">
      <Form add={addTraining}/>
      <List list={trainingList} remove={removeTraining}/>
    </div>
  )
}

export default App;

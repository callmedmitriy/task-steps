import React from 'react'

function List(props) {

	const handleRemove = dt => {
		props.remove(dt)
	}

	const trainings = []
	props.list.map( training => trainings.push(<tr key={training.date}><td>{training.date}</td><td>{training.distance}</td><td><button onClick={() => handleRemove(training.date)}>Удалить</button></td></tr>))

	return(
		<table>
			<tbody>
				<tr>
					<th>Дата</th>
					<th>Дистанция</th>
					<th>Управление</th>
				</tr>
				{trainings}
			</tbody>
		</table>
	)

}

export default List;
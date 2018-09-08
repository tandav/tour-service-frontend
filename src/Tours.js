import React from 'react'

const Tours = ({ tours, onClick }) => {
    return (
        <div>
            <h1>Tours</h1>
            <table>
            <thead>
                <tr>
                <th>id</th>
                <th>name</th>
                <th>descrition</th>
                </tr>
            </thead>
            <tbody>
            {
                tours.map(tour => (
                <tr key={tour.id}>
                    <td>{tour.id}</td>
                    <td>{tour.name}</td>
                    <td>{tour.descrition}</td>
                    <td>
                        <button onClick={() => onClick(tour.id)}>book it</button>
                    </td>
                </tr>
                ))
            }
            </tbody>
            </table>
        </div>
    )
}

export default Tours
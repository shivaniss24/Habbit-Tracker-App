import React from 'react'

const Card = ({ habit }) => {
    const { id, name, image, repeat, goal, time_of_day, start_date } = habit;
    return (
        <div>
            <div className="col s12 m3">
                <div className="card medium">
                    <div className="card-image">
                        <img alt={id} src={image} />
                        <span className="card-title">{name}</span>
                    </div>
                    <div className="card-content">
                        <ul>
                            <li >Repeat: {repeat}</li>
                            <li >Goal: {goal}</li>
                            <li >Time Of Day: {time_of_day}</li>
                            <li >Start Date: {start_date}</li>
                        </ul>
                    </div>
                    <div className="card-action">
                        <button>Edit</button>
                        <button>Archive</button>
                        <button>Delete</button>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Card
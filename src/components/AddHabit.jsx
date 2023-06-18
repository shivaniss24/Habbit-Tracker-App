import React from 'react'
import "../style.css"

const AddHabit = ({ display, closeModal }) => {

    const submitHabit = () => {

    }

    return (
        <div className="modal" style={{ display: display }}>
            <div className="modal-content">
                <b className="left">Add Habit</b><span onClick={closeModal} className="close">&times;</span>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" className="validate" />
                                <label for="name">Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s3">
                                <input type="text" className="validate" />
                                <label for="Repeat">Repeat</label>
                            </div>
                            <div className="input-field col s3">
                                <input type="text" className="validate" />
                                <label for="Goal">Goal</label>
                            </div>
                            <div className="input-field col s3">
                                <input type="text" className="validate" />
                                <label for="Time of Day">Time of Day</label>
                            </div>
                            <div className="input-field col s3">
                                <input type="date" className="validate" />
                                <label for="Start Date">Start Date</label>
                            </div>
                            <button class="btn waves-effect waves-light right" onclick={submitHabit()}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddHabit
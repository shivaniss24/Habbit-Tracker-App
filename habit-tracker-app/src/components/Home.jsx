import React from 'react';
import Card from "../components/Card";
import { HabitContext } from "../context/habitcontext";
import { useContext } from 'react';
import AddHabit from './AddHabit';
import { useState } from 'react';

const Home = () => {
    const { habits } = useContext(HabitContext);
    const [display, setDisplay] = useState("none");

    const openModal = () => {
        setDisplay("block");
    }

    const closeModal = () => {
        setDisplay("none");
    }

    return (
        <div>
            <h1>home</h1>
            <button onClick={openModal} className="btn-floating btn-large waves-effect waves-light red" >+</button>
            <AddHabit closeModal={closeModal} display={display} />
            <div className="row">
                {
                    habits.map((habit) => {
                        return <Card key={habit.id} habit={habit} />
                    })
                }
            </div>

        </div>
    )
}

export default Home
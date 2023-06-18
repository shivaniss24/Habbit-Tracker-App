import { useContext, createContext } from "react";
import { habits } from "../data/habits";

export const HabitContext = createContext();

const getHabitById = (id) => {
    return habits.filter(habit => habit.id === id)[0];
}

export const HabitProvider = ({ children }) => {
    // useEffect(() => habits, []);
    return (
        <HabitContext.Provider value={{ habits, getHabitById }}>
            {children}
        </HabitContext.Provider>
    );
};

export const useHabits = () => useContext(HabitContext);
import './App.css';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import Counter from './state-management/Counter';
import TaskList from './state-management/TaskList';
import LoginStatus from './state-management/LoginStatus';
import { useReducer } from 'react';
import tasksReducer from './state-management/reducers/tasksReducer';
import NavBar from './routing/NavBar';
import HomePage from './routing/HomePage';
import TasksContext from './state-management/contexts/tasksContext';

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </>
  );
}

export default App;

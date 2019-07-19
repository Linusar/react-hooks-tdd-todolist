import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import ListOfElements from '../../components/ListOfElements';
import ListOfElementsForm from '../../components/ListOfElementsForm';

const HomeContainer = () => {
  const [tasks, setTasks] = useState([{ key: 12345, name: 'First task' }]);

  const removeElement = (key) => {
    const newTasks = tasks.filter(task => task.key !== key);
    setTasks(newTasks);
  };

  const addTasks = (task) => {
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <ListOfElementsForm handleAction={addTasks} />
      <ListOfElements rows={tasks} removeElement={removeElement} />
    </div>
  );
};

export default withRouter(HomeContainer);

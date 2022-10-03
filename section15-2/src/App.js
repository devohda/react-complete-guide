import React, {useEffect, useState} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = tasksObj => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({id: taskKey, text: tasksObj[taskKey].text});
    }

    setTasks(loadedTasks);
  };

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp({
    requestConfig: {
      url: 'https://react-http-c2823-default-rtdb.firebaseio.com/tasks.json',
    },
    applyData: transformTasks,
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = task => {
    setTasks(prevTasks => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;


let tasks = [
    { id: 1, title: 'Complete assignment', completed: false },
    { id: 2, title: 'Attend meeting', completed: true }
  ];
  

  const addTask = (tasks, another_task, do_after_adding_task) => {
    tasks.push(another_task);
    let completed = 0;
    let pending = 0;
    tasks.forEach(task => {
      if (task.completed) {
        completed++;
      } else {
        pending++;
      }
    });
  
    const summary = {
      total: tasks.length,
      completed: completed,
      pending: pending
    };
    
    do_after_adding_task(tasks, summary);
  };
  
  addTask(tasks, { id: 3, title: 'Start project', completed: false }, (tasks, summary) => {
    console.log("Updated Task List:", tasks);
    console.log("Summary:", summary);
  });
  
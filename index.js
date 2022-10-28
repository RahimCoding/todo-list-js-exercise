// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function () {
      task.complete = true;
    }

  };
  return task
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "take all the shit out of the litter box"); // task 0
const task2 = newTask("Do Laundry", ":C"); // task 1
const tasks = [task1, task2];

console.log(tasks)

task2.logState(); // Clean Cat Litter has not been completed
task2.markCompleted();
task2.logState(); // Clean Cat Litter has been completed

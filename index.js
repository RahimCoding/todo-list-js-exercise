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

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "take all the shit out of the litter box"); // task 0
const task2 = newTask("Do Laundry", ":C"); // task 1
const task3 = newTask("clean dishes", "🍲") //task 2
const tasks = [task1, task2, task3];

// console.log(tasks)

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

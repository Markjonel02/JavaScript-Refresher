const FindTask = (tasks) => {
  const findingTask = tasks.find((task) => task.status === "overdue");
  const returnTask = findingTask
    ? findingTask.title && findingTask.status
    : "All tasks are on track";

  return returnTask;
};

console.log(
  FindTask([
    { title: "sample", status: "overdue" },
    { title: "sample2", status: "completed" },
    { title: "sample", status: "pending" },
  ])
);

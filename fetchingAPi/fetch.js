const samplefunction = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/5",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    return data; // return so caller can use it
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Option 2: Use .then()
samplefunction().then((result) => console.log("Result:", result));

const pushsomething = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "mark",
        body: "relles Hellow",
        userId: 10,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error pushing data:", error);
  }
};

pushsomething().then((result) => console.log("Post Result:", result));




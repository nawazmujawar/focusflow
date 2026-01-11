"use client";

import { sayHello, submitForm } from "./actions";

export default function Home() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  // const data = await res.json();
  // console.log(data);
  return (
    <div>
      <h1> Home Page</h1>
      <button onClick={sayHello}>Click Me</button>
      <form action={submitForm}>
        <input type="string" name="surname" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

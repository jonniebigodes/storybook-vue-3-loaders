import SampleLoaderComponent from "./SampleLoaderComponent.vue";
import fetch from "node-fetch";

export default {
  component: SampleLoaderComponent,
  title: "LoaderExample",
  
};

/* export const SampleStory = (args, { loaded: { todo } }) => {
  console.log(`todo:${JSON.stringify(todo, null, 2)}`);
  return {
    components: { SampleLoaderComponent },
    setup() {
      return { args, todo: todo };
    },
    template: `<SampleLoaderComponent :todo="todo"/>`,
  };
};

// using async here returns =>todo:[object Promise]
// SampleStory.loaders = [
//   async () => ({
//     todo: (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json(),
//   }),
// ];

SampleStory.loaders = [
  async () => ({
    todo: await fetchTodo(),
  }),
];

async function fetchTodo() {
  try {
    const fetchRequest = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const response = fetchRequest.json();
    return response;
  } catch (error) {
    console.log(error);
  }
} */

export const SampleStory = (args, { loaded: { todo } }) => {
  console.log(`todo:${JSON.stringify(todo, null, 2)}`);
  return {
    components: { SampleLoaderComponent },
    setup() {
      return { args, todo: todo };
    },
    template: `<SampleLoaderComponent :todo="todo"/>`,
  };
};

SampleStory.loaders = [
  async () => ({
    todo: await (
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
    ).json(),
  }),
];


// global (preview.js)
export const AnotherStory = (args, { loaded: { currentUser } }) => {
  console.log(`currentUser:${JSON.stringify(currentUser, null, 2)}`);
  return {
    components: { SampleLoaderComponent },
    setup() {
      return { args, todo: currentUser };
    },
    template: `<SampleLoaderComponent :todo="todo"/>`,
  };
};
//

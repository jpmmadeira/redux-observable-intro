# Redux Observable Intro - Unicounter

In this project, we created a simple counter, with the purpose of exemplifying in three easy steps the differences between the use of `useState`, `redux` and redux with a middleware (`redux-observable`).

![logo](/public/logo.png)

## Resources

- [React](https://reactjs.org)
- [RxJS](https://rxjs.dev)
- [Redux-Observable](https://redux-observable.js.org)

## Setup

#### Clone the repository
> git clone [git@github.com:jpmmadeira/redux-observable-intro.git](https://github.com/jpmmadeira/redux-observable-intro)

#### Install dependencies
> yarn install

#### Run the project
> yarn start


## Steps

### Step 1 - useState
A Counter component using `useState` hook to manage its own state.

### Step 2 - redux
In this step, we implemented a `redux` store and connected it with the counter component. Now, our state is managed globally.

### Step 3 - redux-observable
In this step, we added the `redux-observable` middleware, to intercept previously implemented redux actions before they are executed.

This is a project made to be presented at a [Uniplaces](https://uniplaces.com) tech sync 🚀
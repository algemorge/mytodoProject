import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  // 각 todo 내용을 다르게 하고 싶음 => useState 사용
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: '저녁먹기',
      done: false
    },
    {
      id: 2,
      title: '리액트 복습',
      done: false
    },
    {
      id: 3,
      title: '산책',
      done: false
    },
    {
      id: 4,
      title: '잠자기',
      done: true
    },
  ])

  // todo 추가하는 함수
  const addItem = (newItem) => {
    // todo
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    // newItem => {title : 'xxx', id:n, done:false }

    setTodoItems([...todoItems, newItem])
  }

  // Todo 삭제하는 함수
  const deleteItem = (targetItem) => {
    // targetItem => {title : 'xxx', id:n, done:false }
    // 1. filter()
    // : targetItem의 id 와 todoItems state의 id 가 같지 않은 애들을 새로운 배열로 반환
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id)

    // 2. state 변경
    setTodoItems(newTodoItems)
  }

  return (
    <div className="App">
      {/* todo 추가 input */}
      <AddTodo addItem={addItem} />
      {/* todo 목록 보이기 */}
      {// item -> prop으로 넘기기 
        todoItems.map((item) => {
          return <Todo key={item.id} item={item} deleteItem={deleteItem} />
        })}
    </div>
  );
}

export default App;

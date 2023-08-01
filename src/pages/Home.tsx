import styled from "styled-components";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

function Home() {
  return (
    <>
      <Container>
        <HeaderBox>
          <div>My Todo List</div>
          <div>React</div>
        </HeaderBox>
        <main>
          <AddTodo />
          <TodoList type="working" name="Working" />
          <TodoList type="done" name="Done" />
        </main>
        <footer></footer>
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0px auto;
`;

const HeaderBox = styled.header`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
`;

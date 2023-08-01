import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/modules/todo";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/config/configStore";

interface Todo {
  type: string;
  name: string;
}

function TodoList(props: Todo) {
  const navigate = useNavigate();
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <TodoBox>{props.name}</TodoBox>
      <ContentContainer>
        {todos.map((item) => {
          if (props.type === "working" && item.isDone === false) {
            return (
              <ContentBox key={item.id}>
                <button
                  onClick={() => {
                    navigate(`/detail/${item.id}`);
                  }}
                >
                  상세보기
                </button>
                <h3>{item.title}</h3>
                <p>{item.contents}</p>
                <button onClick={() => dispatch(deleteTodo(item.id))}>
                  삭제하기
                </button>
                <button onClick={() => dispatch(toggleTodo(item.id))}>
                  완료
                </button>
              </ContentBox>
            );
          } else if (props.type === "done" && item.isDone === true) {
            return (
              <ContentBox key={item.id}>
                <button
                  onClick={() => {
                    navigate(`/detail/${item.id}`);
                  }}
                >
                  상세보기
                </button>
                <h3>{item.title}</h3>
                <p>{item.contents}</p>
                <button onClick={() => dispatch(deleteTodo(item.id))}>
                  삭제하기
                </button>
                <button onClick={() => dispatch(toggleTodo(item.id))}>
                  취소
                </button>
              </ContentBox>
            );
          }
        })}
      </ContentContainer>
    </>
  );
}
export default TodoList;

const TodoBox = styled.h3`
  margin: 10px;
  padding: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ContentBox = styled.div`
  border: 2px solid black;
  margin: 10px;
  padding: 10px;
  width: 300px;
`;

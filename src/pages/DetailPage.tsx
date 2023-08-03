import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/config/configStore";
import { Todo } from "../redux/modules/todo";

function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const todos = useSelector((state: RootState) => state.todos);

  // 자동완성 쓰려면 타입 꼭 써줘야함! 휴먼에러 방지..
  const foundTodo = todos.find((item: Todo) => {
    return item.id === params.id; // 마우스 올렸을 때 타입추론 못하면 타입 써주기..
  });

  if (!foundTodo) {
    return (
      <Container>
        <div>
          <Header>
            <h6>해당 ID에 대한 할일이 없습니다.</h6>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </button>
          </Header>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div>
        <Header>
          <h6>ID : {foundTodo.id}</h6>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </button>
        </Header>
      </div>
      <Main>
        <h3>{foundTodo.title}</h3>
        <div>{foundTodo.contents}</div>
      </Main>
    </Container>
  );
}

export default DetailPage;

const Container = styled.div`
  border: 1px solid gray;
  padding: 10px;
  width: 10%;
  height: 40vh;
  max-width: 1200px;
  min-width: 800px;
  margin: 250px auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Main = styled.main`
  margin-top: 50px;
`;

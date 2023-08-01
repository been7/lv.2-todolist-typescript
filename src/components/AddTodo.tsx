import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/modules/todo";
import { RootState } from "../redux/config/configStore";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const todos = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();

    if (title === "") return;

    dispatch(
      addTodo({
        id: uuidv4(),
        title,
        contents,
        isDone: false,
      })
    );

    setTitle("");
    setContents("");
  };

  return (
    <FormBox onSubmit={onSubmitHandler}>
      <div>
        제목 :{" "}
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        내용 :{" "}
        <input
          type="text"
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
      </div>
      <div>
        <button>추가하기</button>
      </div>
    </FormBox>
  );
}

export default AddTodo;

const FormBox = styled.form`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
`;

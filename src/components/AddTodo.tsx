import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/modules/todo";

function AddTodo() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const dispatch = useDispatch();

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault(); // e: any라고 썼을 땐 pre~ 자동완성 안됐음.

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

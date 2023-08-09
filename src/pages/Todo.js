import Input from "../components/Input";
import Button from "../components/Button";
const Todo = () => {
  return (
    <>
      <h1>Todo</h1>

      {/* Add Todo */}
      <form>
        <Input data-testid="new-todo-input" />
        <Button data-testid="new-todo-add-button" text="추가" />
      </form>

      {/* Todo List */}
      <div>
        <li>
          <label>
            <Input type="checkbox" />
            <span>TODO 1</span>
          </label>
          <Button data-testid="modify-button" text="수정" />
          <Button data-testid="delete-button" text="삭제" />
        </li>
      </div>
    </>
  );
};

export default Todo;

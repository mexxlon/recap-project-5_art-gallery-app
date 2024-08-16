import styled from "styled-components";

const CommentForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommentInput = styled.input`
  width: 100%;
  height: 80px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004080;
  }
`;

export default function CommentSection({ handleAddComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newComment = event.target.elements.input.value;
    handleAddComment(newComment);
    event.target.reset();
    event.target.elements.input.focus();
  }

  return (
    <CommentForm onSubmit={handleSubmit}>
      <CommentInput placeholder="Add a comment..." type="text" name="input" />
      <SubmitButton type="submit">Add Comment</SubmitButton>
    </CommentForm>
  );
}

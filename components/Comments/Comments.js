import styled from "styled-components";

const CommentContainer = styled.div`
  margin-bottom: 15px;
`;

const CommentTextAndDate = styled.p`
  display: block;
  font-size: 0.8rem;
  color: #666;
`;

export default function Comments({ artPiecesInfo, currentPiece }) {
  const currentArt = artPiecesInfo.find(
    (piece) => currentPiece.slug === piece.id
  );
  const comments = currentArt?.comments || [];

  return (
    <>
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <CommentContainer key={index}>
          <CommentTextAndDate>
            {comment.comment}
            <br />
            <span>{comment.date}</span>
          </CommentTextAndDate>
        </CommentContainer>
      ))}
    </>
  );
}

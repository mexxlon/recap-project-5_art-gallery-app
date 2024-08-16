import Image from "next/image";
import styled from "styled-components";

const FavoriteButtonContainer = styled.div`
  display: inline-block;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default function FavoriteButton({ piece, handleToggleFavorite }) {
  function onToggleFavorite(event, slug) {
    event.preventDefault();
    handleToggleFavorite(slug);
  }

  return (
    <FavoriteButtonContainer
      onClick={(event) => onToggleFavorite(event, piece.slug)}
    >
      <Image src="/heart.svg" alt="favorite button" width={30} height={30} />
    </FavoriteButtonContainer>
  );
}

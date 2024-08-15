import styled from "styled-components";
import Image from "next/image";

const SpotlightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ArtistName = styled.h2`
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
`;

function randomSpotLight(pieces) {
  if (!pieces) return null;
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function Spotlight({ pieces }) {
  const randomPiece = randomSpotLight(pieces);
  if (!randomPiece) return null;

  return (
    <SpotlightContainer>
      <div>
        <h1>Spotlight</h1>
        <Image
          src={randomPiece.imageSource}
          alt={randomPiece.name}
          width={randomPiece.dimensions.width * 0.3}
          height={randomPiece.dimensions.height * 0.3}
        />
        <ArtistName>By {randomPiece.artist}</ArtistName>
      </div>
    </SpotlightContainer>
  );
}

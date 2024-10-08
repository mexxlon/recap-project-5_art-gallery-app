import Link from "next/link";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f4f4f4;
`;

export default function Navigation() {
  return (
    <StyledNavBar>
      <Link href="/spotlight">Spotlight</Link>
      <Link href="/art-pieces">Pieces</Link>
      <Link href="/favorites">Favorites</Link>
    </StyledNavBar>
  );
}

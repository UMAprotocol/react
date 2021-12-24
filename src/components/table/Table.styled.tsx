import styled from "@emotion/styled";

const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletAndDown: `(max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const TableWrapper = styled.div`
  width: 100%;
  font-size: clamp(0.75rem, 1.2vw + 0.4rem, 1.125rem);
  overflow: auto;
  padding-top: 10px;
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const NameHeading = styled.h6`
  font-weight: bold;
  display: flex;
  align-items: baseline;
  margin: 0;
  width: fit-content;
  & > svg {
    margin-left: 5px;
    display: none;
    @media ${QUERIES.tabletAndUp} {
      display: revert;
    }
    @media ${QUERIES.laptopAndUp} {
      margin-left: 30px;
    }
  }
  & ~ span {
    font-style: italic;
    font-weight: 300;
    font-size: ${14 / 16}rem;
    display: none;

    @media ${QUERIES.tabletAndUp} {
      max-width: 45ch;
      display: block;
    }
  }
`;

export const Row = styled.div`
  width: 100%;
  background-color: var(--white);
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  &:not(first-of-type) {
    margin-top: 5px;
  }
  transition: all linear 0.2s;

  &:hover {
    background-color: var(--gray-100);
  }

  @media ${QUERIES.tabletAndUp} {
    padding: 10px 20px;
  }
`;

export const HeadRow = styled(Row)`
  font-weight: 600;
  cursor: default;
  &:hover {
    background-color: revert;
  }
`;
export const Cell = styled.div`
  flex: 1 1 120px;
  &:first-of-type {
    flex: 0 0 30px;
    margin-right: 25px;
    @media ${QUERIES.tabletAndUp} {
      margin-right: 50px;
    }
  }
  &:nth-of-type(2) {
    flex: 1 2 550px;
    @media ${QUERIES.tabletAndUp} {
      min-width: 250px;
    }
  }
`;

export const Body = styled.div`
  padding: 15px 0;
  background-color: var(--gray-300);
`;

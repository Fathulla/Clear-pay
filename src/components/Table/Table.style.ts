import styled from "styled-components";

export const AppCell = styled.td`
    flex: 1 1 auto;
    text-align: center;
`
export const AppTable = styled.table`
    width: 100%;
    max-width: 800px;
    table-layout: fixed;
    border-spacing: 0;
`

export const AppTableBody = styled.tbody`
    padding-top:20px
`

export const AppTableRow = styled.tr`
  width: 100%;

  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  align-items: center;

  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  }

  padding: 20px 0;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
  `;

export const TableHeaderCell = styled.th`
  flex: 1 1;
  text-align: center;
  &:first-child {
    text-align: left;
  }
`

export const TableHeaderRow = styled.tr`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  align-items: center;
  padding-bottom: 20px;
`
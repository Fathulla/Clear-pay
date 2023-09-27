import styled from "styled-components";

export const SCInputSelect = styled.div`
  position: relative;

  input {
    padding-right: 90px;
  }

  .divider {
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    right: 80px;

    height: 70%;
    width: 1px;
    background-color: ${(props) => props.theme.colors.placeholderColor};
  }

  select {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: fit-content;

    border-radius: 0 10px 10px 0;
    border-left: 0;

    &:hover {
    }
  }
`;

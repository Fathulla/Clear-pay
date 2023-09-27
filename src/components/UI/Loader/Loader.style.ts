import styled from "styled-components";

const borderRadius = "12px";
const skew = "-12deg";

export const SCCard = styled.div`
  background-color: ${(props) => props.theme.colors.primeColor};
  height: 50px;
  width: 40px;
  margin-bottom: 2px;
  position: absolute;
  z-index: 3;
  // border: 4px solid white;
  box-shadow: 0 5px 14px 0 rgba(1, 1, 1, 0.2);
  border-radius: ${borderRadius} 0 ${borderRadius} 0;
  transform: skewX(${skew});
  animation: float 1.5s infinite ease-in-out;

  &:nth-child(2) {
    left: 20px;
    top: 15px;
    z-index: 2;
    background-color: #0092ff;
    animation: float 1.5s infinite ease-in-out;
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    left: 40px;
    top: 30px;
    z-index: 1;
    background-color: #94c5ff;
    animation: float 1.5s infinite ease-in-out;
    animation-delay: 0.2s;
  }

  @keyframes float {
    0% {
      transform: skew(${skew}) translateY(0);
    }
    50% {
      transform: skew(${skew}) translateY(20px);
    }
    100% {
      transform: skew(${skew}) translateY(0);
    }
  }
`;

export const SCWyreCard = styled.div`
  position: fixed;
  width: 120px;
  height: 120px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

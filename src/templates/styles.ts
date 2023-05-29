import styled from "styled-components";

const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;
const MainContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 1120px;
`;

export {Wrapper, MainContainer};
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;

input {
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 32px;
    padding: 8px;
}

button {
    border-radius: 8px;
    padding: 0 12px;
    margin: 0 8px;
    background-color: #016EE6;

    font-size: 14px;
    color: #fff;
    font-weight: bold;
    

    &:hover {
        background-color: #515EF5;
        box-shadow: 0 0 0.3em rgba(13, 192, 252, 2)
    }
}
`;
import styled from "styled-components";

export const LogInContainer = styled.div`
    display: flex;
    padding-right: 20px;
    padding-left: 20px;
`;

export const HeaderLogo = styled.a`
    width: 28px;
    height: 27px;
    font-family: "Abril Fatface";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #242a37;
    display: inline-block;
    padding-top: 19px;
    padding-bottom: 14px;
`;
export const DropDiv = styled.div`
    display: flex;
    height: 100%;
    margin:5px auto;
`;
export const DropMenu = styled.div`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;
export const DropDown = styled.div`
    position: relative;
    display: inline-block;
    &:hover ${DropMenu}{
        display: block;
    }
`;
export const DropBtn = styled.button`
    background-color: white;
    color: black;
    padding: 16px;
    font-size: 16px;
    border: none;
`;

export const MenuLinks = styled.a`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
`;
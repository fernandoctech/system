import styled from 'styled-components';

export const Dashboard = styled.div`
    display:flex;
    height:100%;

`;
export const Painel = styled.div`
    background:white;
    height:95%;
    width:99%;
    margin:0 auto;
    margin-top:5px;
    border-top-left-radius:20px;
    border-top-right-radius:20px;

`;

export const SideMenu = styled.div`
    width:200px;
    display:flex;
    flex-direction:column;
    padding-top:15px;
    height:100%;

    button{
        margin-top:2px;
    }
    h1{
        margin:0 auto;
        margin-top:2px;
    }
`;
export const Menu = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:stretch;
`;
export const Logout = styled.div`
    margin:0 auto;
    margin-top:50px;
`;
export const List = styled.div `
    display:flex;
    flex-direction:column;
    width:100%;
    background:#36393f;
    margin-top:8px;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
    align-items:center;
`;

export const Container = styled.div`
    flex:1;
    height:100%;
    background:#cecece;
`;
export const FilterForm = styled.form`
    background:#36393f;
    border-radius: 5px;
    box-shadow:0 2px 10px 0 rgba(0,0,0,0.2);
    padding:40px;
    width:100%;
    height:60px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    h1{
        font-size:26px;
        font-weight:500;
        text-align:center;
        margin:0 0 10px;
    }

    span{
        color:#b9bbbe;
        font-size:14px;
        line-height:16px;
        font-weight: 600;
        margin-top:15px;
    }
    input {
        height:40px;
        padding:10px;
        border-radius:3px;
        border:1px solid rgba(0,0,0,0.3);
        background-color: rgba(0,0,0,0.1);
        color:#f6f6f6;
        margin-top:8px;
        transition:border 0.15s ease;
        &:focus {
            border-color:#c20e1a;
        }
`;
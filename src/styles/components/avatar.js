import styled, { css } from 'styled-components';

const sizes = {
    small: css`
    height:50px;
    font-size:12px;
    `,
    default:css`
    height:130px;
    width:130px;
    font-size:14px;

    `,
    big:css`
    height:200px;
    font-size:18px;
    `
};
const Avatar = styled.div`
    border-radius:100%;
    trasition:background-color 0.15s ease;
    background:#7289da;
    border:0;
    color:#fff;
    margin:0 auto;

    img{
        width:100%;
        height:100%;
        border-radius:100%;
    }

    ${props =>sizes[props.size || 'default']};
`;
export default Avatar;
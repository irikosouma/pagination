import styled from 'styled-components';
const Wrap = styled.div`
border-radius: 10px;
background-color: #fff;
height: 100%;
box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 32px 56px;
    .avatar {
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 12px;
        width:130px;
        height: 130px;
    }
    .name {
        font-size: 14px;
        line-height: 14px;
        font-weight: 700;
        color: #617d98;
        padding-bottom: 24px;
    }
    .btn-style {
        background-color: #49A6E9;
        text-transform: uppercase;
        color: #fff;
        border-radius: 12px;
        width: 120px;
        height: 25px;
        font-size: 12px;
        line-height: 18px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export {Wrap}
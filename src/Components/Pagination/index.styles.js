import styled from 'styled-components';
const Wrap = styled.div`
    padding: 5rem 0;
    /* display: flex;
    justify-content: center;
    flex-wrap: wrap; */
    .pagination {
        display: flex;
        align-items: center;
        /* justify-content: center; */

    }
    .page-item {
        border-radius: 4px;
        background: #8bcbf9;
        color: #063251;
        cursor: pointer;
        width: 30px;
        height: 30px;
        margin-right: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s linear;

    }
    .btn-style {
        margin: 0 15px;

        font-weight: 700;
        color: #063251;
        cursor: pointer;
    }
    .page-link {
        text-decoration: none;
    }
    @media only screen and (min-width: 50px){
        .pagination {
            display: flex;
            flex-wrap: wrap;
            .page-item {
                margin: 8px ;
        }
    }
}
@media only screen and (min-width: 50px){
        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
    }
}
`;
export {Wrap}
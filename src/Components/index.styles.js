import styled from 'styled-components';
const Wrap = styled.div`
    padding: 65px 0;
    height: calc(100% - 130px);
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    .wrap-title {
        margin: 0 6rem;
        .title {
            display: flex;
            align-items: center;
            font-weight: 700;
            font-size: 48px;
            line-height: 48px;
            color: #102a42;
            letter-spacing: 2px;
        }
        .border-line {
            width: 8rem;
            height: .25rem;
            margin: 0 auto;
            margin-top: 12px;
            border-bottom: 4px solid #49a6e9;
        }
    }
    .bound {
        width: 90vw;
        max-width: 1170px;
        margin: 5rem auto;
        .wrap-item {
            width: 100%;
            height: calc(100% - 64px);
            .bound-page {
                display: grid;
                grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
                grid-template-rows: repeat(3, minmax(275px,1fr));
                grid-column-gap: 35px;
                grid-row-gap: 35px;
            }
        }
    }
`;
export {Wrap}
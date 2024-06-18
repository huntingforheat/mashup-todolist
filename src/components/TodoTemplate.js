import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position: relative; /* 추후에 박스 하단에 버튼을 위치시키기 위해서 사용 */
    background: white;
    border-radius: 16px; /* 라운드 처리 */
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);    /* 박스 edge부터 50px까지 그림자처리 */

    margin: 0 auto; /* 페이지 중앙에 나타남. 0은 상단에 붙고 auto는 좌우 auto는 자동으로 가운데 정렬함. */
    margin-top: 96px;   /* 96px만큼 위에서 내려옴 */
    margin-bottom: 32px;    /* 밑에서 32px를 띄움 */
    display: flex;
    flex-direction: column;
`;

function TodoTemplate({children}) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;
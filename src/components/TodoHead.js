import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
    /* padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px; */
    padding: 48px 32px 24px 32px;   /* padding값 지정하는거는 위에랑 아래랑 같다 */
    border-bottom: 1px solid #e9ecef;   /* 아랫줄 밑줄 설정 */

    h1 { /* h1에 해당하는 설정 */
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead() {
    const todos = useTodoState();
    // console.log(todos);
    
    // 작업할 갯수
    const undoneTasks = todos.filter(todo => !todo.done);   // 작업되지 않은것을 추려내기 위한 변수     
    // console.log(undoneTasks.length);

    // 날짜
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return(
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;
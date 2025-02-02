import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from 'react-icons/md'
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const CircleButton = styled.div`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5; 
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
    ${props =>
        props.open && 
        css`
            background: #ff6b6b;
            $:hover {
                background: #ff8787;
            }
            $:active {
                background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `
    }
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute; /* 버튼 포지션의 변화가 없음 */
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoCreate() {

    // TodoCreate() 컴포넌트 상태 
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    // 추가 버튼 클릭 이벤트시 동작 설정
    const onToggle = () => setOpen(!open);

    // input 입력값 처리
    const onChange = e => setValue(e.target.value);

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    // 기능
    const onSubmit = e => {
        e.preventDefault();     // 새로고침 방지
        dispatch(
            {
                type: 'CREATE',
                todo: {
                    id: nextId.current,
                    text: value,
                    done: false
                }
            }
        );
        setValue('');
        setOpen(false);
        nextId.current += 1;
    };

    return (
        <>
            { open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input 
                            autoFocus 
                            placeholder="할 일을 입력 후, Enter를 누르세요"
                            onChange={onChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
            </CircleButton>
        </>
    )
}

export default TodoCreate;
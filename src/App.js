import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
//import Button from './component/Button';
import ButtonTotal from './component/ButtonTotal';
import Dialog from './component/Dialog';
//import Circle from './component/Circle';

const AppBlock = styled.div`
width : 512px;
margin : 0 auto;
margin-top : 4em;
border : 1px solid black;
padding : 1em;
`;


function App() {
  const [dialog,setDialog] = useState(false);
  const onClick = () =>{
    setDialog(true);
  }
  const onConfrim = () =>{
    setDialog(false);
  }
  const onCancel = () =>{
    setDialog(false);
  }
  return (
    <>
    <ThemeProvider theme={{
      palette:{
        blue : '#228be6',
        gray : '#495057',
        pink : '#f06595' 
      }
    }}>
      <AppBlock>
        <div>
        <ButtonTotal size="large">Button</ButtonTotal>
        <ButtonTotal >Button</ButtonTotal>
        <ButtonTotal size="small">Button</ButtonTotal>
        </div>
        <div>
        <ButtonTotal size="large" color="pink">Button</ButtonTotal>
        <ButtonTotal color="pink">Button</ButtonTotal>
        <ButtonTotal size="small" color="pink">Button</ButtonTotal>
        </div>
        <div>
        <ButtonTotal size="large" color="gray">Button</ButtonTotal>
        <ButtonTotal color="gray">Button</ButtonTotal>
        <ButtonTotal size="small" color="gray">Button</ButtonTotal>
        </div>
        <div>
          <ButtonTotal fullWidth>Button</ButtonTotal>
        </div>
        <div>
          <ButtonTotal fullWidth color="pink" onClick={onClick}>삭제</ButtonTotal>
        </div>
      </AppBlock>
      <Dialog title="정말로 삭제하시겠습니까?"
      confirmText="삭제"
      cancelText="취소"
      visible={dialog}
      onConfrim={onConfrim}
      onCancel={onCancel}
      >데이터를 정말로 삭제하시겠습니까?</Dialog>
    </ThemeProvider>
    
    </>
  );
}


export default App;
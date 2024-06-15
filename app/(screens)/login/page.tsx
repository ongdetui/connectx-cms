"use client";

import styled from "@emotion/styled";
import { Box, Button, Container, TextField } from "@mui/material";

const ContainerPage = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  justify-content: center;
`;

const Content = styled(Container)`
  background-color: #f6f6f6;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Input = styled(TextField)`
  margin-bottom: 30px;
`;

const LoginPage = () => {
  return (
    <ContainerPage className="top-tab">
      <Content maxWidth="sm" fixed>
        <p className="text-[24px] mb-4 text-black">Đăng nhập</p>

        <Input fullWidth label="Tên đăng nhập" id="fullWidth" className="" />
        <Input fullWidth label="Mật khẩu" id="fullWidth" type="password" />
        <Button variant="contained">Login</Button>
      </Content>
    </ContainerPage>
  );
};

export default LoginPage;

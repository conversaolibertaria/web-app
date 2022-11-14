import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 480px;
  margin: auto 0;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
`;

export const Input = styled.input`
  border: solid 1px ${({ theme }) => theme.colors.primary};
  border: solid 1px ${({ theme }) => theme.colors.primary};
  background: #f5dc0010;
`;

export const ButtonBox = styled.div`
  width: 100%;
  margin-top: 15px;
`;

export const Button = styled.button`
  padding-top: 10px 12px;
  font-size: 1rem;
  color: black;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  width: 100%;

  &:disable {
    filter: saturate(60%) grayscale(30%);
    cursor: not-allowed;
  }
`;

export const ImageBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export const SImage = styled(Image)`
`;

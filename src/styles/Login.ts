import styled from 'styled-components'

export const StyledLogin = styled.div`
  padding: 10px;
  padding-top: 2rem;
  display: flex;
  justify-content: center;

  .login-form {
    width: 100%;
    max-width: 500px;
  }

  .login-form img {
    width: 100%;
  }

  .login-input-button {
    font-size: 1rem;
    padding-top: 40px;
  }

  .login-form-input {
    border: solid 1px #f5dc00;
    background: #f5dc0010;
  }

  .login-button {
    color: black;
    font-weight: 700;
    background-color: #f5dc00;
    border: none;
  }

  .login-button:disabled {
    filter: saturate(60%) grayscale(30%);
    cursor: not-allowed;
  }
`

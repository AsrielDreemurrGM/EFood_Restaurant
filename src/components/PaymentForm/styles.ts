import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const FormContainer = styled.div`
  display: block;

  form {
    margin-bottom: 24px;

    span {
      color: ${colors.warmBeige};
      font-size: 16px;
      font-weight: 700;
    }
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .input-group {
    display: flex;
    gap: 34px;
  }

  .card-information {
    input {
      width: 228px;
    }
  }
`;

export const InputWrapper = styled.div`
  display: block;

  label {
    display: block;
    color: ${colors.warmBeige};
    font-size: 14px;
    font-weight: 700;
    margin: 8px 0;
  }

  input {
    height: 32px;
    padding: 0 8px;
    background-color: ${colors.warmBeige};
    border: 1px solid ${colors.warmBeige};
    font-size: 14px;
    font-weight: 700;
    width: 100%;
  }
`;

export const PurchaseConfirmation = styled.div`
  color: ${colors.warmBeige};

  div {
    margin-bottom: 16px;
  }

  span {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 32px;
  }

  .marginBottom {
    margin-bottom: 24px;
  }
`;

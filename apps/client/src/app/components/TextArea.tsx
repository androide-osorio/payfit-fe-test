import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label`
  ${({ theme }) => theme.typography.styles.label}
  color: ${({ theme }) => theme.colors.navy[200]};
`;

const FieldBase = styled.div`
  background: ${({ theme }) => theme.colors.common.white};
  border: 1px solid ${({ theme }) => theme.colors.silver[100]};
  border-radius: ${({ theme }) => theme.radii.xs};
  box-sizing: border-box;
  cursor: text;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.blue[100]};
  }
`;

const TextAreaField = styled.textarea`
  background: transparent;
  border: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.navy[100]};
  padding-block: 0.625rem;
  padding-inline: 0.8125rem;
  font-size: 1rem;
  flex: 1;
	resize: vertical;

  &:focus {
    outline: none;
  }

  &::placeholder {
    ${({ theme }) => theme.typography.styles.label}
    color: ${({ theme }) => theme.colors.navy[20]};
  }
`;

type Props = {
  label: string;
  name?: string;
  placeholder?: string;
  value?: string;
};

export const TextArea = ({
  label,
  value,
  ...rest
}: Props) => {

  return (
    <Wrapper>
      <Label htmlFor="">{label}</Label>
      <FieldBase>
        <TextAreaField
          {...rest}
          value={value}
        />
      </FieldBase>
    </Wrapper>
  );
};

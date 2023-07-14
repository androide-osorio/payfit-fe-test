import React from 'react';
import styled, { css } from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const InputLabel = styled.label`
  ${({ theme }) => theme.typography.styles.label}
  color: ${({ theme }) => theme.colors.navy[200]};
`;

const InputBase = styled.div<{ leftElement?: boolean; rightElement?: boolean }>`
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

const InputElement = styled.span<{ isLeft?: boolean; isRight?: boolean }>`
  color: ${({ theme }) => theme.colors.navy[20]};
  padding-block: 0.625rem;
  padding-inline-start: ${({ isLeft }) => (isLeft ? '0.8125rem' : '0')};
  padding-inline-end: ${({ isRight }) => (isRight ? '0.8125rem' : '0')};
`;

const InputField = styled.input<{
  leftElement?: boolean;
  rightElement?: boolean;
}>`
  background: transparent;
  border: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.navy[100]};
  padding-block: 0.625rem;
  font-size: 1rem;
  flex: 1;

  ${({ leftElement, rightElement }) =>
    leftElement || rightElement
      ? css`
          padding-inline: 0;
        `
      : css`
					padding-inline: 0.8125rem;
        `}

  &::placeholder {
    ${({ theme }) => theme.typography.styles.label}
    color: ${({ theme }) => theme.colors.navy[20]};
  }
	&:focus {
		outline: none;
	}
`;

type Props = {
  label: string;
  type?: 'text' | 'email' | 'password' | 'url' | 'search';
  placeholder?: string;
  value?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({label, value, leftElement, rightElement, ...rest }: Props) => {
	const hasLeftElement = Boolean(leftElement);
	const hasRightElement = Boolean(rightElement);

  return (
    <InputWrapper>
      <InputLabel htmlFor="">{label}</InputLabel>
      <InputBase>
        {hasLeftElement && <InputElement isLeft>{leftElement}</InputElement>}
        <InputField
          {...rest}
          value={value}
          leftElement={hasLeftElement}
          rightElement={hasRightElement}
        />
        {hasRightElement && <InputElement isRight>{rightElement}</InputElement>}
      </InputBase>
    </InputWrapper>
  );
};

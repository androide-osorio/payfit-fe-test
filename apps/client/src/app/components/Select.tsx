import styled, { css } from 'styled-components';
import { Unfold } from './icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label`
  ${({ theme }) => theme.typography.styles.label}
  color: ${({ theme }) => theme.colors.navy[200]};
`;

const SelectBase = styled.div<{
  leftElement?: boolean;
  rightElement?: boolean;
}>`
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

const SelectField = styled.select<{
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
  appearance: none;

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

  & option {
    color: ${({ theme }) => theme.colors.navy[100]};
  }
  & option:first-child {
    color: ${({ theme }) => theme.colors.navy[20]};
  }
`;

type Props = React.PropsWithChildren<{
  label: string;
  placeholder?: string;
  name?: string;
  value?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}>;

export const Select = ({
  children,
  label,
  value,
	placeholder,
  leftElement,
  rightElement,
  ...rest
}: Props) => {
  const hasLeftElement = Boolean(leftElement);
  const hasRightElement = Boolean(rightElement);

  return (
    <Wrapper>
      <Label htmlFor="">{label}</Label>
      <SelectBase>
        {hasLeftElement && <InputElement isLeft>{leftElement}</InputElement>}
        <SelectField
          {...rest}
          value={value}
          leftElement={hasLeftElement}
          rightElement={hasRightElement}
        >
          <option value="" disabled selected>{placeholder}</option>
          {children}
        </SelectField>
        <InputElement isRight>
          <Unfold />
        </InputElement>
      </SelectBase>
    </Wrapper>
  );
};

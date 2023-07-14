import { useId } from 'react';
import styled, { css } from 'styled-components';
import { Unfold } from '../icons';
import { Theme } from '../themes';
import { useComponentTheme } from '../hooks';

const inputThemeMap = (theme: Theme) => ({
  label: {
    color: theme.colors.navy[200],
    textStyle: theme.typography.styles.label,
  },
  inputBase: {
    background: theme.colors.common.white,
    border: `1px solid ${theme.colors.silver[100]}`,
    borderRadius: theme.radii.xs,
    color: theme.colors.navy[100],
    focusRing: `2px solid ${theme.colors.blue[100]}`,
  },
  inputAddon: {
    color: theme.colors.navy[20],
    paddingBlock: '0.625rem',
    paddingInline: '0.8125rem',
  },
  placeholder: {
    color: theme.colors.navy[20],
    textStyle: theme.typography.styles.label,
  },
});

type ThemeMap = ReturnType<typeof inputThemeMap>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label<{ $themeMap: ThemeMap['label'] }>`
  ${({ $themeMap }) => $themeMap.textStyle}
  color: ${({ $themeMap }) => $themeMap.color};
`;

const SelectBase = styled.div<{ $themeMap: ThemeMap['inputBase'] }>`
  box-sizing: border-box;
  cursor: text;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  background: ${({ $themeMap }) => $themeMap.background};
  border: ${({ $themeMap }) => $themeMap.border};
  border-radius: ${({ $themeMap }) => $themeMap.borderRadius};

  &:focus-within {
    outline: ${({ $themeMap }) => $themeMap.focusRing};
  }
`;

const InputAddon = styled.span<{
  $themeMap: ThemeMap['inputAddon'];
  $isLeft?: boolean;
  $isRight?: boolean;
}>`
  color: ${({ theme }) => theme.colors.navy[20]};
  padding-block: ${({ $themeMap }) => $themeMap.paddingBlock};
  padding-inline-start: ${({ $themeMap, $isLeft }) =>
    $isLeft ? $themeMap.paddingInline : '0'};
  padding-inline-end: ${({ $themeMap, $isRight }) =>
    $isRight ? $themeMap.paddingInline : '0'};
`;

const SelectField = styled.select<{
  $themeMap: ThemeMap;
  $leftElement?: boolean;
  $rightElement?: boolean;
}>`
  background: transparent;
  border: none;
  box-sizing: border-box;
  font-size: 1rem;
  flex: 1;
  appearance: none;

  color: ${({ $themeMap }) => $themeMap.inputBase.color};
  padding-block: ${({ $themeMap }) => $themeMap.inputAddon.paddingBlock};
  padding-inline-start: ${({ $themeMap, $leftElement }) =>
    $leftElement ? 0 : $themeMap.inputAddon.paddingInline};
  padding-inline-end: ${({ $themeMap, $rightElement }) =>
    $rightElement ? 0 : $themeMap.inputAddon.paddingInline};

  &::placeholder {
    ${({ $themeMap }) => $themeMap.placeholder.textStyle};
    color: ${({ $themeMap }) => $themeMap.placeholder.color};
  }
  &:focus {
    outline: none;
  }
`;

type Props = React.PropsWithChildren<{
  id?: string;
  label: string;
  placeholder?: string;
  name?: string;
  value?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}>;

export const Select = ({
  id,
  children,
  label,
  value,
  placeholder,
  leftElement,
  rightElement,
  ...rest
}: Props) => {
  const defaultId = useId();
  const theme = useComponentTheme(inputThemeMap);
  const hasLeftElement = Boolean(leftElement);
  const hasRightElement = Boolean(rightElement);
  const inputId = id ?? `input-${defaultId}`;

  return (
    <Wrapper>
      <Label htmlFor={inputId} $themeMap={theme.label}>
        {label}
      </Label>
      <SelectBase $themeMap={theme.inputBase}>
        {hasLeftElement && (
          <InputAddon $themeMap={theme.inputAddon} $isLeft>
            {leftElement}
          </InputAddon>
        )}
        <SelectField
          {...rest}
          id={inputId}
          value={value}
          $themeMap={theme}
          $leftElement={hasLeftElement}
          $rightElement={hasRightElement}
        >
          {placeholder && (
            <option value="" disabled selected>
              {placeholder}
            </option>
          )}
          {children}
        </SelectField>
        <InputAddon $themeMap={theme.inputAddon} $isRight>
          <Unfold />
        </InputAddon>
      </SelectBase>
    </Wrapper>
  );
};

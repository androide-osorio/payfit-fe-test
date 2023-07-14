import React, { useId } from 'react';
import styled from 'styled-components';
import { Theme } from '../themes';
import { useComponentTheme } from '../hooks';

const textAreaThemeMap = (theme: Theme) => ({
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
    paddingBlock: '0.625rem',
    paddingInline: '0.8125rem',
    textStyle: theme.typography.styles.label,
  },
  placeholder: {
    color: theme.colors.navy[20],
    textStyle: theme.typography.styles.label,
  },
});

type ThemeMap = ReturnType<typeof textAreaThemeMap>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label<{ $themeMap: ThemeMap['label'] }>`
  ${({ $themeMap }) => $themeMap.textStyle}
  color: ${({ $themeMap }) => $themeMap.color};
`;

const FieldBase = styled.div<{ $themeMap: ThemeMap['inputBase'] }>`
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

const TextAreaField = styled.textarea<{
  $themeMap: ThemeMap;
}>`
  background: transparent;
  border: none;
  box-sizing: border-box;
  padding-block: 0.625rem;
  padding-inline: 0.8125rem;
  font-size: 1rem;
  flex: 1;
  resize: vertical;
  color: ${({ $themeMap }) => $themeMap.inputBase.color};
  padding-block: ${({ $themeMap }) => $themeMap.inputBase.paddingBlock};
  padding-inline: ${({ $themeMap }) => $themeMap.inputBase.paddingInline};
  ${({ $themeMap }) => $themeMap.inputBase.textStyle};

  &::placeholder {
    ${({ $themeMap }) => $themeMap.placeholder.textStyle};
    color: ${({ $themeMap }) => $themeMap.placeholder.color};
  }
  &:focus {
    outline: none;
  }
`;

type Props = {
  label: string;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
};

export const TextArea = ({ id, label, value, ...rest }: Props) => {
  const defaultId = useId();
  const theme = useComponentTheme(textAreaThemeMap);
  const inputId = id ?? `input-${defaultId}`;

  return (
    <Wrapper>
      <Label htmlFor={inputId} $themeMap={theme.label}>{label}</Label>
      <FieldBase $themeMap={theme.inputBase}>
        <TextAreaField $themeMap={theme} {...rest} id={inputId} value={value} />
      </FieldBase>
    </Wrapper>
  );
};

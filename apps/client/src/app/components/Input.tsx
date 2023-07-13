import React from 'react';
import styled from 'styled-components';

type Props = {
	label: string;
	type: 'text' | 'email' | 'password' | 'url';
}

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
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
  /* padding: 0.625rem 0.8125rem; */
  gap: 0.5rem;
`;

const Input = () => {
	return (
		<InputWrapper>
			<label htmlFor=""></label>
			<InputBase>
				<input type="text" />
			</InputBase>
		</InputWrapper>
	);
};

export default Input;
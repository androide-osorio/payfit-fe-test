import styled from 'styled-components';

type AvatarProps = React.PropsWithChildren<{
  // Props go here
	color?: 'default' | 'accent';
}>;

const AvatarBase = styled('div')<AvatarProps>`
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.radii.xs};
  padding: 0.25rem;
  background-color: ${({ color = 'default', theme }) => color === 'accent' ? theme.colors.blue[100] : theme.colors.navy[100]};
`;

export const Avatar = ({ children, ...props }: AvatarProps) => {
  return <AvatarBase {...props}>{children}</AvatarBase>;
};

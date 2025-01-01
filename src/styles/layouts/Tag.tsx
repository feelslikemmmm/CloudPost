import styled, { css } from 'styled-components';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography,
  variant,
} from 'styled-system';

export interface ITypoProps {
  typo?: string | any;
}

const styles = compose(
  color,
  flexbox,
  grid,
  layout,
  position,
  border,
  space,
  typography,
  background
);

export interface ITagProps
  extends ColorProps,
    FlexboxProps,
    LayoutProps,
    BorderProps,
    PositionProps,
    TypographyProps,
    GridProps,
    BackgroundProps,
    SpaceProps,
    ITypoProps {}

const A = styled.a<ITagProps>`
  ${styles}
`;

const Div = styled.div<ITagProps>`
  ${styles}
  white-space: pre-line;
`;

const Img = styled.img<ITagProps>`
  ${styles}
`;

const Video = styled.video<ITagProps>`
  ${styles}
`;

const Audio = styled.audio<ITagProps>`
  ${styles}
`;

const Span = styled.span<ITagProps>`
  ${styles}
`;

const Input = styled.input<ITagProps>`
  outline: 0;
  border: none;
  ${styles}
`;
Input.defaultProps = {
  color: 'black',
  fontSize: 3,
};

const TextArea = styled.textarea<ITagProps>`
  outline: 0;
  white-space: pre-line;
  word-break: break-all;
  ${styles};
`;
TextArea.defaultProps = {
  color: 'black',
  fontSize: 3,
};

const Select = styled.select<ITagProps>``;

const Option = styled.option<ITagProps>``;

const Ol = styled.ol<ITagProps>`
  ${styles}
`;

const Ul = styled.ul<ITagProps>`
  ${styles}
`;

const LI = styled.li<ITagProps>`
  ${styles}
`;

const Button = styled.button<ITagProps>`
  padding: 0px;
  ${styles}
  cursor: pointer;
  box-sizing: border-box;
  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
    `}
`;

Button.defaultProps = {
  bg: 'transparent',
  border: 'none',
};

const I = styled.i<ITagProps>`
  ${styles}
`;

const HR = styled.hr<ITagProps>``;

const SUP = styled.sup<ITagProps>``;

export function withStyle(component: any) {
  return styled(component)<ITagProps>`
    ${styles}
  `;
}

export {
  Div,
  Input,
  Img,
  TextArea,
  Video,
  Audio,
  Span,
  A,
  Select,
  Option,
  Ol,
  Ul,
  LI,
  Button,
  I,
  HR,
  SUP,
};

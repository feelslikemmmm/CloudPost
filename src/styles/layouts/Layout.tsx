import styled from 'styled-components';
import { Div } from './Tag';

const Column = styled(Div)``;
Column.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
};

const Row = styled(Div)``;
Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
};

const CenterRow = styled(Div)``;
CenterRow.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

const CenterColumn = styled(Div)``;
CenterColumn.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const Wrap = styled(Div)``;
Wrap.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap',
};

const Full = styled(Div)``;
Full.defaultProps = { minHeight: '100vh' };

const Grid = styled(Div)``;
Grid.defaultProps = { display: 'grid' };

const Spacer = styled(Div)``;
Spacer.defaultProps = { flex: 1 };

const Mask = styled(Div)``;
Mask.defaultProps = {
  bg: 'imageMask',
  position: 'absolute',
  top: '0px',
  bottom: '0px',
  left: '0px',
  right: '0px',
};

const AbsoluteFull = styled(Div)``;
AbsoluteFull.defaultProps = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  right: '0px',
  bottom: '0px',
};

export {
  Column,
  Full,
  Row,
  Spacer,
  Wrap,
  Mask,
  Grid,
  CenterRow,
  CenterColumn,
  AbsoluteFull,
};

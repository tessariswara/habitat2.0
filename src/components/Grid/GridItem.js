// material-ui
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// ===============================|| GRID - ITEMS ||=============================== //

const GridItem = styled(Paper)(({ theme }) => ({
  letterSpacing: theme.typography.body2.letterSpacing,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.habitat.white,
  background: theme.palette.habitat.primary
}));

export default GridItem;

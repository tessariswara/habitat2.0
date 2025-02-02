'use client';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import SubCard from 'components/ui-component/cards/SubCard';
import MainCard from 'components/ui-component/cards/MainCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import SkeletonEarningCard from 'components/ui-component/cards/Skeleton/EarningCard';
import SkeletonTotalIncomeCard from 'components/ui-component/cards/Skeleton/TotalIncomeCard';
import SkeletonChartCard from 'components/ui-component/cards/Skeleton/TotalGrowthBarChart';
import SkeletonPopularCard from 'components/ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// ==============================|| UI SKELETON ||============================== //

const UISkeleton = () => (
  <MainCard title="Skeleton" secondary={<SecondaryAction link="https://next.material-ui.com/components/skeleton/" />}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={6}>
        <SubCard title="Example  1">
          <SkeletonEarningCard />
        </SubCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <SubCard title="Example 2">
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <SkeletonTotalIncomeCard />
            </Grid>
            <Grid item xs={12}>
              <SkeletonTotalIncomeCard />
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <SubCard title="Example 3">
          <SkeletonChartCard />
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <SubCard title="Example 4">
          <SkeletonPopularCard />
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);

export default UISkeleton;

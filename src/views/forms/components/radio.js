'use client';

import React from 'react';

// material-ui
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

// project imports
import SubCard from 'components/ui-component/cards/SubCard';
import MainCard from 'components/ui-component/cards/MainCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| RADIO ||============================== //

const UIRadio = () => {
  const [valueBasic, setValueBasic] = React.useState('female');
  const [valueLabel, setValueLabel] = React.useState('checked');
  const [valuePlacement, setValuePlacement] = React.useState('top');
  const [valueSize, setValueSize] = React.useState('md');
  const [valueColor, setValueColor] = React.useState('default');

  return (
    <MainCard title="Radio" secondary={<SecondaryAction link="https://next.material-ui.com/components/radio-buttons/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <SubCard title="Basic Radio">
            <Grid container spacing={2}>
              <Grid item>
                <FormControl>
                  <RadioGroup
                    row
                    aria-label="gender"
                    value={valueBasic}
                    onChange={(e) => setValueBasic(e.target.value)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="" />
                    <FormControlLabel value="male" control={<Radio />} label="" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item>
                <RadioGroup row aria-label="gender1" name="row-radio-buttons-group-disabled">
                  <FormControlLabel value="female1" control={<Radio />} label="" checked disabled />
                  <FormControlLabel value="male1" control={<Radio />} label="" disabled />
                </RadioGroup>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Radio with Label">
            <Grid container spacing={2}>
              <Grid item>
                <FormControl>
                  <RadioGroup
                    row
                    aria-label="gender"
                    value={valueLabel}
                    onChange={(e) => setValueLabel(e.target.value)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="checked" control={<Radio />} label="Checked" />
                    <FormControlLabel value="unchecked" control={<Radio />} label="Unchecked" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item>
                <RadioGroup row aria-label="gender1" name="row-radio-buttons-group-disabled">
                  <FormControlLabel value="female1" control={<Radio />} label="Checked" checked disabled />
                  <FormControlLabel value="male1" control={<Radio />} label="Unchecked" disabled />
                </RadioGroup>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="With Placement">
            <Grid container spacing={2}>
              <Grid item>
                <FormControl>
                  <RadioGroup
                    row
                    aria-label="gender"
                    value={valuePlacement}
                    onChange={(e) => setValuePlacement(e.target.value)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="top" control={<Radio />} label="Top" labelPlacement="top" />
                    <FormControlLabel value="start" control={<Radio />} label="Start" labelPlacement="start" />
                    <FormControlLabel value="bottom" control={<Radio />} label="Bottom" labelPlacement="bottom" />
                    <FormControlLabel value="end" control={<Radio />} label="End" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Size">
            <Grid container spacing={2}>
              <Grid item>
                <FormControl>
                  <RadioGroup
                    row
                    aria-label="gender"
                    value={valueSize}
                    onChange={(e) => setValueSize(e.target.value)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="sm" control={<Radio />} label="" sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                    <FormControlLabel value="md" control={<Radio />} label="" />
                    <FormControlLabel value="lg" control={<Radio />} label="" sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12}>
          <SubCard title="With Color">
            <Grid container spacing={2}>
              <Grid item>
                <FormControl>
                  <RadioGroup
                    row
                    aria-label="gender"
                    value={valueColor}
                    onChange={(e) => setValueColor(e.target.value)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio sx={{ color: 'primary.main', '&.Mui-checked': { color: 'primary.main' } }} />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio sx={{ color: 'error.main', '&.Mui-checked': { color: 'error.main' } }} />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="success"
                      control={<Radio sx={{ color: 'success.main', '&.Mui-checked': { color: 'success.main' } }} />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="secondary"
                      control={<Radio sx={{ color: 'secondary.main', '&.Mui-checked': { color: 'secondary.main' } }} />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="warning"
                      control={<Radio sx={{ color: 'warning.main', '&.Mui-checked': { color: 'warning.main' } }} />}
                      label="Yes"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default UIRadio;

'use client';

// material-ui
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

// project imports
import MainCard from 'components/ui-component/cards/MainCard';
import SubCard from 'components/ui-component/cards/SubCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// assets
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';

// autocomplete options
const top100Films = [
  { label: 'The Dark Knight', id: 1 },
  { label: 'Control with Control', id: 2 },
  { label: 'Combo with Solo', id: 3 },
  { label: 'The Dark', id: 4 },
  { label: 'Fight Club', id: 5 },
  { label: 'demo@company.com', id: 6 },
  { label: 'Pulp Fiction', id: 7 }
];

// ==============================|| AUTOCOMPLETE ||============================== //

const AutoComplete = () => (
  <MainCard title="Autocomplete" secondary={<SecondaryAction link="https://next.material-ui.com/components/autocomplete/#main-content" />}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={6} lg={4}>
        <SubCard title="Combo Box">
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Autocomplete
                disableClearable
                options={top100Films}
                defaultValue={top100Films[0]}
                renderInput={(params) => <TextField {...params} label="" />}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                disablePortal
                options={top100Films}
                defaultValue={top100Films[1]}
                renderInput={(params) => <TextField {...params} label="" />}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                disablePortal
                options={top100Films}
                defaultValue={top100Films[2]}
                renderInput={(params) => <TextField {...params} label="" />}
              />
            </Grid>
          </Grid>
        </SubCard>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <SubCard title="With Caption">
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Autocomplete
                disablePortal
                options={top100Films}
                defaultValue={top100Films[5]}
                renderInput={(params) => <TextField {...params} label="Email Address" />}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                disablePortal
                options={top100Films}
                defaultValue={top100Films[5]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Email Address"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailTwoToneIcon fontSize="small" sx={{ color: 'grey.700' }} />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SubCard title="Combo with Multiple Options">
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={top100Films}
                defaultValue={[top100Films[0], top100Films[4]]}
                filterSelectedOptions
                renderOption={(props, option) => (
                  <li {...props} key={option.id}>
                    {option.label}
                  </li>
                )}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => <Chip {...getTagProps({ index })} key={option.id} label={option.label} />)
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);

export default AutoComplete;

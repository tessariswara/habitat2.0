import PropTypes from 'prop-types';
import Image from 'next/image';

// material-ui
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// third-party
import * as yup from 'yup';
import { useFormik } from 'formik';

// project imports
import UploadMultiFile from 'components/ui-component/third-party/dropzone/MultiFile';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { DropzoneType } from 'components/ui-component/third-party/dropzone/constant';
import { openSnackbar } from 'store/slices/snackbar';
import { dispatch, useSelector } from 'store';
import { editItem } from 'store/slices/kanban';

const avatarImage = '/assets/images/users';
const validationSchema = yup.object({
  title: yup.string().required('Task title is required'),
  dueDate: yup.date()
});

// ==============================|| KANBAN BOARD - ITEM EDIT ||============================== //

const EditItem = ({ item, profiles, userStory, columns, handleDrawerOpen }) => {
  const { items } = useSelector((state) => state.kanban);
  const itemUserStory = userStory.filter((story) => story.itemIds.filter((itemId) => itemId === item.id)[0])[0];
  const itemColumn = columns.filter((column) => column.itemIds.filter((itemId) => itemId === item.id)[0])[0];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: item.id,
      title: item.title,
      assign: item.assign,
      priority: item.priority,
      dueDate: item.dueDate ? new Date(item.dueDate) : new Date(),
      description: item.description,
      commentIds: item.commentIds,
      image: item.image,
      storyId: itemUserStory ? itemUserStory.id : '',
      columnId: itemColumn ? itemColumn.id : '',
      files: item.attachments
    },
    validationSchema,
    onSubmit: (values) => {
      const itemToEdit = {
        id: values.id,
        title: values.title,
        assign: values.assign,
        priority: values.priority,
        dueDate: values.dueDate ? new Date(values.dueDate) : new Date(),
        description: values.description,
        commentIds: values.commentIds,
        image: values.image,
        attachments: values.files
      };
      dispatch(editItem(values.columnId, columns, itemToEdit, items, values.storyId, userStory));
      dispatch(
        openSnackbar({
          open: true,
          message: 'Submit Success',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: false
        })
      );

      handleDrawerOpen();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1">Assign to:</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Grid container justifyContent="flex-start">
                  <Autocomplete
                    id="assign"
                    value={profiles.find((profile) => profile.id === formik.values.assign)}
                    onChange={(event, value) => {
                      formik.setFieldValue('assign', value?.id);
                    }}
                    options={profiles}
                    fullWidth
                    autoHighlight
                    getOptionLabel={(option) => option.name}
                    isOptionEqualToValue={(option) => option.id === formik.values.assign}
                    renderOption={(props, option) => (
                      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <Image
                          loading="lazy"
                          width={20}
                          height={20}
                          src={`${avatarImage}/${option.avatar}`}
                          alt=""
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                        {option.name}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="assign"
                        label="Choose a assignee"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'new-password' // disable autocomplete and autofill
                        }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1">Prioritize:</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-label="color"
                    value={formik.values.priority}
                    onChange={formik.handleChange}
                    name="priority"
                    id="priority"
                  >
                    <FormControlLabel value="low" control={<Radio color="primary" sx={{ color: 'primary.main' }} />} label="Low" />
                    <FormControlLabel value="medium" control={<Radio color="warning" sx={{ color: 'warning.main' }} />} label="Medium" />
                    <FormControlLabel value="high" control={<Radio color="error" sx={{ color: 'error.main' }} />} label="High" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1">Due date:</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <DesktopDatePicker
                  label="Due Date"
                  value={formik.values.dueDate}
                  format="dd/MM/yyyy"
                  onChange={(date) => {
                    formik.setFieldValue('dueDate', date);
                  }}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1">Description:</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  id="description"
                  name="description"
                  multiline
                  rows={3}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1">User Story:</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth>
                  <Select
                    id="storyId"
                    name="storyId"
                    displayEmpty
                    value={formik.values.storyId}
                    onChange={formik.handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    {userStory.map((story, index) => (
                      <MenuItem key={index} value={story.id}>
                        {story.id} - {story.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1">State:</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth>
                  <Select
                    id="columnId"
                    name="columnId"
                    displayEmpty
                    value={formik.values.columnId}
                    onChange={formik.handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    {columns.map((column, index) => (
                      <MenuItem key={index} value={column.id}>
                        {column.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Attachments:</Typography>
              </Grid>
              <Grid item xs={12}>
                <UploadMultiFile
                  type={DropzoneType.standard}
                  showList
                  setFieldValue={formik.setFieldValue}
                  files={formik.values.files}
                  error={formik.touched.files && !!formik.errors.files}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <AnimateButton>
              <Button fullWidth variant="contained" type="submit">
                Save
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </form>
  );
};

EditItem.propTypes = {
  item: PropTypes.object,
  profiles: PropTypes.array,
  userStory: PropTypes.array,
  columns: PropTypes.array,
  handleDrawerOpen: PropTypes.func
};

export default EditItem;

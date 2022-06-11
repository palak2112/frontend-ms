import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SelectSmall() {
  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">State</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={state}
        label="State"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Andhra Pradesh</MenuItem>
        <MenuItem value={2}>Arunachal Pradesh</MenuItem>
        <MenuItem value={3}>Assam</MenuItem>
        <MenuItem value={4}>Bihar</MenuItem>
        <MenuItem value={5}>Chhattisgarh</MenuItem>
        <MenuItem value={6}>Goa</MenuItem>
        <MenuItem value={7}>Gujarat</MenuItem>
        <MenuItem value={8}>Haryana</MenuItem>
        <MenuItem value={9}>Himachal Pradesh</MenuItem>
        <MenuItem value={10}>Jharkhand</MenuItem>
        <MenuItem value={11}>Karnataka</MenuItem>
        <MenuItem value={12}>Kerala</MenuItem>
        <MenuItem value={13}>Madhya Pradesh</MenuItem>
        <MenuItem value={14}>Maharashtra</MenuItem>
        <MenuItem value={15}>Manipur</MenuItem>
        <MenuItem value={16}>Meghalaya</MenuItem>
        <MenuItem value={17}>Mizoram</MenuItem>
        <MenuItem value={18}>Nagaland</MenuItem>
        <MenuItem value={19}>Odisha</MenuItem>
        <MenuItem value={20}>Punjab</MenuItem>
        <MenuItem value={21}>Rajasthan</MenuItem>
        <MenuItem value={22}>Sikkim</MenuItem>
        <MenuItem value={23}>Tamil Nadu</MenuItem>
        <MenuItem value={24}>Telangana</MenuItem>
        <MenuItem value={25}>Tripura</MenuItem>
        <MenuItem value={26}>Uttarakhand</MenuItem>
        <MenuItem value={27}>Uttar Pradesh</MenuItem>
        <MenuItem value={28}>West Bengal</MenuItem>
      </Select>
    </FormControl>
  );
}
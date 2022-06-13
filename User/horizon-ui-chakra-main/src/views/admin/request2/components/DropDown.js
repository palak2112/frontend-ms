import * as React from 'react';
import { useTranslation } from "react-i18next";

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SelectSmall() {
  const [state, setState] = React.useState('');
  const {t} = useTranslation();

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
          <em>{t("None")}</em>
        </MenuItem>
        <MenuItem value={1}>{t("Andhra Pradesh")} </MenuItem>
        <MenuItem value={2}>{t("Arunachal Pradesh")} </MenuItem>
        <MenuItem value={3}>{t("Assam")} </MenuItem>
        <MenuItem value={4}>{t("Bihar")} </MenuItem>
        <MenuItem value={5}>{t("Chhattisgarh")} </MenuItem>
        <MenuItem value={6}>{t("Goa")} </MenuItem>
        <MenuItem value={7}>{t("Gujarat")} </MenuItem>
        <MenuItem value={8}>{t("Haryana")} </MenuItem>
        <MenuItem value={9}>{t("Himachal Pradesh")} </MenuItem>
        <MenuItem value={10}>{t("Jharkhand")} </MenuItem>
        <MenuItem value={11}>{t("Karnataka")} </MenuItem>
        <MenuItem value={12}>{t("Kerala")} </MenuItem>
        <MenuItem value={13}>{t("Madhya Pradesh")} </MenuItem>
        <MenuItem value={14}>{t("Maharashtra")} </MenuItem>
        <MenuItem value={15}>{t("Manipur")} </MenuItem>
        <MenuItem value={16}>{t("Meghalaya")} </MenuItem>
        <MenuItem value={17}>{t("Mizoram")} </MenuItem>
        <MenuItem value={18}>{t("Nagaland")} </MenuItem>
        <MenuItem value={19}>{t("Odisha")} </MenuItem>
        <MenuItem value={20}>{t("Punjab")} </MenuItem>
        <MenuItem value={21}>{t("Rajasthan")} </MenuItem>
        <MenuItem value={22}>{t("Sikkim")} </MenuItem>
        <MenuItem value={23}>{t("Tamil Nadu")} </MenuItem>
        <MenuItem value={24}>{t("Telangana")} </MenuItem>
        <MenuItem value={25}>{t("Tripura")} </MenuItem>
        <MenuItem value={26}>{t("Uttarakhand")} </MenuItem>
        <MenuItem value={27}>{t("Uttar Pradesh")} </MenuItem>
        <MenuItem value={28}>{t("West Bengal")} </MenuItem>
      </Select>
    </FormControl>
  );
}
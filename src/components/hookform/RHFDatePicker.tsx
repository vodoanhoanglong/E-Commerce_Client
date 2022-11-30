import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface RHFDatePickerProps {
  name: string;
  label: string;
}

function RHFDatePicker({ name, label }: RHFDatePickerProps) {
  const { control } = useFormContext();
  const [reqDate, setreqDate] = useState(new Date());
  return (
    <Controller
      name={name}
      defaultValue={reqDate}
      control={control}
      render={({ field: { onChange, ...restField } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label={label}
            inputFormat="dd/MM/yyyy"
            onChange={(event) => {
              onChange(event);
              setreqDate(event);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      transition: "all 0.25s ease",
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
              />
            )}
            {...restField}
          />
        </LocalizationProvider>
      )}
    />
  );
}

export default RHFDatePicker;

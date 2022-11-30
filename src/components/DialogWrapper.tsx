import { Dialog, DialogContent, DialogTitle, styled } from "@mui/material";

export interface DialogProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DialogStyle = styled(Dialog)(() => ({
  "& .MuiBackdrop-root": {
    background: "rgb(33 43 54 / 80%);",
  },
}));

const DialogContentStyle = styled(DialogContent)(() => ({
  flex: "1 1 auto",
  padding: "0 24px 24px",
  borderBottom: "1px dashed rgb(145 158 171 / 24%)",
}));

function DialogWrapper(props: DialogProps) {
  const { title, open, onClose, children } = props;

  return (
    <DialogStyle scroll="paper" open={open} onClose={onClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContentStyle>{children}</DialogContentStyle>
    </DialogStyle>
  );
}

export default DialogWrapper;

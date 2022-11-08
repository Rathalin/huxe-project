import { ArrowBack } from "@mui/icons-material";
import { Button, ButtonProps } from "@mui/material";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

type BackButtonProps = PropsWithChildren<{}> & ButtonProps;

export const BackButton = ({ children, ...props }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button {...props}
      variant='contained'
      sx={{ mt: 3, mb: 2, gap: 1 }}
      onClick={() => navigate(-1)}
    >
      <ArrowBack />
      {children == null ? <span>Back</span> : children}
    </Button>
  );
}

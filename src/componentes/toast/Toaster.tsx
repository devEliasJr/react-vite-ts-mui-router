import type { FC } from 'react';
import { Toaster as HotToaster } from 'react-hot-toast';
import { alpha, useTheme } from '@mui/material/styles';

export const Toaster: FC = () => {
  const theme = useTheme();

  return (
    <HotToaster
      position="top-center"
      toastOptions={{
        style: {
          backdropFilter: 'blur(6px)',
          background: alpha(theme.palette.grey[800], 0.8),
          color: theme.palette.common.white,
          boxShadow: theme.shadows[16],
        }
      }}
    />
  );
};
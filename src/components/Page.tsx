import React, { forwardRef } from 'react';
import { Box } from '@mui/material';
import Helmet from './Helmet';

interface IPageProps {
  title: string;
  children?: React.ReactNode;
  meta?: React.ReactNode;
}

const Page = forwardRef(({ children, title, meta, ...other }: IPageProps, ref) => (
  <React.Fragment>
    <Helmet title={title}>
      <Box ref={ref} {...other}>
        {children}
      </Box>
    </Helmet>
  </React.Fragment>
));

export default Page;

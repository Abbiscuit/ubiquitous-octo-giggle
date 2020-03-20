import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const AlreadyUser = () => {
  return (
    <Box>
      <Button
        size="small"
        variant="text"
        color="primary"
        fullWidth
        centerRipple
        component={Link}
        to="/login"
      >
        既にアカウントを持っている
      </Button>
    </Box>
  );
};

export default AlreadyUser;

import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom';

const ProfileFeed = () => {
  return (
    <div
      style={{
        padding: '0 8px'
      }}
    >
      <Card variant="outlined" elevation={0} style={{ marginBottom: 8 }}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar
                aria-label="user name"
                src="https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              >
                H
              </Avatar>
            }
            title="通しすがりのJS兄さん"
          />

          <CardContent>
            <Typography variant="body2" color="textPrimary" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed
              incidunt excepturi. Officiis numquam ipsa nostrum nemo quisquam
              libero! Enim cum perspiciatis a reprehenderit saepe aliquam
              assumenda maiores labore vero.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div style={{ flex: 1 }}>
            <Button component={Link} to="/feed">
              Learn More
            </Button>
          </div>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card variant="outlined" elevation={0} style={{ marginBottom: 8 }}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar
                aria-label="user name"
                src="https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              >
                H
              </Avatar>
            }
            title="通しすがりのJS兄さん"
          />
          <CardContent>
            <Typography variant="body2" color="textPrimary" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed
              incidunt excepturi. Officiis numquam ipsa nostrum nemo quisquam
              libero! Enim cum perspiciatis a reprehenderit saepe aliquam
              assumenda maiores labore vero.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div style={{ flex: 1 }}>
            <Button component={Link} to="/feed">
              Learn More
            </Button>
          </div>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProfileFeed;

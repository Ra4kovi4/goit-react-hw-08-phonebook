import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  Fab,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { UpdateContactModal } from '../UpdateContactModal/UpdateContactModal';
import { useTheme } from '@mui/system';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Avatar from 'react-avatar';

export const ContactsItems = ({ id, name, number }) => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const dispatch = useDispatch();
  const handlerDelete = () =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(() =>
        toast.success(
          'The contact was successfully deleted from the phone book'
        )
      )
      .catch(() => toast.error('Something went wrong, please try again'));

  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <>
      <ListItemIcon>
        <Avatar
          color={getRandomHexColor()}
          name={name}
          size="45"
          round={true}
          textSizeRatio={3}
        />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            type="body2"
            style={{
              color: theme.palette.mode === 'dark' ? '#cfd8dc' : '#455a64',
              fontWeight: '600',
            }}
          >
            {name}
          </Typography>
        }
        secondary={
          <Typography
            type="body2"
            style={{
              color: theme.palette.mode === 'dark' ? '#cfd8dc' : '#455a64',
            }}
          >
            {number}
          </Typography>
        }
      />

      <ListItemSecondaryAction
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          mr: { xs: '-10px', md: '0' },
        }}
      >
        <Fab
          aria-label="edit contact"
          onClick={handleOpenModal}
          edge="end"
          sx={{
            bgcolor: theme.palette.mode === 'dark' ? '#e65100' : '#f57c00',
            mb: { xs: '5px', md: '0' },
            mr: { md: '10px' },
            width: { xs: '40px', md: '60px' },
            height: { xs: '40px', md: '60px' },
          }}
        >
          <EditIcon />
        </Fab>
        <Fab
          aria-label="delete contact"
          onClick={handlerDelete}
          edge="end"
          sx={{
            bgcolor: theme.palette.mode === 'dark' ? '#b71c1c' : '#d32f2f',
            width: { xs: '40px', md: '60px' },
            height: { xs: '40px', md: '60px' },
          }}
        >
          <DeleteForeverIcon />
        </Fab>
      </ListItemSecondaryAction>
      <UpdateContactModal
        isOpenModal={isModalOpen}
        onClose={handleCloseModal}
        id={id}
        name={name}
        number={number}
      />
    </>
  );
};

ContactsItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

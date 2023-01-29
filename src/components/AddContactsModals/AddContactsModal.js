import PropTypes from 'prop-types';
import { Backdrop, Box, Modal, Fade } from '@mui/material';

import { AddContactForm } from '../AddContactForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  width: 300,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: '20px',
  zIndex: 1000,
  borderRadius: '15px',
};

export const AddContactModal = ({ isOpenModal, onClose }) => (
  <div>
    <Modal
      open={isOpenModal}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="spring-modal-name"
      aria-describedby="spring-modal-number"
    >
      <Fade in={isOpenModal}>
        <Box sx={style}>
          <AddContactForm onClose={onClose} />
        </Box>
      </Fade>
    </Modal>
  </div>
);

AddContactModal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

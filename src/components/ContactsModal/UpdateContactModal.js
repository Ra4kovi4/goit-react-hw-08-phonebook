import PropTypes from 'prop-types';
import { Backdrop, Box, Modal, Fade } from '@mui/material';

import { UpdateContactForm } from '../UpdateContactForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  zIndex: 1000,
  borderRadius: '15px',
};

export const UpdateContactModal = ({ isOpenModal, onClose }) => (
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
          <UpdateContactForm onClose={onClose} />
        </Box>
      </Fade>
    </Modal>
  </div>
);

UpdateContactModal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

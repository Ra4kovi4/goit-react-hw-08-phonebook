import PropTypes from 'prop-types';
import { Backdrop, Box, Modal, Fade } from '@mui/material';
import { UpdateContactForm } from 'components/UpdateContactForm';

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

export const UpdateContactModal = ({
  isOpenModal,
  onClose,
  id,
  name,
  number,
}) => (
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
        <UpdateContactForm
          onClose={onClose}
          id={id}
          name={name}
          number={number}
        />
      </Box>
    </Fade>
  </Modal>
);

UpdateContactModal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

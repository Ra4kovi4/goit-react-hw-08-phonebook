import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoader, selectContacts } from 'redux/contacts/selectors';
import { Fab, Typography, Box } from '@mui/material';
import { ContactsList } from '../ContactsList';
import { Loading } from 'notiflix';
import { AddContactModal } from '../AddContactsModals';
import { Filter } from '../Filter';
import { Container } from '@mui/system';
import { useTheme } from '@mui/system';

export default function Contacts() {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Box maxWidth="xl">
        <Container display="flex">
          {contacts.length !== 0 && <Filter />}
        </Container>
        <Container>
          {contacts.length !== 0 ? (
            <ContactsList />
          ) : (
            <Container sx={{ m: '25px auto 15px auto' }} maxWidth="sm">
              <Typography variant="h5" component="h2" gutterBottom>
                Please add the contact to your phonebook
              </Typography>
            </Container>
          )}
          {isLoading ? Loading.pulse() : Loading.remove()}

          <Fab
            aria-label="Add contact"
            color="primary"
            size="large"
            sx={{
              position: 'absolute',
              top: '9%',
              right: '1%',
              width: '70px',
              height: '70px',
              bgcolor: theme.palette.mode === 'dark' ? '#0288d1' : '#01579b',
            }}
            onClick={handleOpenModal}
          >
            <Typography
              component="p"
              fontSize={12}
              fontWeight="700"
              textTransform="none"
            >
              Add contact
            </Typography>
          </Fab>
          <AddContactModal
            isOpenModal={isModalOpen}
            onClose={handleCloseModal}
          />
        </Container>
      </Box>
    </>
  );
}

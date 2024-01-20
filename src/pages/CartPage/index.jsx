import { Button, Input, Stack, Typography } from '@mui/material';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import img1 from '../../assets/Asgaard sofa 3.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import { SCREEN_URL } from '../../constants/screenUrls';

const CartPage = () => {
  return (
    <>
      <Stack position={'relative'}>
        <img
          src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705684050/ShopImage01_plvame.png"
          alt=""
          width={'100%'}
        />
        <Stack
          spacing={2}
          sx={{
            position: 'absolute',
            flexDirection: 'column',
            alignItems: 'stretch',
            transform: 'translate(-50%, -20%)',
            transition: '.3s',
            top: '50%',
            left: '50%'
          }}>
          <Typography variant="h2" fontSize={'48px'}>
            Shop
          </Typography>
          <Stack direction={'row'}>
            <Typography variant="h5">Home</Typography>
            <NavigateNextIcon></NavigateNextIcon>
            <Typography variant="h5">Shop</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack padding={'72px 100px'} bgcolor={'#FFF;'}>
        <Stack direction="row" justifyContent={'space-between'} gap={5}>
          <Stack width={'70%'}>
            <Stack
              bgcolor={'#F9F1E7'}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              padding={'15px 70px'}>
              <Typography marginLeft={'60px'}>Product </Typography>
              <Typography marginLeft={'57px'}>Price</Typography>
              <Typography>Quantity</Typography>
              <Typography>Subtotal</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              marginTop="30px"
              // justifyContent="space-between"
            >
              <img
                src={img1}
                alt=""
                style={{
                  borderRadius: '5px',
                  width: '111px',
                  height: '90px'
                  // justifyContent: 'space-between'
                }}
              />
              <Stack
                width={'80%'}
                direction="row"
                justifyContent="space-around"
                alignItems="center">
                <Typography
                  sx={{
                    color: '#9F9F9F',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}>
                  Asgaard sofa
                </Typography>
                <Typography
                  sx={{
                    color: '#9F9F9F',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}>
                  Rs. 250,000.00
                </Typography>

                <Typography
                  sx={{
                    // minWidth: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '3px',
                    border: '1px solid black',
                    width: '32px',
                    height: '32px'
                  }}>
                  1
                </Typography>
                <Typography
                  sx={{
                    color: '#000',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}>
                  Rs. 250,000.00
                </Typography>
              </Stack>
              <Stack>
                <RiDeleteBin7Fill size={'28px'} style={{ color: '#B88E2F', flexShrink: 0 }} />
              </Stack>
            </Stack>
          </Stack>

          <Stack
            padding={'15px'}
            spacing={5}
            width={'30%'}
            bgcolor={'#F9F1E7'}
            alignItems={'center'}>
            <Typography
              sx={{
                color: '#000',
                fontFamily: ' Poppins',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal'
              }}>
              Cart Totals
            </Typography>

            <Stack direction={'column'} spacing={5}>
              <Stack direction={'row'} spacing={6}>
                <Typography>Subtotal</Typography>
                <Typography
                  sx={{
                    color: '#9F9F9F',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}>
                  Rs. 250,000.00
                </Typography>
              </Stack>

              <Stack spacing={5} direction={'row'}>
                <Typography>Total</Typography>
                <Typography
                  sx={{
                    color: 'var(--Primary, #B88E2F)',
                    fontFamily: 'Poppins',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}>
                  Rs. 250,000.00
                </Typography>
              </Stack>
            </Stack>

            <Button
              label="Home"
              component={Link}
              to={SCREEN_URL.HOME}
              sx={{
                border: '1px solid #000000',
                borderRadius: '7px',
                padding: '14px 58px',
                color: '#000000'
              }}>
              Check out
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CartPage;

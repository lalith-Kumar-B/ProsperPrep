import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {SignedIn,SignedOut,SignInButton,SignUpButton} from "@clerk/clerk-react";
function AuthWrap({children}) {
  return (
    <>
    <SignedIn>
      {children}
    </SignedIn>
    <SignedOut>
    <div className='w-full flex justify-center items-center '>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200}}
        image="/sign-up-4922762-4097209.webp"
        title="SignUp and SignUp"
      />
      <CardContent className='p-2'>
        <Typography variant="h5" color="text.danger" >
          <p>To Acces the above links, signUp with Us or signIn. we use your data to keep track of your progress and personalization</p>
        </Typography>
      </CardContent>
      <CardActions>
        <div className='flex w-96 justify-center items-center'>
        <Button size="small"><SignUpButton className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'/></Button>
        <Button size="small"><SignInButton>
        <button className='text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>SignIn</button>
      </SignInButton></Button>
      </div>
      </CardActions>
    </Card>
    </div>
    </SignedOut>
    </>
  )
}

export default AuthWrap;

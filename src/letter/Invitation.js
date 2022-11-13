import React from 'react';
import {
    Link,
    Button
  } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';

// Styling
import './Invitation.css';

const Invitation = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='main'>
                <div className='invitation-letter'>
                    <h1>Stem til folketingsvalget 2022</h1>
                    <div className='invitation-letter-text'>
                        <p>Den 1. november 2022 afholdes folketingsvalget i Danmark, hvor du bedes afgive din stemme. </p>
                        <p>I Københavns Kommune er vi i gang med at teste muligheden for at digitalisere folketingsvalget, hvorfor du modtager denne mail. </p>
                        <p>Denne mail giver dig således adgang til at afgive din stemme til folketingsvalget digitalt. </p>
                        <p>Følg nedenstående knap for at deltage i det digitale folketingsvalg.</p>
                    </div>
                    <Button 
                        className='blue-btn button' 
                        color={'#FFFFFF'} 
                        backgroundColor={'var(--primary_blue)'}
                        onClick={()=> navigate('/login')}>
                        Stem nu
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Invitation; 
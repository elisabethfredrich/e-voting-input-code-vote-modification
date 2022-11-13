import React from 'react';
import {
    Button
  } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';

const ResultNotification = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='main'>
                <div className='invitation-letter'>
                    <h1>Resultatet af folketingsvalget 2022</h1>
                    <div className='invitation-letter-text'>
                        <p>Stemmerne fra det digitale folketingsvalg er nu gjort offentligt tilgængelige, og du kan finde linket til alle stemmerne nedenfor. </p>
                        <p>Vi beder dig venligst tjekke, at din stemme er afgivet korrekt på den digitale resultatliste. </p>
                        <p>Har du brug for hjælp? <a onClick={()=>navigate('/info')}><b>Klik her</b></a></p>
                    </div>
                    <Button 
                        className='blue-btn button' 
                        color={'#FFFFFF'} 
                        backgroundColor={'var(--primary_blue)'}
                        onClick={()=> navigate('/bulletinboard')}>
                        Gå til den digitale resultatliste
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ResultNotification;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { handleField, nextStep } from '../../../store/companies';
import Letter from "public/Letter.png"
import Desktop from "public/Desktop.png"
import Eyes from "public/Eyes.png"
import Warning from "public/Warning.png"
import { Typography } from '@mui/material';
import Image from 'next/image';

const Welcome = () => {

  const dispatch = useDispatch()
  const state = useSelector((store: RootState) => store.companies)

  const handleHour = (value: any) => {
    dispatch(handleField({item: "meeting", value: { ...state.meeting, hour: value }})!)
    dispatch(nextStep())
  }

  return (
    <div className='fc-jc-ic gap-4'>
      {/* content section */}
      <div className='sm:w-10/12 lg:w-4/12 text-center'>
        <Typography variant='h4'>Welcome aboard!</Typography>
        <Typography variant='subtitle2'>Watch our intro video to learn more about how to get the most out of our email marketing platform.</Typography>
      </div>

      {/* watch video section */}
      <div className='sm:w-full md:w-8/12 lg:w-10/12'>
        <div className='sm:fc-jc-ic lg:fr-jb-ic'>
          {/* left section */}
          <div className='sm:w-10/12 lg:w-[40%]'>
            <div className='bg-rootblue p-4 text-center text-white'>
              <Typography variant='h6'>Thanks! Your Call is Booked.</Typography>
              <Typography variant='subtitle2'>Here’s what to do next:</Typography>
            </div>
            <div>
              {
                [
                  { lable: "Check Your Email", content: "You should now have a calendar invite in your inbox.", icon: Letter },
                  { lable: "Watch The Video", content: "Watch the short video on this page to get familiar with the platform.", icon: Eyes },
                  { lable: "Come Prepared", content: "Be in a quiet place where you can focus, ideally on a computer with your video on.", icon: Desktop },
                  { lable: "Attend The Call", content: "Please be on time and know that we don’t honor same day reschedules.", icon: Warning },
                ].map((item, index) => (
                  <div key={index} className="fr-jb-ic p-5 gap-3 border border-gray-200">
                    <div className='bg-rootblue rounded-full px-3 py-1 text-white w-8 h-8'>
                      {index + 1}
                    </div>
                    <div>
                    <Typography variant='subtitle1' fontWeight={600}>{item.lable}</Typography>
                    <span className='font-normal text-sm leading-tight'>{item.content}</span>
                    </div>
                    <Image src={item.icon} alt="icons" />
                  </div>
                ))
              }
            </div>
          </div>

          {/* video section */}
          <div className='sm:w-10/12 lg:w-[60%] mx-2 my-4'>
            <video className='w-full h-[25rem]' poster='https://embed-ssl.wistia.com/deliveries/d50f2be9ce743c475efbb99d74d14288.jpg?wistia-6dtvx00zfl-1-6dtvx00zfl-video-thumbnail=1'>
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
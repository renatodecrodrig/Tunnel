import DatePicker from 'sassy-datepicker';
import { Rating, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from "public/logo.webp"
import TimezoneSelect, { ITimezone } from 'react-timezone-select'
import { nextStep, handleField } from '../../../store/companies';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import Peter from "public/Peter.png"
import Lary from "public/Lary.png"
import Steven from "public/Steven.png"

const Meeting = () => {

  const dispatch = useDispatch()
  const state = useSelector((store: RootState) => store.companies)

  const handleHour = (value: any) => {
    console.log(value)
    dispatch(handleField({ meeting: { ...state.meeting, hour: value } }))
    dispatch(nextStep())
  }

  return (
    <div className='mx-auto w-11/12 [&>*]:my-4'>
      {/* content section */}
      <div className='text-center'>
        <Typography variant='h4'>Pick Your Time</Typography>
        <Typography variant='subtitle2'>Book a meeting time with our team to discuss how we help you put some Daily intelligence in your marketing</Typography>
      </div>

      {/* meeting section */}
      <div>
        <div className='sm:w-full md:w-8/12 lg:w-10/12 gap-4 lg:fr-jc-ic mx-auto'>

          {/* datapicker section */}
          <div className='bg-rootbleu-900 border-4 border-rootblue py-16 flex-1'>
            <div className='text-center'>
              <Image src={logo} alt="logo" className='border-4 border-white rounded-full w-20 mx-auto mb-4' />
              <Typography variant='h5' fontWeight={300} color="#fff">Discovery Session</Typography>
            </div>
            
            <div>
              <DatePicker
                onChange={(newDate) => dispatch(handleField({ meeting: { ...state.meeting, date: newDate } }))}
                value={state.meeting.date}
                minDate={new Date(2023, 4, 1)}
                maxDate={new Date(2023, 4, 10)}
              />
            </div>
          </div>

          {/* time of meeting */}
          <div className='my-6 sm:my-6 lg:my-0 flex-1'>
            <div>
              <Typography fontWeight={600}>Meeting duration</Typography>
              <div className='text-center my-2 py-2 bg-gray-200 rounded-sm'>30 mins</div>
            </div>

            <div className='relative mt-20 w-full'>
              <Typography fontWeight={600} noWrap>What time works best?</Typography>
              <TimezoneSelect
                value={state.timeZone}
                onChange={(e) => dispatch(handleField({ timeZone: e.label }))}
              />
              <div className='absolute top-8 left-2 bg-white w-[70%]'>
                <Typography fontWeight={600} className="text-rootblue">{state.timeZone}</Typography>
              </div>

              <div className='fc-jc-ic w-full gap-2 my-3'>
                {
                  ["03:00","03:30","04:00"].map((item, index) => (
                  <div onClick={(e: any) => handleHour(e.target.innerHTML)} key={index} className="w-full p-2 border border-gray-200 rounded-sm text-center">
                    {item}
                  </div>
                  ))
                }
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* cards section */}
      <div className='gap-8 my-8 mx-auto sm:fc-jc-ic lg:fr-jb-ic items-start sm:w-full md:w-8/12 lg:w-10/12'>
        {
          [
            { content: "“I used to have 2 content people creating my email newsletters. Now I use Futurescope and have 2 fully automated email newsletters that reach over 100,000 people with a 50%+ open rate”", name: "Peter Diamandis, MD", image: Peter, rate: 5 },
            { content: "“We found it very hard to identify a service to be an integral part of our awareness creation and business development funnel. We believe Futurescope is it and are excited in being an early adopter” ", name: "Larry Quick", image: Lary, rate: 5 },
            { content: "“At BMS we have searched for more than 15 years for a cost effective and workable solution to producing email news feeds to build our community.We finally have it!”", name: "Steve Strickland", image: Steven, rate: 5 }
          ].map((item, index) => (
            <div key={index} className='sm:w-10/12 md:w-8/12 lg:w-4/12'>
              <Typography>{item.content}</Typography>
              <div className='fr-jb-ic justify-start gap-4 mt-2'>
                <Image src={item.image} alt={"iimage"} />
                <div>
                  <Typography className='text-rootblue'>{item.name}</Typography>
                  <Rating name="read-only" value={item.rate} readOnly />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Meeting
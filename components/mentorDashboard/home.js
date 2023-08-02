import React, { useState, useRef, useEffect } from 'react'
import { BiSolidUser, BiTime, BiCalendar } from 'react-icons/bi'
import { MdNotifications, MdPayment } from 'react-icons/md'

const Home = ({ setComponent, setIsSidebarOpen }) => {

  const reference = useRef(null)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (Notification && reference.current && !reference.current.contains(e.target)) {
        setNotification(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)
     return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [Notification])



  const cards = [
    {
      name: "Profile",
      icon: <BiSolidUser className='tw-w-14 tw-h-14 tw-text-[#FBEAFF]' />,
      path: "profile",
      heading: "Edit Profile"
    },
    {
      name: "Sessions",
      icon: <BiTime className='tw-w-14 tw-h-14 tw-text-[#FBEAFF]' />,
      path: "sessions",
      heading: "Your Sessions"
    },
    {
      name: "Bookings",
      icon: <BiTime className='tw-w-14 tw-h-14 tw-text-[#FBEAFF]' />,
      path: "bookings",
      heading: "Go to Bookings"
    },
    {
      name: "Calendar",
      icon: <BiCalendar className='tw-w-14 tw-h-14 tw-text-[#FBEAFF]' />,
      path: "calendar",
      heading: "View Calendar"
    },
    {
      name: "Payments",
      icon: <MdPayment className='tw-w-14 tw-h-14 tw-text-[#FBEAFF]' />,
      path: "payments",
      heading: "View Payments"
    }
  ]

  const [Notification, setNotification] = useState(false)

  return (
    <>
      <header className='tw-py-10 tw-px-28'>
        <div className='tw-flex tw-justify-start tw-items-center'>
          <h1 className='tw-text-4xl tw-font-bold'>Welcome Mentor!</h1>

          {/* Name */}
          <p className='tw-flex tw-justify-center tw-relative tw-left-[620px] tw-gap-2 tw-bg-primary-100 hover:tw-bg-primary-200 tw-cursor-pointer tw-transition-all tw-duration-200 tw-ease-in-out tw-p-2 tw-rounded-md tw-items-center'>
            <h2 className='tw-font-semibold tw-text-white'>Mentor</h2>
            <BiSolidUser className='tw-w-7 tw-h-7 tw-text-[#FBEAFF]' />
          </p>

          {/* Notification */}
          <div onClick={() => setNotification(!Notification)} title='Notifications' className='tw-cursor-pointer tw-left-[630px] tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-bg-primary-200 tw-bg-primary-100 tw-justify-center tw-items-center tw-relative tw-p-2 tw-rounded-md'>
            <MdNotifications className='tw-w-7 tw-h-7 tw-text-[#FBEAFF]' />
          </div>
          {
            Notification && (
              <div ref={reference} className='tw-z-50 tw-absolute tw-top-[90px] tw-right-[55px] tw-w-[300px] tw-h-[500px] tw-bg-[#FBEAFF] tw-rounded-md tw-shadow-xl tw-p-4 tw-flex tw-flex-col tw-gap-2 tw-overflow-y-scroll'>
                <h2 className='tw-text-2xl tw-font-semibold tw-text-center tw-mb-5'>Notifications</h2>
                <p className='tw-text-lg tw-font-medium'>Some notifications</p>
                <p className='tw-text-lg tw-font-medium'>Some notifications</p>
                <p className='tw-text-lg tw-font-medium'>Some notifications</p>
                <p className='tw-text-lg tw-font-medium'>Some notifications</p>
                <p className='tw-text-lg tw-font-medium'>Some notifications</p>
                <p className='tw-text-lg tw-font-medium'>Some notifications</p>

              </div>
            )
          }
        </div>
      </header>

      <main className='tw-px-28 tw-flex tw-flex-col'>
        <p className='tw-flex tw-justify-start tw-items-center tw-text-center tw-text-xl tw-font-semibold'>
          Here you can view your sessions, edit your profile, and view your calendar.
        </p>
        <div className='tw-flex-wrap tw-mt-10 tw-flex tw-gap-10'>
          {
            cards.map((card) => {
              return (
                <div className='tw-w-[250px] tw-h-[250px] tw-bg-[#00C9A7] tw-gap-2 tw-p-6 tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-md hover:tw-scale-110 tw-ease-in-out tw-duration-150 tw-transition-all'>
                  {card.icon}
                  <h2 className='tw-font-semibold tw-text-xl'>{card.name}</h2>
                  <p onClick={() => setComponent(card.path)} className='tw-p-2 tw-text-center tw-relative tw-top-10 tw-rounded-md tw-font-semibold hover:tw-bg-primary-200 tw-transition-all tw-duration-150 tw-cursor-pointer tw-ease-in-out tw-text-white tw-w-full tw-bg-primary-100'>{card.heading}</p>
                </div>
              )
            })
          }
          <div className='tw-flex tw-justify-center tw-w-[250px] tw-items-center'>
            <h2 onClick={() => setIsSidebarOpen(true)} className='tw-text-xl tw-font-semibold tw-italic hover:tw-text-primary-100 tw-cursor-pointer tw-transition-all tw-ease-in-out tw-duration-150'>View More...</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
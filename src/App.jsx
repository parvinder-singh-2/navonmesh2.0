import React, { useEffect, useState } from 'react';
import logo from './assets/rmc-logo.png'; 
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice'
import { Water, Challan, Road, Sewer, Property, Garbage } from './assets';

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}));
      } else {
        dispatch(logout());
      }
    })
    .finally(() => setloading(false));
  }, []);

  return (
    <>
      <div className="w-full h-[100px] flex flex-wrap space-x-80 align-middle">
        <div className="">
          <img src={logo} alt="Logo" width={100} height={800} className='mx-10 py-2' />
        </div>
        <div className="text-black gap-11 flex flex-wrap pl-32 text-2xl pt-10 font-semibold">
          <h2>Home</h2>
          <h2>Online-Services</h2>
          <h2>LogIn</h2>
          <h2>LogOut</h2>
        </div>
      </div>
      <div className="w-full h-screen flex flex-wrap gap-20">
        <div className="bg-white-100 bg-opacity-50 w-1/2 mt-40">
          <h1 className='text-5xl font-bold ml-16 mt-10'>Nagar Seva Raipur:</h1>
          <h1 className='text-5xl font-bold ml-16 mt-3'>Empowering Citizens</h1>
          <p className='text-2xl ml-16 mt-5'>Welcome Nagar Seva Raipur, a user-friendly web application designed to improve civic services and enhance citizen engagement in the city.</p>
      </div>
      <div className="bg-hero-bg bg-cover bg-center h-screen w-[35%] rounded-3xl"></div>
      </div>

      <div className="h-screen w-full">
        <div className="text-center mt-20">
          <h2 className='text-3xl font-bold text-gray-600'>Online Services</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-24 mt-14">
          <a href='/road-complaints'><div className="bg-gray-300 h-60 w-60 rounded-3xl flex flex-col text-center justify-center ">
          <img src={Road} alt="Logo" width={100} height={100} className='ml-16' />
          <h2 className='font-semibold text-2xl'>Road Complaints</h2>
          </div></a>
          <a href='/garbage-complaints'><div className="bg-gray-300 h-60 w-60 rounded-3xl flex flex-col text-center justify-center ">
          <img src={Garbage} alt="Logo" width={100} height={100} className='ml-16' />
          <h2 className='font-semibold text-2xl'>Garbage Complaint</h2>
          </div></a>
          <a href='/water-complaints'><div className="bg-gray-300 h-60 w-60 rounded-3xl flex flex-col text-center justify-center ">
          <img src={Water} alt="Logo" width={100} height={100} className='ml-16' />
          <h2 className='font-semibold text-2xl'>Water Quality / Leakage Complaints</h2>
          </div></a>
        </div>
        <div className="flex flex-wrap justify-center gap-24 mt-14">
          <a href='sewer-complaints'><div className="bg-gray-300 h-60 w-60 rounded-3xl flex flex-col text-center justify-center ">
          <img src={Sewer} alt="Logo" width={100} height={100} className='ml-16' />
          <h2 className='font-semibold text-2xl'>Sewer Complaints</h2>
          </div></a>
          <a href='/Property-tax'><div className="bg-gray-300 h-60 w-60 rounded-3xl flex flex-col text-center justify-center ">
          <img src={Property} alt="Logo" width={100} height={100} className='ml-16' />
          <h2 className='font-semibold text-2xl'>Property Tax</h2>
          </div></a>
          <a href='/e-challan'><div className="bg-gray-300 h-60 w-60 rounded-3xl flex flex-col text-center justify-center ">
          <img src={Challan} alt="Logo" width={100} height={100} className='ml-16' />
          <h2 className='font-semibold text-2xl'>E-Challan Filling</h2>
          </div></a>
        </div>
      </div>

      <div className="h-40 bg-gray-800 w-full mt-40">
      <div className="w-full h-[100px] flex flex-wrap space-x-80 align-middle">
        <div className="">
          <img src={logo} alt="Logo" width={100} height={800} className='mx-10 py-2 bg-white m-5 px-1' />
        </div>
        <div className="text-gray-200 gap-11 flex flex-wrap pl-32 text-2xl pt-10 font-semibold">
          <h2>Home</h2>
          <h2>Online-Services</h2>
          <h2>LogIn</h2>
          <h2>LogOut</h2>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
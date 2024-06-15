import React, { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import AdminPage from './pages/adminPage';

const App = () => {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminPage />} />
      </Routes>


      {/* Add Room */}
      {/* <div className='flex flex-col items-start justify-center modals'>
        <div className="flex items-center justify-between w-full">
          <h2 className='big_text'>Add New Room</h2>
          <div className='close_icon'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </div>
        </div>
        <form className='flex flex-col items-start gap-3'> 
          <div className='flex items-center justify-between w-full'>
            <label htmlFor="room">Room Name:</label>
            <input type="text" id="room" className='text_box'/>
          </div>
          <div className='flex items-center justify-between w-full'>
            <label htmlFor="building">Building:</label>
            <input type="text" id="building" className='text_box'/>
          </div>
          <div className='flex items-center justify-between w-full'>
            <label htmlFor="capacity">Capacity:</label>
            <input type="text" id="capacity" className='text_box'/>
          </div>
          
          <button type="submit" className='submit_btn'>Save</button>
        </form>
      </div> */}

      {/* Add Course */}

      {/* <div className='flex flex-col items-start justify-center modals'>
       <div className="flex items-center justify-between w-full">
          <h2 className='big_text'>Add New Course</h2>
          <div className='close_icon'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </div>
        </div>
        <form className='flex flex-col items-start gap-3'> 
          <div className='flex items-center justify-between w-full'>
            <label htmlFor="code">Course Code:</label>
            <input type="text" id="code" className='text_box'/>
          </div>
          <div className='flex items-center justify-between w-full'>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" className='text_box'/>
          </div>
          <div className='flex items-center justify-between w-full'>
            <label htmlFor="lecturer">Lecturer:</label>
            <input type="text" id="lecturer"  className='text_box'/>
          </div>
          
          <button type="submit" className='submit_btn'>Save</button>
        </form>
      </div> */}

      {/* Add Lecturer */}

      {/* <div className='flex flex-col items-start justify-center modals'>
      <div className="flex items-center justify-between w-full">
          <h2 className='big_text'>Add New Lecturer</h2>
          <div className='close_icon'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </div>
        </div>
        <form className='flex flex-col items-start gap-3'> 
          <div className='flex items-center justify-between w-full'>
            <label htmlFor="lecturer">Lecturer Name:</label>
            <input type="text" id="lecturer" className='text_box'/>
          </div>
          <div className='flex items-center justify-between w-full'>
            <label htmlFor="department">Department:</label>
            <input type="text" id="department"  className='text_box'/>
          </div>
          
          <button type="submit" className='submit_btn'>Save</button>
        </form>
      </div> */}

    


    </BrowserRouter>

  )
}

export default App;

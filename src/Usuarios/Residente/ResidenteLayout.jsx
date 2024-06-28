import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ResidenteSidebar from './ResidenteSidebar';                                           

const ResidenteLayout = () => {

  return (
    <div className="administrador-layout" >
      <ResidenteSidebar/>
      <div className="content-area">
        <Outlet /> 
      </div>
    </div>
  );
};

export default ResidenteLayout;
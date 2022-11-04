import React from 'react';
import {Outlet } from 'react-router-dom';

export default function AdminPage() {
  return (
    <>
      <div>header</div>
      {
        <Outlet />
      }
      <div>footer</div>
    </>
  );
}

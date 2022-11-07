import React from 'react';
import {Outlet } from 'react-router-dom';
import instance from '../../services/axios.config';

export default function AdminPage() {
  instance.defaults.headers.common['Authorization'] = `Bearer ${'1234567'}`
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

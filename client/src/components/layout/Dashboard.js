import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
const Dashboard = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  const { user } = authContext;
  return (
    <section className='container'>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome{' '}
        {user && user.name.split(' ').slice(0, 1)}
      </p>
      <div className='dash-buttons'>
        <a href='create-profile.html' className='btn'>
          <i className='fas fa-user-circle text-primary'></i> Edit Profile
        </a>
        <a href='add-experience.html' className='btn'>
          <i className='fab fa-black-tie text-primary'></i> Add Experience
        </a>
        <a href='add-education.html' className='btn'>
          <i className='fas fa-graduation-cap text-primary'></i> Add Education
        </a>
      </div>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Microsoft</td>
            <td className='hide-sm'>Senior Developer</td>
            <td className='hide-sm'>Oct 2011 - Current</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Adobe</td>
            <td className='hide-sm'>Systems Admin</td>
            <td className='hide-sm'>Nov 1999 - Sept 2011</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>University Of Washington</td>
            <td className='hide-sm'>Masters</td>
            <td className='hide-sm'>Sept 1993 - June 1999</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='my-2'>
        <button className='btn btn-danger'>
          <i className='fas fa-user-minus'></i> Delete My Account
        </button>
      </div>
    </section>
  );
};

export default Dashboard;

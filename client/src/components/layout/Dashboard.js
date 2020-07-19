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
    <section class='container'>
      <h1 class='large text-primary'>Dashboard</h1>
      <p class='lead'>
        <i class='fas fa-user'></i> Welcome {user && user.name}
      </p>
      <div class='dash-buttons'>
        <a href='create-profile.html' class='btn'>
          <i class='fas fa-user-circle text-primary'></i> Edit Profile
        </a>
        <a href='add-experience.html' class='btn'>
          <i class='fab fa-black-tie text-primary'></i> Add Experience
        </a>
        <a href='add-education.html' class='btn'>
          <i class='fas fa-graduation-cap text-primary'></i> Add Education
        </a>
      </div>
      <h2 class='my-2'>Experience Credentials</h2>
      <table class='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th class='hide-sm'>Title</th>
            <th class='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Microsoft</td>
            <td class='hide-sm'>Senior Developer</td>
            <td class='hide-sm'>Oct 2011 - Current</td>
            <td>
              <button class='btn btn-danger'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Adobe</td>
            <td class='hide-sm'>Systems Admin</td>
            <td class='hide-sm'>Nov 1999 - Sept 2011</td>
            <td>
              <button class='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 class='my-2'>Education Credentials</h2>
      <table class='table'>
        <thead>
          <tr>
            <th>School</th>
            <th class='hide-sm'>Degree</th>
            <th class='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>University Of Washington</td>
            <td class='hide-sm'>Masters</td>
            <td class='hide-sm'>Sept 1993 - June 1999</td>
            <td>
              <button class='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class='my-2'>
        <button class='btn btn-danger'>
          <i class='fas fa-user-minus'></i> Delete My Account
        </button>
      </div>
    </section>
  );
};

export default Dashboard;

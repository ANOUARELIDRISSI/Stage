import React from 'react';
import { BsFillEnvelopeFill, BsFillPeopleFill, BsGraphUp, BsArrowUpRight } from 'react-icons/bs';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './dashboard.css';

const data = [
  { name: 'Jan', sales: 4000, clients: 2400, amt: 2400 },
  { name: 'Feb', sales: 3000, clients: 1398, amt: 2210 },
  { name: 'Mar', sales: 2000, clients: 9800, amt: 2290 },
  { name: 'Apr', sales: 2780, clients: 3908, amt: 2000 },
  { name: 'May', sales: 1890, clients: 4800, amt: 2181 },
  { name: 'Jun', sales: 2390, clients: 3800, amt: 2500 },
  { name: 'Jul', sales: 3490, clients: 4300, amt: 2100 },
];

const pieData = [
  { name: 'Email Marketing', value: 400 },
  { name: 'SEO', value: 300 },
  { name: 'Paid Ads', value: 300 },
  { name: 'Social Media', value: 200 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>DASHBOARD</h1>
        <p>Welcome to your dashboard</p>
      </header>

      <div className="dashboard-cards">
        <div className="card">
          <BsFillEnvelopeFill className="card-icon" />
          <div>
            <h3>12,361</h3>
            <p>Emails Sent</p>
            <small><BsArrowUpRight /> +4%</small>
          </div>
        </div>

        <div className="card">
          <BsGraphUp className="card-icon" />
          <div>
            <h3>431,225</h3>
            <p>Sales Obtained</p>
            <small><BsArrowUpRight /> +7%</small>
          </div>
        </div>

        <div className="card">
          <BsFillPeopleFill className="card-icon" />
          <div>
            <h3>32,441</h3>
            <p>New Clients</p>
            <small><BsArrowUpRight /> +5%</small>
          </div>
        </div>

        <div className="card">
          <BsGraphUp className="card-icon" />
          <div>
            <h3>1,325,134</h3>
            <p>Traffic Received</p>
            <small><BsArrowUpRight /> +3%</small>
          </div>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="line-chart">
          <h2>Revenue Generated</h2>
          <h3>$59,342.32</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              <Line type="monotone" dataKey="clients" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="pie-chart">
          <h2>Campaign</h2>
          <PieChart width={400} height={400}>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <p>$43,852 revenue generated</p>
        </div>
      </div>

      <div className="bar-chart">
        <h2>Sales Quantity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="clients" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;

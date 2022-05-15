import { Route, Routes } from 'react-router-dom'
import './App.css'

// Components
import Home from './components/organisms/Home'
import Login from './components/organisms/Login'
import NotFound from './components/organisms/NotFound'
import Employee from './components/organisms/EmployeeDashboard'
import PageTemplate from './components/templates/PageTemplate'
import EmployeeSheet from './components/organisms/EmployeeSheet'
import AdminDashboard from './components/organisms/AdminDashboard'
import CreateEmployee from './components/organisms/CreateEmployee'

function App() {
  return (
    <div className="App">
      <PageTemplate>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/admin/self" element={<Employee/>} />
          <Route path="/admin/create" element={<CreateEmployee/>} />
          <Route path="/admin/:id" element={<EmployeeSheet/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTemplate>
    </div>
  )
}

export default App

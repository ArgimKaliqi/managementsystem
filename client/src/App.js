import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import LoginForm from './pages/Login/Login';
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './pages/Dashboard/global/Topbar'
import Sidebar from './pages/Dashboard/global/Sidebar'
import Dashboard from './pages/Dashboard'
// import Tasks from './pages/tasks'
import Clients from './pages/clients'
import Form from './pages/clients/clientForm'
import Advocate from './pages/advocates'
import AdvocateForm from './pages/advocates/advocateForm';
 import Workers from './pages/workers'
 import WorkerForm from './pages/workers/workerForm';
 import Companies from './pages/companies'
 import CompanyForm from './pages/companies/companyForm';
// import Reports from './pages/reports'
// import Schedule from './pages/schedule'
// import Borxhet from './pages/borxhet'
// import Paushall from './pages/paushall'
// import Line from './pages/Line'

function App() {
  const [theme, colorMode] =useMode()

  return (
    <>
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className='app'> 
    <Sidebar />
    <main className="content"><Topbar />
      <Routes>

         <Route path='/' element={<LoginForm />} >
          </Route> 
          <Route path='/dashboard' element={<Dashboard />} /> 
            




          
          {/* <Route path='/tasks' element={<Tasks />} /> */}
           <Route path='clients' element={<Clients/>} />
           <Route path='/clientForm' element={<Form />} /> 
           <Route path='/advocate' element={<Advocate />} /> 
           <Route path='/advocateForm' element={<AdvocateForm />} /> 
           <Route path='/companies' element={<Companies/>} /> 
           <Route path='/companyForm' element={<CompanyForm/>} /> 
            <Route path='/workers' element={<Workers/>} /> 
            <Route path='/workerForm' element={<WorkerForm />} />
          {/* <Route path='/reports' element={<Reports/>} /> */}
          {/* <Route path='/schedule' element={<Schedule/>} /> */}
          {/* <Route path='/borxhet' element={<Borxhet/>} /> */}
          {/* <Route path='/paushall' element={<Paushall/>} /> */}
          {/* <Route path='/Line' element={<Line/>} /> */}
          
      </Routes>
    </main>
  </div>
  </ThemeProvider>
  </ColorModeContext.Provider>
    
    </>
  );
}

export default App;
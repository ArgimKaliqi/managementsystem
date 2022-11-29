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
import Advocate from './pages/advocates'
// import Coworkers from './pages/coworkers'
// import Companies from './pages/companies'
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
           <Route path='/advocate' element={<Advocate />} /> 
          {/* <Route path='/coworkers' element={<Coworkers/>} /> */}
          {/* <Route path='/companies' element={<Companies/>} /> */}
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
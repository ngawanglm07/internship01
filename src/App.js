import { BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient() 

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route element=<MainLayout/> >
        <Route path="/" element={<Home/>} />
        <Route path="/start" element={<Starred/>} />
      </Route>
  
      
      <Route path="/" element={<Home/>} />


    </Routes>
   </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;

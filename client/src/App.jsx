import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from './pages/PostPage';
import ScrollToTop from "./components/ScrollToTop";
import Search from './pages/Search';
import Category from './pages/Category';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import Adsheader from "./components/Adsheader";
import Adsheader2 from "./components/Adsheader2";
import Adsfooter from "./components/Adsfooter";
import Calltoaction from "./pages/Calltoaction";
import Native2 from "./components/Native2";
import Adsfooter2 from "./components/Adsfooter2";
import TradingViewTickerTape from "./components/TradingViewTickerTape";


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <TradingViewTickerTape />
    <Header />
    
    {/* <Adsheader />
    <Adsheader2 />
    <Adsfooter /> */}
    
      <Routes> 
          <Route path="/" element={< Home/>} />
          <Route path="/music" element={< Music/>} />
          <Route path="/sign-in" element={< Signin/>} />
          <Route path="/sign-up" element={< Signup/>} />
          <Route path="/search" element={< Search/>} />
          <Route path="/category" element={< Category/>} />
          <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={< Dashboard/>} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>

        {/* <Route path='/projects' element={<Projects />} /> */}
        <Route path='/post/:postSlug' element={<PostPage />} />
          
       
          <Route path="/about" element={< About/>} />
          <Route path="/privacy-policy" element={< PrivacyPolicy/>} />
          <Route path="/terms" element={< TermsAndConditions/>} />
          <Route path="/disclaimer" element={< Disclaimer/>} />
          <Route path="/call-to-action" element={< Calltoaction/>} />
      </Routes> 
      {/* <Adsfooter2 />
      <Native2 /> */}
     
      <Footer />
     
    </BrowserRouter>
  )
}

export default App
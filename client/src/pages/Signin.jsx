import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'
import OAuth from '../components/OAuth'
import logo from "../../public/2hr.png";


const Signin = () => {
    const [formData, setFormData] = useState({});
    const {loading, error: errorMessage} = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value.trim()});
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            return dispatch(signInFailure('Please fill out all fields'));
        }
        try {
            dispatch(signInStart());
            const res = await fetch('/Api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
               dispatch(signInFailure(data.message));
            }
        
            if(res.ok) {
                dispatch(signInSuccess(data));
                navigate('/');
            }
        }catch (error) {
            dispatch(signInFailure(error.message));
        }
    };



  return (
    <div className=' '>
        <div className='min-h-screen mt-20 '>
        <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
            <div className='flex-1'>
            <Link to="/" className='font-bold dark:text-white text-4xl'>
            {/* <span className='px-2 py-1  bg-amber-500 rounded-lg text-white'>Career</span> */}
            <img src={logo} alt="logo" height={40} width={80} />
        </Link>
        <p class='text-sm mt-5'>Welcome to Health Republic Media! Sign in to explore a world of health and wellness insights, expert articles, community discussions, and valuable resources. Join us on this journey towards a healthier, happier you.</p>

            </div>
            
            <div className='flex-1'>
                <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
                    
                    <div>
                        <Label value='Your email' />
                        <TextInput type='email' placeholder='name@email.com' id='email' onChange={handleChange}/>
                    </div>
                    <div>
                        <Label value='Your Password' />
                        <TextInput type='password' placeholder='**********' id='password' onChange={handleChange}/>
                    </div>
                    <Button color="warning" type='submit' disabled={loading} >
                       {
                        loading ? (
                            <><Spinner size='sm'/>
                            <span className='pl-3'>Loading...</span>
                            </>
                            
                        ) : 'Sign in'
                       }
                    </Button >
                    <OAuth />
                </form>
                <div className='flex gap-2 text-sm mt-5'>
                    <span>
                        Don't have an account? 
                    </span>
                    <Link to='/sign-up' className='text-amber-500'>
                         Sign up
                    </Link>
                </div>
                {
                    errorMessage && (
                        <Alert className='mt-5 ' color='failure'>
                            {errorMessage}
                        </Alert>
                    )
                }
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Signin
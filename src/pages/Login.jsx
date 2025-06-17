import GoogleImage from '../assets/images/google-icon.png'
import SubmitButton from '../components/SubmitButton';
import { apiClient } from '../api/client';
import { useNavigate } from 'react-router';

export default function Login() {
    const navigate = useNavigate();

    const loginUser = async (data) => {
          try {
            const response = await apiClient.post('/users/login', data, {
                headers: {
                    "Content-Type":'application/json'
                }
            });
            console.log(response);
            localStorage.setItem('ACCESS_TOKEN', response.data.data.accessToken);
            navigate('/');
            
          } catch (error) {
            console.log(error);
          }
        
    }

    return (
        <div className="flex h-screen ">
            <div className="w-3/5 flex flex-col pt-16 bg-bgGrey ">
                <h1 className="font-bold text-2xl text-center">Event <span className="text-primary">Hive</span></h1>
                <h2 className="text-4xl text-center font-bold pt-10">Sign In for Event Hive</h2>
                <form action={loginUser} className='flex flex-col pt-16 w-[80%] mx-auto '>
                    <div className='flex flex-col pt-2 '>
                        <label htmlFor="your name" className='p-2 font-medium'>YOUR EMAIL</label>
                        <input type="email" name="email" id="name" placeholder="Enter your mail" className='w-[100%] px-6 py-2 bg-white ' />
                    </div>
                    <div className='flex flex-col pt-8 '>
                        <div className='flex justify-between items-center mb-2'>
                            <label htmlFor="password" className='font-medium' >PASSWORD</label>
                            <a href="#" className='font-light'>forgot password?</a>
                        </div>
                        <input type="password" name="password" id="passowrd" placeholder="Enter your password" className='w-[100%] px-6 py-2 bg-white' />
                    </div>
                    <div className='flex flex-col items-center justify-center pt-10 '>
                        <SubmitButton title={'Sign In'} className='text-white bg-primary w-48 px-6 py-2  rounded  '/>
                        
                        <p className='text-center font-light p-8 '>Or</p>
                        <button className='bg-white items-center pt-4 px-6 py-2 rounded w-64 shadow gap-4'> <img src={GoogleImage} alt="google-icon" className='align-middle inline-block w-5 h-5  ' />  Sign Up with Google</button>
                    </div>
                </form>
            </div>
            <div className='w-2/5 bg-[url(./assets/images/login.png)] bg-center bg-cover '>
                <div className='flex flex-col items-center justify-center h-[100vh]'>
                    <h1 className='text-white font-bold text-3xl'>Hello Friend</h1>
                    <p className='text-white p-8 '>To keep connected with us provide us with your information</p>
                    <button className='text-white bg-lightWhite pt-4 px-6 py-2 rounded '>Sign Up</button>
                </div>
            </div>
        </div>
    );
}
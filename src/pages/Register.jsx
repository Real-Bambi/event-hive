import SubmitButton from '../components/SubmitButton';
import GoogleImage from '../assets/images/google-icon.png';
import { apiClient } from '../api/client';
import { useNavigate, Link } from 'react-router';

export default function Register() {
    const navigate = useNavigate();

    const registerUser = async (data) => {
        try {
            const response = await apiClient.post('/users/register', data,{
                headers: {
                    "Content-Type": 'application/json',
                }
            });
            console.log(response);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="  md:h-screen flex  flex-row justify-around">
            <div className="bg-[url(./assets/images/register.png)]  bg-cover bg-center w-2/5 ">
                <div className="text-white h-[90vh]  flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold">Welcome back</h1>
                    <p className="p-8 text-center"> To keep connected with us provide us with your information</p>
                    <Link to={'/login'}><button className="bg-lightWhite px-6 py-2 rounded">Sign In</button></Link>
                </div>
            </div>
            <div className="w-3/5 items-center justify-center bg-bgGrey">
                <h1 className="text-2xl font-bold text-center">Event <span className="text-purple-600">Hive</span></h1>
                <h2 className="text-3xl font-medium p-4 text-center">Sign Up to Event Hive</h2>
                <form action={registerUser} className="w-[60%] mx-auto">
                    <div className="flex flex-col p-2  ">
                        <label htmlFor="your name" className="font-medium p-2">YOUR NAME</label>
                        <input
                         type="text"
                          name="name"
                           id="name"
                         className="w-[100%] px-4 py-2 bg-white" placeholder="Enter your name" 
                         />
                    </div>
                    <div className="flex flex-col p-2 ">
                        <label htmlFor="your email" className="font-medium p-2">YOUR Email</label>
                        <input
                         type="email" 
                         name="email"
                          id="email"
                         className="w-[100%] px-4 py-2 bg-white" placeholder="Enter your name"
                          />
                    </div>
                    <div className="flex flex-col p-2 ">
                        <label htmlFor="your password" className="font-medium p-2">PASSWORD</label>
                        <input
                         type="password"
                          name="password"
                           id="password" 
                           className="w-[100%] px-4 py-2 bg-white" placeholder="Enter your password"
                            />
                    </div>
                    {/* <div className="flex flex-col p-2 ">
                        <label htmlFor="confirm password" className="font-medium p-2">CONFIRM PASSWORD</label>
                        <input password="text" name="password" id="password" className="w-[100%] px-4 py-2 bg-white" placeholder="Enter your password" />
                    </div> */}
                    <div className='flex flex-col items-center'>
                        <SubmitButton
                            className="bg-primary px-6 py-2 w-48 flex items-center justify-center text-white rounded mt-4" title={"Sign Up"} />
                            </div>
                           </form>
                           <div className='flex flex-col items-center'>
                        <p className="pt-4 font-light text-pgray">Or</p>
                        <button className='shadow w-80 mt-3 rounded bg-white py-2 px-4 gap-4'> <img src={GoogleImage} alt="google icon" className='w-5 h-5 align-middle inline-block' /> Sign Up with  Google</button>
                    </div>
             
            </div>
        </div>
    );
}
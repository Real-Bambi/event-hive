import GoogleImage from '../assets/images/google-icon.png'
export default function Register() {
    return (
        <div className="  h-screen flex flex-col md:flex-row justify-around">
            <div className="bg-[url(./assets/images/register.png)]  bg-cover bg-center w-2/5 ">
                <div className="text-white h-[90vh]  flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold">Welcome back</h1>
                    <p className="p-8 text-center"> To keep connected with us provide us with your information</p>
                    <button className="bg-lightWhite px-6 py-2 rounded">Sign In</button>
                </div>
            </div>
            <div className="w-3/5 items-center justify-center bg-bgGrey">
                <h1 className="text-2xl font-bold text-center">Event <span className="text-purple-600">Hive</span></h1>
                <h2 className="text-3xl font-medium p-4 text-center">Sign Up to Event Hive</h2>
                <form action className="w-[60%] mx-auto">
                    <div className="flex flex-col p-2  ">
                        <label htmlFor="your name" className="font-medium p-2">YOUR NAME</label>
                        <input type="text" name="name" id="name" className="w-[100%] px-4 py-2 bg-white" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col p-2 ">
                        <label htmlFor="your name" className="font-medium p-2">YOUR NAME</label>
                        <input type="text" name="name" id="name" className="w-[100%] px-4 py-2 bg-white" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col p-2 ">
                        <label htmlFor="your password" className="font-medium p-2">PASSWORD</label>
                        <input password="text" name="name" id="name" className="w-[100%] px-4 py-2 bg-white" placeholder="Enter your password" />
                    </div>
                    <div className="flex flex-col p-2 ">
                        <label htmlFor="confirm password" className="font-medium p-2">CONFIRM PASSWORD</label>
                        <input password="text" name="name" id="name" className="w-[100%] px-4 py-2 bg-white" placeholder="Enter your password" />
                        </div>
             <div className='flex flex-col items-center'>
                <button className="bg-primary px-6 py-2 w-48 flex items-center justify-center text-white rounded mt-8">Sign up</button>
              <p className="pt-4 font-light text-pgray">Or</p>
              <button className='shadow w-80 mt-4 rounded bg-white py-2 px-4 gap-4'> <img src={GoogleImage} alt="google icon"  className='w-5 h-5 align-middle inline-block'/> Sign Up with  Google</button>
              
            
             </div>
                </form>
            </div>
        </div>
    );
}
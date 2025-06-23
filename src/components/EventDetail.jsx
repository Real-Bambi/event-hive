import React from 'react';
import { Image } from 'lucide-react';
import { Link } from 'react-router';
import facebookIcon from '../assets/images/facebook.png'
import linkedinIcon from '../assets/images/linkedin.png'
import twitterIcon from '../assets/images/twitter.png'
import { useSearchParams } from 'react-router';
import useSWR from 'swr';
import { apiFetcher } from '../api/client';
import { useEffect } from 'react';
import { imageBaseURL } from "../api/client";






export default function EventDetail() {

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");


    const { data, isLoading, error } = useSWR(`/events/${id}`, apiFetcher);

    useEffect(() => {
        scrollTo(0, 0);
    }, [id]);

    if (isLoading) {
        return (
            <div>
                <p>loading event detail</p>
            </div>
        );

    }

    if (error) {
        return (
            <div>
                <p>something went wrong</p>
            </div>
        );
    }

    return (
        <>
            <div style= {{backgroundImage: `url(${imageBaseURL}/${data.data.image})`}}
             className=" bg-cover w-[1320px] min-h-[595px]    mx-auto " >
            <div className='flex flex-row justify-between pb-[100px]'>
                <div className=' '>
                    <div className='pl-[60px] pt-[30px] '>
                        <Link to={-1} className='rounded-[5px] bg-primary p-[10px] w-[85px] h-[40px] text-white '>Back</Link>
                    </div>

                    <div className='flex flex-col w-[600px] h-[397px] pl-[60px] pt-[60px] gap-5'>
                        <h2 className='text-white font-bold text-big-heading'>{data.data.title} in {data.data.venue}</h2>
                        <h3 className='text-white font-bold text-heading'>{data.data.college.name}</h3>
                        <p className='text-sm text-white '>{data.data.description}</p>
                        <span className='text-white'>View map</span>
                    </div>

                </div>


                <form className='pt-[100px] pl-[240px] mx-auto items-right' >
                    <div className='w-[385px] min-h-[338px] bg-white  rounded-[10px] mx-auto flex flex-col gap-6 justify-center'>
                        <label className='text-black font-bold item-left pl-6 text-sub-heading' htmlFor="">Date & time</label>
                        <p className='text-sm text-black'>{data.data.time}</p>
                        <p className='text-sm text-primary pl-6'>Add to Calender</p>

                        <div className='flex flex-col gap-2 items-center'>
                            <button type="submit" className='bg-primary w-[340px] p-2 text-white rounded-[10px]'>Book now</button>
                            <button type="" className='bg-gray-400 p-2 text-white rounded-[10px] w-[340px]'>Program promoter</button>
                        </div>

                        <div className='flex items-center mx-auto'>No Refunds</div>
                    </div>

                </form>
            </div>
        </div >


            <div className='flex flex-row justify-between'>
                {/*left side  */}
                <div className='w-[600px] flex flex-col gap-5 pt-10 pl-20'>
                    <div>
                        <h1 className='text-heading pb-5 font-bold'>Description</h1>
                        <p className='text-gray-500'>
                            {data.data.description} <br />
                            <br />

                            {data.data.description}</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-heading font-bold'>Hours</h2>
                        <span className='text-gray-500'>Weekdays hour: <span className='text-primary'> 7PM - 10PM</span></span>
                        <span className='text-gray-500'> Sunday hour:  <span className='text-primary'> 7PM - 10PM</span></span>
                    </div>
                    <div className='gap-3 flex flex-col'>
                        <h2 className='text-heading font-bold'>Organizer Contact</h2>
                        <Link className='text-gray-500'>Please go to www.sneakypeeks.com and refer the FAQ section for more detail</Link>
                    </div>

                </div>
                {/* right side */}
                <div className='flex flex-col gap-5 pr-20 pt-10 '>
                    <div className='flex flex-col'>
                        <h2 className='text-heading font-bold pb-5 '>Event Location</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.799747781828!2d-0.22541772603056248!3d5.596579733242414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a29c0df5a4f%3A0x95876935d7d102f9!2sGhana%20Communication%20Technology%20University!5e0!3m2!1sen!2sgh!4v1750240614551!5m2!1sen!2sgh"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="GCTU Map"
                        ></iframe>
                        <h3 className='text-[20px] pt-5 pb-3 text-gray-700'>{data.data.title} in {data.data.venue}</h3>
                        <p className='text-gray-500'>This is the location of GCTU capus, Accra, Tesano.</p>
                    </div>
                    <div>
                        <h2 className='text-heading font-bold pb-3'>Tags</h2>
                        <div className='grid grid-cols-4 text-gray-500'>
                            {data.data.tags.map((tag, index) => {
                                return (
                                    <p key={index}>{tag}</p>
                                )
                            })}

                        </div>
                    </div>
                    <div className='flex'>
                        <h3 className='text-[20px] font-bold'>Share with friends</h3>
                    </div>
                    <div className='flex flex-row gap-5'>
                        <img src={facebookIcon} alt="facebook" srcset="" />
                        <img src={linkedinIcon} alt="linkedin" srcset="" />
                        <img src={twitterIcon} alt="twitter" srcset="" />

                    </div>

                </div>
            </div>

        </>
    );
}
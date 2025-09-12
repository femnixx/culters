import React from 'react'
import midjourney from "../assets/midjourney.png";
import wave from "../assets/wave.svg";
import logoswrap from "../assets/logoswrap.svg";
import '../index.css';
import stepsbar from "../assets/stepsbar.svg";
import arrowright from "../assets/arrowright.svg";
import lightning from "../assets/lightning.svg";
import shield from "../assets/shield.svg";
import clocks from "../assets/clocks.svg";
import people from "../assets/people.svg";
import gemini from "../assets/gemini.svg";
import settings from "../assets/settings.svg";

const Dashboard = () => {
  return (
    <div className='bg-linear-to-b from-[#0C111D] from-0% to-[#1E5D5C] to-100% w-screen h-screen overflow-x-hidden overflow-y-scroll'>
        <div className='flex justify-between pt-15 px-5'>
            <div className='flex gap-x-2 items-center justify-center'>
                {/* logo */}
                <img src={midjourney} alt="midjourney" className='w-8'/>
                <p className='text-white text-sm'>FlowPro</p>
            </div>
            {/* Start free trial */}
            <div className='flex items-center justify-center bg-[#FFFFFF]/10 px-1.5 rounded-full py-1'>
                <div className='bg-[#35A89A] flex items-center justify-center px-3 rounded-full py-1'>
                    <p className=' text-sm'>Start Free Trial</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center text-center pt-10'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF]/60 to-[#FFFFFF] text-xl'>Streamline Your WorkFlow</h1>
            <p className='text-white pt-3 text-xl'>with flowPro</p>
        </div>
        <p className='text-sm pt-5 text-center text-transparent bg-clip-text bg-gradient-to-b from-[#EAEAEA]/60 to-[#EAEAEA]/50' >The all-one platform that helps teams work smarter, faster, anymore efficiently</p>
        <div className='pt-5 flex items-center justify-center gap-x-5'>
            <div className='bg-[#FFFFFF]/10 px-1 py-1 rounded-full'>
                <div className='bg-[#35A89A] px-3 py-1 rounded-full'>
                    <p className='text-base'>Login</p>
                </div>
            </div>
            <div className='bg-transparent border-3 rounded-full px-3 border-[#FFFFFF]/10 py-1'>
               <p  className='text-white'>Book Demo</p>
            </div>
        </div>
        <img src={wave} alt="wave svg" className='-mt-10'/>
        <p className='text-center text-xs text-[#EAEAEA]/50'>Trusted by 4,000+ companies</p>
        <div className='flex items-center justify-center animate-marquee gap-x-3 pt-5'>
            <img src={logoswrap} alt="logoswrap" className='pt-3 w-auto'/>
            <img src={logoswrap} alt="logoswrap" className='pt-3 w-auto'/>
            <img src={logoswrap} alt="logoswrap" className='pt-3 w-auto'/>
        </div>
        <p className='pt-50 text-center text-white/60 font-base text-lg font-semibold'>Everything You Need to Succeed</p>
        <p className='pt-2 text-xs text-center text-white/45 px-5'>Powerful features to help you manage, collaborate, and grow</p>
        {/* card 1 */}
        <div className='py-2 text-white flex flex-col px-6 bg-[#FFFFFF]/5 mx-6 mt-12 border-[#FFFFFF]/10 border-3 rounded-2xl'>
            <img src={stepsbar} alt="steps bar" className='w-8 h-auto'/>
            <p className='font-semibold pt-1 text-base'>Advanced Analytics</p>
            <p className='font-base text-xs pt-3 text-justify'>Get deep insights into your team's performance and productivity</p>
            {/* learn more */}
            <div className='flex pt-3 gap-x-2 text-xs'>
                <p>Learn more</p>
                <img src={arrowright} alt="arrow right" className=''/>
            </div>
        </div>
        {/* card 2 */}
        <div className='flex flex-col py-2 px-6 bg-[#FFFFFF]/5 mx-6 mt-5 border-[#FFFFFF]/10 border-3 rounded-2xl'>
            <img src={clocks} alt="steps bar" className='w-10 h-auto'/>
            <p className='text-white font-semibold pt-1 text-base'>Time Tracking</p>
            <p className='pt-3 text-xs font-base text-justify text-white'>Track time spent on projects and tasks automatically</p>
            {/* learn more */}
            <div className='flex pt-3 gap-x-2 text-xs text-white'>
                <p>Learn more</p>
                <img src={arrowright} alt="arrow right" />
            </div>
        </div>
        {/* card 3 */}
        <div className='text-white flex flex-col py-2 px-6 bg-[#FFFFFF]/5 mx-6 mt-5 border-[#FFFFFF]/10 border-3 rounded-2xl'>
            <img src={lightning} alt="steps bar" className='w-10 h-auto'/>
            <p className='pt-1 text-base font-semibold'>Advanced Analytics</p>
            <p className='pt-3 text-xs font-base text-justify'>Get deep insights into your team's performance and productivity</p>
            {/* learn more */}
            <div className='flex pt-3 gap-x-2 text-xs text-white'>
                <p>Learn more</p>
                <img src={arrowright} alt="arrow right" />
            </div>
        </div>
        {/* card 4 */}
        <div className='text-white flex flex-col py-2 px-6 bg-[#FFFFFF]/5 mx-6 mt-5 border-[#FFFFFF]/10 border-3 rounded-2xl'>
            <img src={shield} alt="steps bar" className='w-10 h-auto'/>
            <p className='pt-1 text-base font-semibold'>Advanced Analytics</p>
            <p className='pt-3 text-xs font-base text-justify'>Get deep insights into your team's performance and productivity</p>
            {/* learn more */}
            <div className='flex pt-3 gap-x-2 text-xs'>
                <p>Learn more</p>
                <img src={arrowright} alt="arrow right" />
            </div>
        </div>
        <p className='pt-24 text-center text-white/80 text-xl font-base'>Simple Setup, Powerful Results</p>
        <p className='text-sm pt-2.5 text-center font-light text-white'>Get started in minutes with our intuitive onboarding process</p>
        <div className='flex flex-col items-center justify-center'>
            {/* first circle and text */}
            <div className='max-h-fit max-w-fit mt-12 p-2 bg-[#FFFFFF]/10 border-[#FFFFFF]/5 border-3 rounded-full w-fit h-fit'>
                <img src={people} alt="people icons" />
            </div>
            <p className='mt-3 text-white font-semibold'>Sign Up</p>
            <p className='mt-2 text-white text-sm'>Create your account in seconds</p>
            
            {/* second circle and text */}
            <div className='max-h-fit max-w-fit mt-12 p-2 bg-[#FFFFFF]/10 border-[#FFFFFF]/5 border-3 rounded-full w-fit h-fit'>
                <img src={settings} alt="people icons" />
            </div>
            <p className='mt-3 text-white font-semibold'>Configure</p>
            <p className='mt-2 text-white text-sm'>Set up your workspace preferences</p>
            {/* third circle and text */}
            <div className='max-h-fit max-w-fit mt-12 p-2 bg-[#FFFFFF]/10 border-[#FFFFFF]/5 border-3 rounded-full w-fit h-fit'>
                <img src={gemini} alt="people icons" />
            </div>
            <p className='mt-3 text-white font-semibold'>Collaborate</p>
            <p className='mt-2 text-white text-sm'>Start working with your team</p>
        </div>
        <p className='text-white text-xl pt-24 text-center'>Work With Your Favorite Tools</p>
        <p className='pt-2.5 text-center text-xs text-white/75'>Seamlessly integrate with the tools you already use</p>
        {/* grid */}
        <div className='grid grid-cols-3 gap-4 mt-20 justify-center items-center text-center px-5'>
            <div className='flex justify-center items-center bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
            <div className='flex justify-center items-center  bg-white/5 border-1 border-white/10 py-2 rounded-lg'>
                <img src={gemini} alt="" />
            </div>
        </div>
        <p className='pt-26 text-center text-xl text-transparent bg-clip-text bg-gradient-to-b from-white/0 to-white/100 '>What Our Customers Say</p>
        <p className='pt-2.5 text-xs text-center text-transparent bg-clip-text bg-gradient-to-b from-white/0 to-white/100 '>Join thousands of satisfied teams using FlowPro</p>

        <p className='pt-12 text-center'>Some cards</p>
        
        <p className='pt-25 text-center text-xl text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] from-100% to-[#FFFFFF]/0 to-0%'>Choose Your Plan</p>
        <p className='pt-2.5 text-center text-xs bg-clip-text bg-gradient-to-b text-transparent from-white/0 to-white'>Flexible plans for teams of any size</p>

    </div>
  )
}

export default Dashboard
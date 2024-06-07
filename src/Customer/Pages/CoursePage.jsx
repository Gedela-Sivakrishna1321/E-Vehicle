import React, { useEffect, useState } from 'react'
import { TiTick } from "react-icons/ti";
import ElectricProfessionalCard from '../Components/ElectricProfessionalCard/ElectricProfessionalCard';
import { rolesData } from '../../Data/CoursesData';
import CourseCard from '../Components/CourseCard/CourseCard';
import { coursesData } from '../../Data/CoursesData';
import ReachUs from '../Components/ReachUs/ReachUs';
import Aos from 'aos';
import 'aos/dist/aos.css'

const CoursePage = () => {

    useEffect(() => {
        fetchCourseData();
        Aos.init({once : true, duration : 2000});
      }, [])

      const [courseData, setCourseData] = useState();

      async function fetchCourseData() {

        const res = await fetch(
            "https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Course_Data"
          );
      
          const data = await res.json();

          const newData = transformData(data);
        //   console.log(JSON.stringify(newData, null, 2));
        //   console.log("Data = ", data);
          // // Debug: Log the transformed data to check its structure
          console.log('Transformed Data:', newData);

          setCourseData(newData);
      
      }

      function transformData(data) {
        const newData = [];
    
        // Helper function to find course by title in the newData array
        function findCourse(title) {
            return newData.find(course => course.courseTitle === title);
        }
    
        data.forEach(item => {
            let course = findCourse(item.courseTitle);
    
            if (!course) {
                course = {
                    courseTitle: item.courseTitle,
                    modules: [],
                    price: item.price,
                    duration: item.duration,
                    certification: item.certification
                };
                newData.push(course);
            }
    
            const module = {
                index: item.index,
                title: item.title.replace(/\"/g, ''),
                contents: item.contents.split('+').map(content => content.replace(/\"/g, ''))
            };
    
            course.modules.push(module);
        });
    
        return newData;
    }
    
  

  return (
    <div className='mt-20'>

        {/* Who Should Take This Course */}
        <div data-aos = "fade-up"
         className='my-10'>
            <h1 className='text-2xl p-2 sm:text-4xl text-center'>Who should take this <b>Electric Vehicle Design Course?</b></h1>
            
            <div className='flex lg:mx-auto   items-center mx-6 max-w-6xl justify-between  rounded-2xl my-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]' >
                
                <div className='flex flex-col justify-center  gap-y-4 ml-8 py-5'>
                    <p><TiTick className='inline text-3xl text-green-500' />   Fresher’s, Diploma Holders, and Engineering Graduates</p>
                    <p><TiTick className='inline text-3xl text-green-500' />   Any Graduate</p>
                    <p><TiTick className='inline text-3xl text-green-500' />   Systems and Network Professionals</p>
                    <p><TiTick className='inline text-3xl text-green-500' />   Non-IT professionals aiming to venture into the Electric Vehicle industry</p>
                </div>

                {/* Image */}
                <div>
                    <img 
                    className=' hidden lg:block'
                    src="https://intellipaat.com/course-image/2020/08/who-can-apply.png" alt="" />
                </div>

            </div>
        </div>

        {/* Importance of Electric Vehicle Professionals */}
        <div className='mt-20'>
            <h1 className=' text-2xl sm:text-4xl text-center'>What roles can <b>Electric Vehicle professionals play?</b></h1>

            <div className=' mx-6 space-y-10 border-t-4 border-blue-800 rounded-2xl p-8 flex flex-col md:flex-row md:flex-wrap items-center justify-center my-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>   

                {rolesData.map((item) => <ElectricProfessionalCard data = {item} />)}
                
            </div>
        </div>

        {/* Course and Syllabus */}
        <div className='bg-green-50' >
            {courseData?.map((course) => <CourseCard course={course} /> )}
            
        </div>

        {/* FAQ's */}

        {/* Reach us */}
        <ReachUs/>

    </div>
  )
}

export default CoursePage
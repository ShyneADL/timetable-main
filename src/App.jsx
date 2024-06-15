import React, { useState,useEffect } from 'react'
import { bell, calendar, logo, sun, moon } from './assets'
import { courseData } from './components/CourseData';

const App = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('Theme');
    return storedTheme ? JSON.parse(storedTheme) : 'dark'; // Set the default theme if not in local storage
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('Theme', JSON.stringify(newTheme));
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('Theme');
    console.log('Stored Theme:', storedTheme);
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }
    else {
      setTheme('dark')
    }
  },[]);

  // Now, add an effect to save the theme to local storage whenever it changes
useEffect(() => {
  localStorage.setItem('Theme', JSON.stringify(theme));
  console.log('Current Theme:', theme);
}, [theme]);



const [selectedCourses, setSelectedCourses] = useState(() => {
  const storedCourses = localStorage.getItem('selectedCourses');
  return storedCourses ? JSON.parse(storedCourses) : [];
});

const handleCourseChange = (courseId) => {
  setSelectedCourses(prevSelected => {
    const newSelected = prevSelected.includes(courseId)
      ? prevSelected.filter(id => id !== courseId)
      : [...prevSelected, courseId];
    localStorage.setItem('selectedCourses', JSON.stringify(newSelected)); // Save to local storage
    return newSelected;
  });
};

  const filteredCourseData = selectedCourses.length > 0 
    ? courseData.filter(course => selectedCourses.includes(course.id)) 
    : [];

  const calculateProgress = (start, end) => {
    const progressPercentage = ((start / end) * 100).toFixed(0); 
    return Math.min(100, Math.max(0, progressPercentage));
  };

  return (
    <main id={theme} className='flex flex-col lg:py-8 py-2 h-[100vh] w-full'>
      <nav className='flex items-center justify-between relative lg:p-8 p-2 w-full'>
        <div className='flex items-center gap-8'>
          <img className='w-24' src={logo} />
          <div className='flex flex-col items-start gap-4'>
            <div className='flex items-center gap-4'>
              <h3 className='big_text'>May, 2024</h3>
              <div className='flex items-center gap-2'>
                <button></button>
                <button></button>
              </div>
            </div>
            <div className='flex flex-wrap items-center gap-6 w-[300px] md:w-auto'>
              <p><span className='bold_text'>Course of Study:</span> Computer Science</p>
              <p><span className='bold_text'>Level:</span> 400</p>
              <p><span className='bold_text'>Session:</span> 2023-24</p>
              <p><span className='bold_text'>Semester:</span> 2nd</p>
            </div>
          </div>
        </div>
        {/* Right side of the nav */}
        <div className='absolute top-2 right-2 md:static flex items-center gap-4'>
          <img onClick={toggleTheme} src={theme === "dark" ? sun : moon} className='sm:w-[30px] w-[20px] cursor-pointer' />
          <button className='bg-blue rounded-full p-2 md:p-3 icon'>
            <img src={bell} className='w-4 lg:w-5' />
          </button>  
        </div>
      </nav>

    <div className='flex flex-col lg:flex-row md:flex-col lg:gap-0 gap-6 items-start justify-between lg:mx-8 mx-2 mb-8 min-w-full'>
      {/* Main Table */}
      <div class="timetable">
        <div class="time-header">Day/Hour</div>
        <div class="time-header">8:00 - 10:00</div>
        <div class="time-header">10:00 - 12:00</div>
        <div class="time-header">1:00 - 3:00</div>
        <div class="vertical-text">L<br/>U<br/>N<br/>C<br/>H<br/><br/>B<br/>R<br/>E<br/>A<br/>K</div>
        <div class="time-header">3:00 - 5:00</div>

        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(day => (
            <React.Fragment key={day}>
              <div className="day-header">{day}</div>
              {["8:00 - 10:00", "10:00 - 12:00", "1:00 - 3:00", "3:00 - 5:00"].map(timeslot => (
                <div className="cell" key={timeslot}>
                  {filteredCourseData.map(course => {
                    if (course.day.toLowerCase() === day.toLowerCase() && course.timeslot === timeslot) {
                      return (
                        <div key={course.id}>
                          <h4>{course.code}</h4>
                          <p>{course.lecturer}</p>
                        </div>
                      );
                    }
                    return null; 
                  })}
                </div>
              ))}
            </React.Fragment>
          ))}

      </div>

      <aside className='flex flex-col lg:flex-col md:flex-row items-center justify-start lg:justify-start md:justify-between w-full lg:w-auto gap-10'>
      {/* Course selector */}
      <div className="course_selector">
        <div className="flex items-center justify-between bg-blue w-full">
          <h3 className="bold_text text-[18px] tracking-[1.22px] uppercase text-white ">Course Selector</h3>
        </div>
        {courseData.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between"
          >
            <label>{course.code} - {course.title}</label>
            <input
              type="checkbox"
              checked={selectedCourses.includes(course.id)}
              onChange={() => handleCourseChange(course.id)}
            />
          </div>
        ))}
      </div>

      {/* Sessions */}
      <div className='sessions'>
      <div className='flex items-center justify-between bg-blue w-full'>
          <h3 className='bold_text text-[18px] text-center tracking-[1.22px] uppercase text-white '>Course</h3>
          <hr class="vertical-line" />
          <h3 className='bold_text text-[18px] text-center tracking-[1.22px] uppercase text-white '>Sessions</h3>
        </div>

        <div className='flex flex-col items-start gap-5 w-full'>
          {filteredCourseData.map((course) => (
            <div key={course.id} className='flex items-center justify-between w-full'>
            <div 
  className={`rounded-[8px] border-[1px] border-solid p-1 text-[13px] ${course.type === 'elective' ? 'bg-lightGreen border-green' : 'bg-lightBlue border-blue'}`}>{course.title}</div>

            <div className='flex items-start gap-1'>
              <p className='text-[14px] text-center text-blue'>{course.sessionStart}</p>
              {/* Progress bar */}
              <div class="bg-lightBlue h-4 w-[100px] rounded-full">
                <div style={{ width: `${calculateProgress(course.sessionStart, course.sessionEnd)}%` }} className="bg-blue h-full rounded-full"></div>
              </div>
              <p className='text-[14px] text-blue'>{course.sessionEnd}</p>
            </div>
          </div>
          ))}
          
        </div>
        {/* Compulsory and Elective */}
        <div className='flex items-center justify-start gap-4'>
          <div className='flex items-center justify-center bold_text text-center w-10 h-10 leading-[13px] uppercase bg-lightBlue border-solid border-[1px] border-blue rounded-[8px] cursor-default'>C
          </div>

          <div className='flex items-center justify-center bold_text text-center w-10 h-10 leading-[13px] uppercase bg-lightGreen border-solid border-[1px] border-green rounded-[8px] cursor-default'>E
          </div>
        </div>
      </div>
      
      </aside>

    </div>

    </main>
  )
}

export default App;

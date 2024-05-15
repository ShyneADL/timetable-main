import React, {useState,useEffect} from 'react'
import { bell, calendar, logo } from './assets'
import { courseData } from './components/CourseData';

const App = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('Theme');
    return storedTheme ? JSON.parse(storedTheme) : 'dark'; // Set the default theme if not in local storage
  });

  const [todo, setTodo] = useState([])

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

const onDragEnd = (result) => {
  if (!result.destination) return; // The item was dropped outside the list

  const updatedTodos = [...todo];
  const [reorderedTodo] = updatedTodos.splice(result.source.index, 1);
  updatedTodos.splice(result.destination.index, 0, reorderedTodo);

  setTodo(updatedTodos);
  localStorage.setItem('Todos', JSON.stringify(updatedTodos))
};


  return (
    <main is={theme} className='flex flex-col py-8 h-[100vh] w-full'>
      <nav className='flex items-center justify-between p-8 w-full'>
        <div className='flex items-center gap-8'>
          <img className='w-24' src={logo} />
          <div className='flex flex-col items-start gap-4'>
            <div className='flex items-center gap-4'>
              <h3 className='big_text'>March, 2024</h3>
              <div className='flex items-center gap-2'>
                <button></button>
                <button></button>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <p><span className='bold_text'>Course of Study:</span> Computer Science</p>
              <p><span className='bold_text'>Session:</span> 2023-24</p>
              <p><span className='bold_text'>Semester:</span> 2nd</p>
            </div>
          </div>
        </div>
        {/* Right side of the nav */}
        <div className='flex items-center gap-4'>
          <button className='bg-blue rounded-full p-3 icon'>
            <img src={calendar} className='w-5' />
          </button>
          <button className='bg-blue rounded-full p-3 icon'>
            <img src={bell} className='w-5' />
          </button>
          
        </div>
      </nav>

    <div className='flex items-start justify-between mx-8 mb-8'>
      {/* Main Table */}
      <div class="timetable">
        <div class="time-header">Day/Hour</div>
        <div class="time-header">8:00 - 10:00</div>
        <div class="time-header">10:00 - 12:00</div>
        <div class="time-header">1:00 - 3:00</div>
        <div class="vertical-text">L<br/>U<br/>N<br/>C<br/>H<br/><br/>B<br/>R<br/>E<br/>A<br/>K</div>
        <div class="time-header">3:00 - 5:00</div>

        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
          <React.Fragment key={day}>
            <div className="day-header">{day}</div>
            {["8:00 - 10:00", "10:00 - 12:00", "1:00 - 3:00", "3:00 - 5:00"].map((timeslot) => (
              <div className="cell" key={timeslot}>
                {courseData.map((course) => {
                  if (course.day.toLowerCase() === day.toLowerCase() && course.timeslot === timeslot) {
                    return (
                      <div key={course.code}>
                        <h4>{course.code}</h4>
                        <p>{course.lecturer}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            ))}
          </React.Fragment>
        ))}

      </div>

      <aside className='flex flex-col items-start justify-start gap-10'>
      {/* Course selector */}
      <div className='course_selector'>
        <div className='flex items-center justify-between bg-blue w-full'>
          <h3 className='bold_text text-[18px] tracking-[1.22px] uppercase text-white '>Course Selector</h3>
         </div>
        {courseData.map((data, index) => (
        <div key={data.code} index={index} className='flex items-center justify-between '>
        <label>{data.code} - {data.title}</label>
          <input type='checkbox' />
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
          <div className='flex items-center justify-between w-full'>
            <div className='bg-lightBlue rounded-[8px] border-[1px] border-solid border-blue p-1 text-[13px]'>Project Management</div>
            <div className='flex items-start gap-1'>
              <p className='text-[14px] text-center text-blue'>13</p>
              {/* Progress bar */}
              <div class="bg-lightBlue h-4 w-[100px] rounded-full">
                <div class="bg-blue h-full w-[43%] rounded-full"></div>
              </div>
              <p className='text-[14px] text-blue'>30</p>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='bg-lightGreen rounded-[8px] border-[1px] border-solid border-green p-1 text-[13px]'>Optimization Techniques</div>
            <div className='flex items-start gap-1'>
              <p className='text-[14px] text-center text-blue'>10</p>
              {/* Progress bar */}
              <div class="bg-lightBlue h-4 w-[100px] rounded-full">
                <div class="bg-blue h-full w-[33%] rounded-full"></div>
              </div>
              <p className='text-[14px] text-blue'>30</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex items-center justify-center gap-4'>

        <div className='flex items-center justify-center bold_text text-center w-10 h-10 leading-[13px] uppercase bg-lightBlue border-solid border-[1px] border-blue rounded-[8px] cursor-default'>C
        </div>

        <div className='flex items-center justify-center bold_text text-center w-10 h-10 leading-[13px] uppercase bg-lightGreen border-solid border-[1px] border-green rounded-[8px] cursor-default'>E
        </div>
      </div>
      </aside>

    </div>

    </main>
  )
}

export default App;

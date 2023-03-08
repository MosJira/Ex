import React from 'react'
import './App.css'


const App = () => {
  return (
    <div>

<div className=' sm:w-full sm:h-full font-bold '>
      

      <div className=' w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-500  ' > 
        <nav className=' flex item-center justify-between'>
        <button className='   bg-gray-700 rounded-xl hover:bg-red-400 m-1 mx-6'>logo</button>
        <ul className=' flex  items-center justify-end '>
        <li className=' m-2'> menu2</li>
        <li className=' m-2'> menu3</li>
        <li className=' m-2'> menu4</li>
        <li className=' m-2'> menu1</li>
        </ul>
        </nav>
      </div>

      <div className=' w-full  bg-gradient-to-r from-fuchsia-400 to bg-red-700   h-[400px]   p-1'>
        <h1 className=' text-center  my-20 '>Banner</h1>
      </div>

      <div>
        <h1 className=' text-center py-14'>Philosophy AS A Science</h1>
        <div> 
              <div className=' flex  justify-center py-10 gap-8'>
                
                <div  className=' bg-red-500 box-content h-32 w-32 p-4 border-4 m-3'></div>
                <div  className=' bg-red-500 box-content h-32 w-32 p-4 border-4 m-3'></div>
                <div  className=' bg-red-500 box-content h-32 w-32 p-4 border-4 m-3'></div>
              </div>
            
               <div  className=' bg-gray-400 flex  max-w-[670px] m-auto text-left'>      
                  <h3 className='   
                  
                  ' >Words To Live By
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laborum.</p>   
                  </h3>   
                  
                  <h3 className='    
                    ' >Words To Live By
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laborum.</p>   
                  </h3>   
                  
                  <h3 className=' leading-relaxed font-semibold inline-block py-1 px-4' >Words To Live By
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laborum.</p>              
                  </h3>   
              </div> 

        </div>
      </div>

      <div className=' bg-gray-500 text-center py-14 m-auto mt-6'>

            <h1 >Always Look The Bright Side Of Light</h1>
            <button className=' bg-red-400 rounded-full m-5'>Do this try </button>
            <button className=' bg-orange-300 rounded-full'>Or do this try</button>
            
      </div>

        <div className=' text-start pt-10 gap-1 px-10 py-6 sm:w-[60%] sm:h-[20%]   '>
          <h1 className=' text-3xl pb-7'> Types of Cookware Post And Pans</h1>
          <p className=' ' >  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo vero illum a esse atque, voluptatem dolore sed molestias natus. Reprehenderit? ipsum dolor, sit amet consectetur adipisicing elit. Harum et illo quae est odio facilis nulla omnis eum beatae maxime earum alias in temporibus modi, cum atque repellat voluptate cupiditate!</p>
         </div>
          
          <div >
          <p className=' text-center border-t-2 py-6'> Copy 2012-2018 Sketch App Sources - About - Tems - Privacy Polky</p>

          </div>

    </div>



    </div>
  )
}

export default App
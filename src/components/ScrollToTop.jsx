import { FaArrowUp } from "react-icons/fa"; 
import { useState } from 'react';


function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };

      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'    
        });
      };
      
      window.addEventListener('scroll', toggleVisible);

    return (  
        <button className={`shadow-lg p-3 bg-slate-500 ${visible ? 'flex' : 'hidden'} fixed bottom-[50px] right-[50px] z-10 opacity-90`} onClick={scrollToTop}>
            <FaArrowUp />
        </button>
    );
}

export default ScrollToTop;


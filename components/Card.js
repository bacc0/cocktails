import styles from './Card.module.scss';
import { useEffect, useState } from 'react';


const Card = (props) => {

     const [ingVisible, setIngVisible] = useState(false);

     const { name, picture, } = props;

     const handleClick = () => {
          setIngVisible(!ingVisible)
     }
     const handleClick_close = () => {
          if( ingVisible === true ) { 
               setIngVisible(false)
          }
          
     }

     return (
          <div onClick={handleClick_close}>
               <div className={styles.title}> {name} </div>
            
               <div
                    className={styles.container}
                    style={{
                         backgroundColor: '#FFFFFF00',
                         backgroundImage: `url('/pics_cocktails/${picture}.jpeg')`,
                         backgroundSize: 'cover'
                    }}
               >


                    

                    {ingVisible && (
                         <div className={styles.more_info}>

                              <p>1 part Cazadores Tequila</p>
                              <p>½ part triple sec liqueur</p>
                              <p>½ part lime juice</p>
                              <p>1 lime wedge</p>
                              <p>Salt</p>
                              <p>Cubed ice</p>
                              
                         </div>
                    )}

               </div>

               <div className={styles.button_container}>
                    <button
                         onClick={handleClick}
                         style={{
                              border: `2px solid ${ingVisible ? '#db0000' : '#0070f3'}`,
                              color: `${ingVisible ? '#db0000' : '#0070f3'}`,
                              backgroundColor: 'transparent',
                         }}
                    >
                         {ingVisible ? 'Close' : 'More'}
                    </button>
               </div>
          </div>
     )
};

export default Card;
import styles from './Card.module.scss';
import { useEffect, useState } from 'react';


const Card = (props) => {

     const [imageOpacity, setImageOpacity] = useState(0);
     const [more_infoVisible, setMore_infoVisible] = useState(false);
     const [positionMore_info, setPositionMore_info] = useState(330);

     useEffect(() => {
          setInterval(() => {
               setImageOpacity(1)
          }, 200);
     }, []);

     const { name, picture, } = props;

     const handleClick = () => {
          setMore_infoVisible(!more_infoVisible)

          setPositionMore_info(0)
        
     }
     const handleClick_close = () => {
          if( more_infoVisible === true ) { 
               setMore_infoVisible(false)
              
          }
     }

     return (
          <div onClick={handleClick_close}>
               <div className={styles.title}> {name} </div>
            
               <div
                    className={styles.container}
                    style={{
                         opacity: imageOpacity,
                         transition: 'opacity 1.5s',
                         backgroundColor: '#FFFFFF00',
                         backgroundImage: `url('/pics_cocktails/${picture}.jpeg')`,
                         backgroundSize: 'cover',
                         border: `1px solid ${more_infoVisible ? '#db0000' : '#FFFFFF'}`
                    }}
               >

                    {more_infoVisible && (
                         <div 
                              className={styles.more_info}
                                 style={{
                                    position: 'relative',
                                   
                                 }}
                         >

                              <p>1 part Cazadores Tequila</p>
                              <p>½ part triple sec liqueur</p>
                              <p>½ part lime juice</p>
                              <p>1 lime wedge</p>
                              <p>Salt</p>
                              <p>Cubed ice</p>
                              <p>Cubed ice 2</p>
                              <p>Cubed ice 3</p>
                              <p>Cubed ice 4</p>
                              <p>Cubed ice 5</p>
                             
                         </div>
                    )}

               </div>

               <div className={styles.button_container}>
                    <button
                         onClick={handleClick}
                         style={{
                              border: `2px solid ${more_infoVisible ? '#db0000' : '#0070f3'}`,
                              color: `${more_infoVisible ? '#db0000' : '#0070f3'}`,
                              backgroundColor: 'transparent',
                         }}
                    >
                         {more_infoVisible ? 'Close' : 'More'}
                    </button>
               </div>
          </div>
     )
};

export default Card;
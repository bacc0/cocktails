import styles from './Card.module.scss';
import { useEffect, useState } from 'react';


const Card = (props) => {

     const [imageOpacity, setImageOpacity] = useState(0);
     const [more_infoVisible, setMore_infoVisible] = useState(false);

     useEffect(() => {
          setInterval(() => {
               setImageOpacity(1)
          }, 200);
     }, []);

     const { name, picture, ingredients } = props;

     const handleClick = () => {
          setMore_infoVisible(!more_infoVisible)
     }

     const handleClick_close = () => {
          if (more_infoVisible === true) {
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
                         border: `0.5px solid ${more_infoVisible ? '#838383' : '#FFFFFF'}`
                    }}
               >
                    {more_infoVisible && (
                         <div
                              className={styles.more_info}
                              style={{
                                   position: 'relative',

                              }}
                         >
                              {
                                   ingredients.map((el) =>
                                        <p key={el}>

                                             {
                                                  el.length === 3
                                                       ? <div className={styles.container_parts}>
                                                            <div className={styles.parts}>
                                                                 {el[0]}
                                                            </div>

                                                            <div className={styles.parts_mid_1}>
                                                                 {el[1]}
                                                            </div>
                                                            <div className={styles.parts_last}>
                                                                 {el[2]}
                                                            </div>
                                                       </div>
                                                       : el.length === 2
                                                            ? <div
                                                                 className={styles.container_parts}
                                                            >
                                                                 <div className={styles.parts}>
                                                                      {el[0]}
                                                                 </div>
                                                                 <div className={styles.parts_mid_2}>      {el[1]}
                                                                 </div>
                                                            </div>

                                                            : <>
                                                            
                                                            <span className={styles.secondary}>
                                                                 {el}
                                                            </span>
                                                            </>
                                             }
                                        </p>
                                   )
                              }

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
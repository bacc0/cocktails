import styles from './Card.module.scss';
import { useEffect, useState } from 'react';


const Card = (props) => {

     const [ingVisible, setIngVisible] = useState(false);

     const { name, picture, } = props;

     const handleClick = () => {
          setIngVisible(!ingVisible)
     }
     return (
          <div>
               <span className={styles.title}> {name} </span>
               <div
                    className={styles.container}
                    style={{
                         backgroundColor: '#FFFFFF00',
                         backgroundImage: `url('/pics_cocktails/${picture}.jpeg')`,
                         backgroundSize: 'cover'
                    }}
               >


                    <div className={styles.button_container}>
                         <button
                              onClick={handleClick}
                              style={{
                                   backgroundColor: ingVisible ? '#990000cc' : '#00b79f99'
                              }}
                         >
                              {ingVisible ? 'Close' : 'More'}
                         </button>
                         </div>

                    {ingVisible && (
                         <div className={styles.more_info}>
                              <p>hhhhjhj</p>
                              <p>hhhhjhj</p>
                              <p>hhhhjhj</p>
                         </div>
                    )}

               </div>
          </div>
     )
};

export default Card;
import { useEffect, useState } from 'react';

import styles from './Home.module.css'
import Navtop from '../../components/Navtop/Navtop';

const Home = () => {

    const [ films, setFilms ] = useState<any[]>([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/schedule/full')
            .then(response => response.json())
            .then(result => {
                const hanya10Data = result.slice(0, 6);

                setFilms(hanya10Data); 
            })
    }, [films]);
 
    return (
        <div>
            <Navtop/>

            <section className={styles.poster}></section>

            <main className={styles.opsi}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{fontSize: "48px", color: "#08285b"}}>Pilih Film</h1>
                </div>
                <section className={styles.section}>
                    {films.map((item) => (
                        <div style={{marginBottom: '2rem'}}>
                            <img 
                                key={item.id} 
                                src={item._embedded?.show?.image?.medium}
                                alt={item._embedded?.show?.name} 
                                className={styles.image}
                                loading="lazy"
                            />
                            <p className={styles.title_film}>{item._embedded?.show?.name}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Home;
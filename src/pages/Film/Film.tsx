import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navtop from "../../components/Navtop/Navtop";
import styles from './Film.module.css';

const Film = () => {
    const [films, setFilms] = useState<any[]>([]);

    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("search") || ""; 

    // Filter film berdasarkan kata kunci dari URL
    const filteredFilms = films.filter((item) => {
        const filmName = item._embedded?.show?.name || "";
        return filmName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    useEffect(() => {
         fetch('https://api.tvmaze.com/schedule/full')
            .then(response => response.json())
            .then(result => {
                const hanya20Data = result.slice(0, 20);
                setFilms(hanya20Data); 
            })
            .catch(err => console.error("Gagal memuat data:", err));
    }, []);

    return (
        <div>
            <Navtop />

            <div className={styles.menu}>
                <Link to={'/'} className={styles.menu_link}>Beranda</Link>
                <p>/</p>
                <p>Film</p>
            </div>

            <section className={styles.section}>

                {filteredFilms.map((item) => (
                    <Link
                        to={`/film/${item.id}`}
                        key={item.id}
                        state={item}
                        style={{ textDecoration: 'none', color: 'inherit' }} // Menghilangkan garis bawah khas tag <a>
                    >
                        <div style={{ marginBottom: '2rem' }}>
                            <img 
                                src={item._embedded?.show?.image?.medium}
                                alt={item._embedded?.show?.name} 
                                className={styles.image}
                                loading="lazy"
                            />
                            <p className={styles.title_film}>{item._embedded?.show?.name}</p>
                        </div>
                    </Link>
                ))}

                {filteredFilms.length === 0 && (
                    <p style={{ color: '#888', padding: '1rem' }}>Film tidak ditemukan...</p>
                )}
            </section>
        </div>
    );
};

export default Film;

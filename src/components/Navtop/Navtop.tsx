import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Navtop.module.css';
import Logo from '../../assets/logo.png';
import Input from '../Input';

const Navtop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const currentSearch = searchParams.get("search") || "";

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (location.pathname !== "/film") {
            navigate(`/film?search=${encodeURIComponent(value)}`);
            return;
        }

        if (value) {
            setSearchParams({ search: value });
        } else {
            const newParams = new URLSearchParams(searchParams);
            newParams.delete("search");
            setSearchParams(newParams);
        }
    };

    return (
        <div>
            <header className={styles.header}>
                <div>
                    <img src={Logo} style={{ width: "80px", height: "100%", objectFit: "cover" }} alt="logo" />
                </div>

                <div id='menu'>
                    <ul className={styles.menu}>
                        <Link to={'/'} className={styles.anchor}>Home</Link>
                        <Link to={'/film'} className={styles.anchor}>Film</Link>
                        <Link to={'#'} className={styles.anchor}>F&B</Link>
                        <Link to={'#'} className={styles.anchor}>Bioskop</Link>
                        <Link to={'#'} className={styles.anchor}>Berita & Promo</Link>
                    </ul>
                </div>

                <Input 
                    id="search-film"
                    type="search" 
                    name="search"
                    value={currentSearch} 
                    onChange={handleSearchChange}
                />
            </header>
        </div>
    );
};

export default Navtop;

import styles from './Input.module.css'

interface propTypes {
    id: string;
    type: "text" | "search";
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (prop: propTypes) => {
    const { id, type = "search", name, value, onChange } = prop;

    return (
        <div>
            <input 
                id={id} 
                type={type} 
                name={name}
                value={value} 
                onChange={onChange} 
                placeholder="search...."
                className={styles.search}
                autoComplete='off'
            />
        </div>
    )
}

export default Input;

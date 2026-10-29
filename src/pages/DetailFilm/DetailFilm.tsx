import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detailfilm = () => {
    const { id } = useParams(); // 1. Ambil ID dari URL (Aman dari refresh)
    const [item, setItem] = useState<any>(null);

    useEffect(() => {
        // 2. Mengambil data film langsung berdasarkan ID dari URL
        fetch(`https://tvmaze.com{id}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            })
            .catch((err) => console.error("Error:", err));
    }, [id]);

    // 3. Tampilkan pesan loading jika data belum selesai diambil
    if (!item) return <p style={{ padding: '2rem' }}>Memuat data film...</p>;

    return (
        <div style={{ padding: '2rem' }}>
            <Link to="/film">⬅ Kembali ke Daftar Film</Link>

            {/* 4. Gunakan 'item.name' dan 'item.image' karena data detail langsung dari API */}
            <h1 style={{ marginTop: '1.5rem' }}>{item.name}</h1>

            <img
                src={item.image?.medium}
                alt={item.name}
                style={{ borderRadius: '8px', display: 'block', marginTop: '1rem' }}
            />
        </div>
    )
}

export default Detailfilm;
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css';

function Navbar () {
    return (
        <div className={styles.footer}>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </li>
            <li>
                <Link href="/post/edit"><a>Edit</a></Link>
            </li>
            <li>
                <Link href="/login"><a>Logout</a></Link>
            </li>
        </div>
    );
}

export default Navbar;

import styles from '../../styles/Davos.module.css';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: {davos: data}
    }
}

const Davos = ({davos}) => {
    return (
        <div>
            <h1>All Davos</h1>
            {davos.map(davo => (
                <div key={davo.id}>
                    <a className={styles.single}>
                        <h3>{davo.name}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}
 
export default Davos;

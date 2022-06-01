import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home'>
            <h1> Home </h1>
            <nav>
                <li><Link to='/Consultar'>Consultar filmes</Link></li>
            </nav>
        </div>
    );
}

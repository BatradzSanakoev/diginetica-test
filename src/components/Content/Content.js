import Sidebar from '../Sidebar/Sidebar';
import Cards from '../Cards/Cards';

export default function Content() {
    return (
        <div className='content'>
            <Sidebar />
            <Cards />
        </div>
    )
}
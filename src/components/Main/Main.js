import SearchForm from '../SearchForm/SearchForm';
import Categories from '../Categories/Categories';
import Content from '../Content/Content';

export default function Main() {
    return (
        <main className='main'>
            <SearchForm />
            <Categories />
            <Content />
        </main>
    )
}
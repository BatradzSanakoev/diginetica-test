export default function SearchForm() {
    return (
        <div className='search__section'>
            <form className='search__form' noValidate>
                <div className='search__input-block'>
                    <span className='search__input-icon'></span>
                    <div className='search__query-block'>
                        <span className='search__query'>Запрос пользователя</span>
                        <span className='search__close-query'></span>
                    </div>
                    <input className='search__input' type='text' />
                </div>
                <button className='search__search-button' type='submit' onClick={e => e.preventDefault()}>Найти</button>
            </form>
            <button className='search__close-button' type='button'>Закрыть</button>
        </div>
    )
}
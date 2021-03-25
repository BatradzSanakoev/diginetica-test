import CategoriesCard from '../CategoriesCard/CategoriesCard';

export default function Categories() {
    return (
        <div className='categories'>
            <div className='categories__info'>
                <h2 className='categories__header'>Результаты по запросу</h2>
                <p className='categories__text'>Показаны результаты для “Запрос пользователя”. Вы искали “Зопрос пользователя”.</p>
            </div>
            <div className='categories__cards'>
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
            </div>
        </div>
    )
}
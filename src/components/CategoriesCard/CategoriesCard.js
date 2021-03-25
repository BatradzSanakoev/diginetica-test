import CardImg from '../../images/categorie.jpg';

export default function CategoriesCard() {
    return (
        <div className='categories-card'>
            <img className='categories-card__pic' alt='card-pic' src={CardImg} />
            <div className='categories-card__info'>
                <p className='categories-card__name'>Название категории</p>
                <p className='categories-card__number'>134 товара</p>
            </div>
        </div>
    )
}
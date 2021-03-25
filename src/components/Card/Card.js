import CardPic from '../../images/categorie.jpg'

export default function Card() {
    return (
        <div className='card'>
            <img className='card__pic' alt='card-pic' src={CardPic} />
            <p className='card__text'>Наименование товара, которое не более 2 строк</p>
            <div className='card__price-block'>
                <p className='card__price'>ХХ ХХХ , $</p>
                <span className='card__span'>ХХ ХХХ $</span>
            </div>
            <button className='card__button'>Кнопка</button>
        </div>
    )
}
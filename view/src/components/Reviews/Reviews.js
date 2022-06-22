import style from './Reviews.module.css';

const Reviews = () => {
    return (
        <div className={style.reviews}>
            <h3>Отзывы</h3>
            <div className={style.reviewItem}>
                <div className={style.user}>Пользователь 1</div>
                <div className={style.message}>Отзыв о книге 1</div>
                <div className={style.rate}>5</div>
            </div>
            <div className={style.reviewItem}>
                <div className={style.user}>Пользователь 2</div>
                <div className={style.message}>Отзыв о книге 2</div>
                <div className={style.rate}>5</div>
            </div>
        </div>
    );
};

export default Reviews;
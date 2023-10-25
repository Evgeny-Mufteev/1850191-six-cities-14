import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const/routes';

import { OfferType } from '../../../mocks/offers';

type OfferCardProps = {
  offer: OfferType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const OfferCard = ({ offer, onMouseEnter, onMouseLeave }: OfferCardProps): JSX.Element => {
  const { previewImage, price, title, isFavorite, type, isPremium, rating } = offer;

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        {rating && (
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${(rating / 5) * 100}%` }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
        )}
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

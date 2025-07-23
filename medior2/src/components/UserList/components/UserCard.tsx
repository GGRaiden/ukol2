'use client';

import { ReactElement } from 'react';
import Link from 'next/link';
import { IUser } from '@/types/user';
import style from './UserCard.module.css';

interface IUserCardProps {
  user: IUser;
  onUserClick: (user: IUser) => void;
}

const UserCard = ({ user, onUserClick }: IUserCardProps): ReactElement => {
  const handleMapClick = (): void => {
    const { lat, lng } = user.address.geo;
    const mapUrl = `https://mapy.cz/turisticka?source=coor&id=${lng}%2C${lat}&x=${lng}&y=${lat}&z=16`;
    window.open(mapUrl, '_blank');
  };

  const handleReadArticlesClick = (): void => {
    onUserClick(user);
  };

  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <h3 className={style.name}>{user.name}</h3>
        <p className={style.username}>
          <span className={style.label}>Username</span> {user.username}
        </p>
      </div>

      <div className={style.cardContent}>
        <div className={style.section}>
          <p className={style.row}>
            <span className={style.label}>Email</span> {user.email}
          </p>
          <p className={style.row}>
            <span className={style.label}>Phone</span> {user.phone}
          </p>
          <p className={style.row}>
            <span className={style.label}>Website</span> {user.website}
          </p>
        </div>

        <div className={style.section}>
          <div className={style.addressTitleWrapper}>
            <h4 className={style.addressTitle}>Address</h4>
            <button className={style.mapButton} onClick={handleMapClick}>
              Show on map
            </button>
          </div>
          <p className={style.row}>
            <span className={style.label}>Street</span> {user.address.street}
          </p>
          <p className={style.row}>
            <span className={style.label}>Suite</span> {user.address.suite}
          </p>
          <p className={style.row}>
            <span className={style.label}>City</span> {user.address.city}
          </p>
          <p className={style.row}>
            <span className={style.label}>Zipcode</span> {user.address.zipcode}
          </p>
        </div>

        <div className={style.section}>
          <h4 className={style.companyTitle}>Company</h4>
          <p className={style.row}>
            <span className={style.label}>Name</span> {user.company.name}
          </p>
          <p className={style.row}>
            <span className={style.label}>Catch phrase</span> {user.company.catchPhrase}
          </p>
          <p className={style.row}>
            <span className={style.label}>Bs</span> {user.company.bs}
          </p>
        </div>
      </div>

      <div className={style.cardActions}>
        <Link href={`/articles/${user.id}`} onClick={handleReadArticlesClick}>
          <button type="button" className={style.articlesButton}>
            Read articles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;

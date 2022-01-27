import styles from './Cards.module.scss';

import { useState } from 'react';

import { Card } from '../../shared';

import type { ICard } from '../../api/picsum';

interface IProps {
  cardsList: ICard[];
  changeLikePost: (event: string | undefined) => void;
  deletePost: (id: string) => void;
}

export const Cards = ({ 
	cardsList, 
	changeLikePost, 
	deletePost 
}: IProps) => {
	const [likedCards, setLikedCards] = useState(false);

	const cards = likedCards ? cardsList.filter(card => card.like) : cardsList;

	const changeList = () => {
		setLikedCards((oldActive) => !oldActive)
	}

  return (
	<>
		<button className={styles.ChangeCards} onClick={changeList}>
			{likedCards ? 'Показать все карточки' : 'Показать выбранные карточки'}
		</button>

		<section className={styles.Cards}>
		{cards?.map((card) => (
			<Card 
			key={card.id}
			card={card}
			onClick={changeLikePost}
			onDelete={deletePost}
			/>
		))}
		</section>
	</>
  );
};


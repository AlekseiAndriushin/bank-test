import styles from './Card.module.scss';

import { Image } from '../../shared';

import type { ICard } from '../../api/picsum';

import { Trash2, Heart } from 'react-feather';

interface IProps {
	card: ICard;
	onClick: (event: string | undefined) => void;
	onDelete: (id: string) => void;
}

export const Card = ({ 
	card,
	onClick,
	onDelete
}: IProps) => {

  return (
	<div className={styles.Card}>
		<div className={styles.Card__InfoWrapper}>

			<p>
				Айди пользователя <b>{card.id}</b>
			</p>
			
			<p>
				Имя <b>{card.author}</b>
			</p>
			
		</div>

		<div className={styles.Card__ImageContainer}>

			<div className={styles.Card__buttons}>
			<Trash2 
			color='orange'
			className={styles.Card__Delete} onClick={() => onDelete(card.id)}/>
			<Heart 
			color='red'
			className={card.like ? styles.Card__Like : ''}
			onClick={() => onClick(card.id)}/>
			</div>

			<Image 
				src={card.download_url} 
				width={200} 
				height={200}
			/>
		</div>
  	</div>
  )
};

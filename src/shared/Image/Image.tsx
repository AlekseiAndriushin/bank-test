import styles from './Image.module.scss';

import errorImagePreview from './errorImagePreview.png';
import emptyImagePreview from './emptyImagePreview.png';

import { useEffect, useState } from 'react';

import type { ImgHTMLAttributes } from 'react';

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
	height: number;
	width: number;
}

export const Image = ({
	src,
	height,
	width,
	...rest
}: IProps) => {
	const [imgSrc, setImgSrc] = useState(src);

	const onError = () => setImgSrc(errorImagePreview);

	useEffect(() => {
		setImgSrc(src);
	}, [src]);

	return (
		<div style={{ width, height }} className={styles.Image__Load}>

			<img
				className={styles.Image}
				src={imgSrc ? imgSrc : emptyImagePreview}
				onError={onError}
				width={width}
				height={height}
				loading='lazy'
				alt='CardImage'
				{...rest}
			/>
		</div>
	);
};

import type { AxiosRequestConfig } from 'axios';

export const formatRequestConfig = (config: AxiosRequestConfig | undefined) => {
	const {  ...rest } = config;

	return {
		...rest,
	};
};

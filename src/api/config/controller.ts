import axiosBase from './axios.base';
import { formatRequestConfig } from './formatRequestConfig';

import type { AxiosResponse, AxiosRequestConfig } from 'axios';

interface IProps {
	requestUrl?: string;
}

export abstract class Controller {
	private readonly _requestUrl: IProps['requestUrl'];

	protected constructor({ requestUrl }: IProps) {
		this._requestUrl = requestUrl;
	}

	protected get<T>(path?: string, config?: AxiosRequestConfig) {
		const request = () => {
			return axiosBase.get<T>(
				this.processPath(path),
				formatRequestConfig(config)
			);
		};

		return this.processRequest(request);
	}

	private processRequest<T>(request: () => Promise<AxiosResponse<T>>) {
		if (!this._requestUrl) {
			throw new Error('Expected request url is absent');
		}

		return request();
	}

	private processPath(path?: string) {
		return `${this._requestUrl}${path || ''}`;
	}
}

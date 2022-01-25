import axiosBase from './axios.base';

import type { AxiosResponse, AxiosRequestConfig } from 'axios';

interface IProps {
  requestUrl?: string;
}

export abstract class Controller {
  private readonly _requestUrl: IProps['requestUrl'];

  protected constructor({ requestUrl }: IProps) {
    this._requestUrl = requestUrl;
  }

  protected post<T>(path?: string, data?: unknown, config?: AxiosRequestConfig) {
    const request = () => {
      return axiosBase.post<T>(
        this.processPath(path),
        data,
        config
      );
    };

    return this.processRequest(request);
  }

  private processRequest<T>(request: () => Promise<AxiosResponse<T>>) {
    if (!this._requestUrl) {
      throw new Error('Ожидаемый URL-адрес запроса отсутствует');
    }

    return request();
  }

  private processPath(path?: string) {
    return `${this._requestUrl}${path || ''}`;
  }
}
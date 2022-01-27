import { IGetCardList } from '.';
import { Controller } from '../config';

import type { IGetCardListResponse } from './response.types';

class PicsumController extends Controller {
	public constructor() {
		super({
			requestUrl: 'https://picsum.photos/v2'
		});
	}

	public async getImgList({...params}: IGetCardList) {
		return this.get<IGetCardListResponse>('/list', {
			params
		});
	}
}

export const PicsumAPI = new PicsumController();
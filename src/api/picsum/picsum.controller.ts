import { ICard, IGetCardList } from '.';
import { Controller } from '../config';

class PicsumController extends Controller {
	public constructor() {
		super({
			requestUrl: 'https://picsum.photos/v2'
		});
	}

	public async getImgList({...params}: IGetCardList) {
		return this.get<ICard[]>('/list', {
			params
		});
	}
}

export const PicsumAPI = new PicsumController();
import { createAsyncThunk } from '@reduxjs/toolkit';

import { PicsumAPI } from '../../../api/picsum';

import type { IGetCardList } from '../../../api/picsum';

const prefix = 'picsum/';
const getPicsumListPrefix = `${prefix}getPicsumList`;

export const getPicsumList = createAsyncThunk(
  getPicsumListPrefix,
  async (data: IGetCardList) => {
    const response = await PicsumAPI.getImgList(data);
    return response.data;
  }
);
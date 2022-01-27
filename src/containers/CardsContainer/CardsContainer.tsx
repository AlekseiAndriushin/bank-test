import { useEffect } from 'react';
import { Cards } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getPicsumList, setSelected, deleteItem } from '../../redux/reducers/picsum';

export const CardsContainer = () => {
  const dispatch = useAppDispatch();
  const cardsList = useAppSelector((state) => state.picsumCards.cardsList);
  const fetchLimit = 10;

  useEffect(() => {
    dispatch(
      getPicsumList({
        limit: fetchLimit,
      }),
    );
  }, [dispatch]);

  const changeLikePost = (id: string | undefined) => {
	  dispatch(setSelected(id))
  }

   const deletePost = (id: string) => {
	    dispatch(deleteItem({id}))
  }

  return (
  		<Cards
			cardsList={cardsList} 
   			changeLikePost={changeLikePost}
			deletePost={deletePost}
   		/>
  )
};

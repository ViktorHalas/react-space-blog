import React, { useEffect } from "react";
import { fetchHomeNews } from "store/features/newsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getNews } from "store/selectors/newsSelector";

export const HomePage = () => {
  const { news } = useAppSelector(getNews);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHomeNews());
  }, [dispatch]);
  return (
    <div>
      {news.map(({ title, id }) => (
        <div key = {id}>{title}</div>
      ))}
    </div>
  );
};

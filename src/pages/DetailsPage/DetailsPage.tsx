import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchBlogById,
  useAppDispatch,
  useAppSelector,
  getDetails,
  getBlog,
  fetchHomeBlog,
} from "store";
import { DetailsPageContainer, NavigationLink, Recommendations } from "./styles";
import { BlogContent, Spinner, SwiperSlider } from "components";
import { ROUTE } from "router";

export const DetailsPage = () => {
  const { details, isLoading, error } = useAppSelector(getDetails);
  const { blog } = useAppSelector(getBlog);
  const dispatch = useAppDispatch();
  const { blogType, id } = useParams();
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(ROUTE.HOME);
  };
  useEffect(() => {
    dispatch(fetchBlogById({ blogType: blogType, id: id }));
  }, [dispatch, id, blogType]);

  useEffect(() => {
    dispatch(fetchHomeBlog({ blogType: "articles", sort: "", limit: 12 }));
  }, [dispatch]);

  return (
    <DetailsPageContainer>
      <NavigationLink onClick={handleBackHome}>Home / Post {id}</NavigationLink>
      <BlogContent details={details} isLoading={isLoading} />
      <Recommendations>Recommendations</Recommendations>
      <SwiperSlider blog={blog}></SwiperSlider>
    </DetailsPageContainer>
  );
};

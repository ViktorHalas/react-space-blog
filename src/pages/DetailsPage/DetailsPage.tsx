import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBlogById,useAppDispatch, useAppSelector, getDetails } from "store";
import { DetailsPageContainer, NavigationLink } from "./styles";
import { BlogContent, Slider } from "components";

export const DetailsPage = () => {
  const { details, isLoading, error } = useAppSelector(getDetails);
  const dispatch = useAppDispatch();
  const { blog, id } = useParams();
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(fetchBlogById({ blog: blog, id: id }));
  }, [dispatch, id, blog]);
  return (
    <DetailsPageContainer>
      <NavigationLink onClick={handleBackHome}>
        Home <span> / Post {id}</span>
      </NavigationLink>
      <BlogContent details={details} isLoading={isLoading} />
      <Slider></Slider>
    </DetailsPageContainer>
  );
};

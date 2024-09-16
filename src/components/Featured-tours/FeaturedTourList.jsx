import React from "react";
import TourCard from "../../shared/TourCard";
// import tourData from '../../assets/data/tours'
import { Col } from "reactstrap";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedTourList = () => {
  // console.log(featuredTours)
  const featuredTours = [
    {
      _id: "1",
      title: "Grand Canyon Adventure",
      city: "Las Vegas",
      photo:
        "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      price: 250,
      featured: true,
      reviews: [
        {
          userId: "101",
          rating: 4,
          comment: "Amazing experience!",
        },
        {
          userId: "102",
          rating: 5,
          comment: "Breathtaking views!",
        },
      ],
    },
    {
      _id: "2",
      title: "Eiffel Tower Tour",
      city: "Paris",
      photo:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      price: 120,
      featured: false,
      reviews: [
        {
          userId: "103",
          rating: 3,
          comment: "Too crowded but worth it!",
        },
        {
          userId: "104",
          rating: 4,
          comment: "Romantic place!",
        },
      ],
    },
    {
      _id: "3",
      title: "Safari in Kenya",
      city: "Nairobi",
      photo:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      price: 500,
      featured: true,
      reviews: [
        {
          userId: "105",
          rating: 5,
          comment: "Once in a lifetime experience!",
        },
        {
          userId: "106",
          rating: 5,
          comment: "Loved every minute of it!",
        },
      ],
    },
    {
      _id: "3",
      title: "Safari in Kenya",
      city: "Nairobi",
      photo:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      price: 500,
      featured: true,
      reviews: [
        {
          userId: "105",
          rating: 5,
          comment: "Once in a lifetime experience!",
        },
        {
          userId: "106",
          rating: 5,
          comment: "Loved every minute of it!",
        },
      ],
    },
    {
      _id: "3",
      title: "Safari in Kenya",
      city: "Nairobi",
      photo:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      price: 500,
      featured: true,
      reviews: [
        {
          userId: "105",
          rating: 5,
          comment: "Once in a lifetime experience!",
        },
        {
          userId: "106",
          rating: 5,
          comment: "Loved every minute of it!",
        },
      ],
    },
    {
      _id: "3",
      title: "Safari in Kenya",
      city: "Nairobi",
      photo:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      price: 500,
      featured: true,
      reviews: [
        {
          userId: "105",
          rating: 5,
          comment: "Once in a lifetime experience!",
        },
        {
          userId: "106",
          rating: 5,
          comment: "Loved every minute of it!",
        },
      ],
    },
    {
      _id: "3",
      title: "Safari in Kenya",
      city: "Nairobi",
      photo:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      price: 500,
      featured: true,
      reviews: [
        {
          userId: "105",
          rating: 5,
          comment: "Once in a lifetime experience!",
        },
        {
          userId: "106",
          rating: 5,
          comment: "Loved every minute of it!",
        },
      ],
    },
  ];

  return (
    <>
      {featuredTours?.map((tour) => (
        <Col lg="3" md="4" sm="6" className="mb-4" key={tour._id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;

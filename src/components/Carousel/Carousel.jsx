import React from 'react'
import { useState, useEffect, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.style.css";
import Slayd from './Slayd';

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const PAGE_WIDTH = 900;
  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(Slayd, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, [children]);

  return (
    <div className="main-container">
      <FaChevronLeft className="arrow" onClick={handleLeftArrowClick} />
      <div className="window">
        <div
          className="all-pages-container"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight className="arrow" onClick={handleRightArrowClick} />
    </div>
  );
};

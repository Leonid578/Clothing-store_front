import React from "react";
import { useState, useEffect, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.style.css";

const PAGE_WIDTH = 1200;
const TIMER_OFFSET = 5000;

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

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

    if (offset === 0) {
      setTimeout(() => {
        setOffset(() => {
          const newOffset = -PAGE_WIDTH;
          return newOffset;
        });
      }, TIMER_OFFSET);
    } else if(offset === -1200){
      setTimeout(() => {
        setOffset(() => {
          const newOffset = -2 * PAGE_WIDTH;
          return newOffset;
        });  
      }, TIMER_OFFSET);
    }
    else if(offset === -2400){
      setTimeout(() => {
        setOffset((currentOffset) => {
          const newOffset = 0;
          const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
          return Math.max(newOffset, maxOffset);
        });  
      }, TIMER_OFFSET);
    }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
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

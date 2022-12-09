import { useCallback } from "react";
import { useState, useEffect, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.style.css";

const PAGE_WIDTH = 1920;
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
  const handleRightArrowClick = useCallback(() => {
    setOffset((currentOffset) => {
      const lastIndex = pages.length - 1;
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * lastIndex);
      if (offset === maxOffset) {
        setOffset(0);
      }
      return newOffset;
      // return Math.max(newOffset, maxOffset);
    });
  }, [offset, pages.length]);

  useEffect(() => {
    let timerId = setTimeout(handleRightArrowClick, TIMER_OFFSET);
    return () => {
      clearInterval(timerId);
    };
  }, [handleRightArrowClick]);

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            // minWidth: `${PAGE_WIDTH}px`,
            // maxWidth: `${PAGE_WIDTH}px`,
            minWidth: `1920px`,
            maxWidth: `1920px`,
          },
        });
      })
    );
  }, [children]);

  return (
    <div className="main-container">
      <FaChevronLeft className="arrow left" onClick={handleLeftArrowClick} />
      <div className="window">
        <div
          className="all-pages-container"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight className="arrow right" onClick={handleRightArrowClick} />
    </div>
  );
};

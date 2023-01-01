
import { useCallback } from "react";
import { useState, useEffect, Children, cloneElement, useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./Carousel.style.sass";
import { Link, List, Item, Cell, Table } from "./Carousell";

const PAGE_WIDTH = 1920;
const TIMER_OFFSET = 5000;

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  // const handleLeftArrowClick = () => {
  //   setOffset((currentOffset) => {
  //     const newOffset = currentOffset + PAGE_WIDTH;
  //     return Math.min(newOffset, 0);
  //   });
  // };

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

  const Dots = () => {
    const [obj, setObj] = useState(null);
    let classRef = useRef([]);
    const testfunc = (index, e) => {
      if (obj !== null) {
        classRef.current[obj].classList.remove("active");
      }
      const el = document.getElementById("test");
      el.className = el.className + " active";
      console.log(el.classList)
      setObj(index);
    };

    return (
      <Table>
        <Cell>
          <Item>
            <List className="active" id="test" >
              <Link>cat1</Link>
            </List>
            <List  id="test" onClick={testfunc}>
              <Link>cat2</Link>
            </List>
            <List id="test" onClick={testfunc}>
              <Link>cat3</Link>
            </List>
          </Item>
        </Cell>
      </Table>
    );
  };

  return (
    <>
      <div className="main-container">
        {/* <FaChevronLeft className="arrow left" onClick={handleLeftArrowClick} /> */}
        <div className="window">
          <div
            className="all-pages-container"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {pages}
          </div>
        </div>
        {/* <FaChevronRight className="arrow right" onClick={handleRightArrowClick} /> */}
      </div>
      <Dots />
    </>
  );
};

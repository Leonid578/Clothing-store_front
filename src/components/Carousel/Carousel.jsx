import { useCallback } from "react";
import { useState, useEffect } from "react";
import itemsHeroes from "./itemsHeroes.json";
import "./Carousel.style.css";
// import { Link, List, Item, Cell, Table } from "./Carousell";

export const Carousel = () => {
  // const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const PAGE_WIDTH = 1920;
  const TIMER_OFFSET = 20000;

  const handleRightArrowClick = useCallback(() => {
    setOffset((currentOffset) => {
      // const lastIndex = pages.length - 1;
      const lastIndex = itemsHeroes.length - 1;
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * lastIndex);
      if (offset === maxOffset) {
        setOffset(0);
      }
      return newOffset;
      // return Math.max(newOffset, maxOffset);
    });
  }, [offset]);

  useEffect(() => {
    let timerId = setTimeout(handleRightArrowClick, TIMER_OFFSET);
    return () => {
      clearInterval(timerId);
    };
  }, [handleRightArrowClick]);

  return (
    <>
      <div className="main-container">
        <div className="window">
          <div
            className="all-pages-container"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {itemsHeroes.map((itemsHero, index) => {
              return (
                <>
                  <div key={index}>
                    <img
                      src={require("../../images/jpg/" +
                        itemsHero.img +
                        ".jpg")}
                      alt={itemsHero.img}
                      width={PAGE_WIDTH}
                      height={"100%"}
                    />
                  </div>
                  <div className="dots">
                    <label for="radio-1" id="label-1"></label>
                    <label for="radio-2" id="label-2"></label>
                    <label for="radio-3" id="label-3"></label>
                    <label for="radio-4" id="label-4"></label>
                  </div>
                </>
              );
            })}

            <input
              type="radio"
              className="radio"
              name="images"
              id="radio-1"
              checked
            />
            <input type="radio" className="radio" name="images" id="radio-2" />
            <input type="radio" className="radio" name="images" id="radio-3" />
            <input type="radio" className="radio" name="images" id="radio-4" />
          </div>
        </div>
      </div>
    </>
  );
};

// const handleLeftArrowClick = () => {
//   setOffset((currentOffset) => {
//     const newOffset = currentOffset + PAGE_WIDTH;
//     return Math.min(newOffset, 0);
//   });
// };

// useEffect(() => {
//   setPages(
//     Children.map(itemsHero, (child) => {
//       return cloneElement(child, {
//         style: {
//           height: "100%",
//           // minWidth: `${PAGE_WIDTH}px`,
//           // maxWidth: `${PAGE_WIDTH}px`,
//           minWidth: `1920px`,
//           maxWidth: `1920px`,
//         },
//       });
//     })
//   );
// }, [itemsHero]);
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
//  {/* <FaChevronLeft className="arrow left" onClick={handleLeftArrowClick} /> */}
//  {/* <FaChevronRight className="arrow right" onClick={handleRightArrowClick} /> */}
// const Dots = () => {
//   const [obj, setObj] = useState(null);
//   let classRef = useRef([]);
//   const testfunc = (index, e) => {
//     if (obj !== null) {
//       classRef.current[obj].classList.remove("active");
//     }
//     const el = document.getElementById("test");
//     el.className = el.className + " active";
//     console.log(el.classList);
//     setObj(index);
//   };

// return (
//   <Table>
//     <Cell>
//       <Item>
//         <List className="active" id="test">
//           <Link>cat1</Link>
//         </List>
//         <List id="test" onClick={testfunc}>
//           <Link>cat2</Link>
//         </List>
//         <List id="test" onClick={testfunc}>
//           <Link>cat3</Link>
//         </List>
//       </Item>
//     </Cell>
//   </Table>
// );
// };

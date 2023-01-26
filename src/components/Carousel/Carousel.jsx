import { useCallback } from "react";
import { useState, useEffect } from "react";
import itemsHeroes from "./itemsHeroes.json";
import "./Carousel.style.css";

export const Carousel = () => {
  const [dots, setDots] = useState(0);
  const [offset, setOffset] = useState(0);
  // const PAGE_WIDTH = 1920;
  // let PAGE_WIDTH = 1920;
  const TIMER_OFFSET = 5000;
  // let WidthPage = window.innerWidth;
  // console.log(WidthPage)

  const AddActive = () => {
    const foo = document.querySelectorAll("li");
    for (let i = 0; i < foo.length; i++) {
      foo[i].classList.remove("active");
    }
  };

  const handleRightArrowClick = useCallback(() => {
    setOffset((currentOffset) => {
      const lastIndex = itemsHeroes.length - 1;
      // const newOffset = currentOffset - PAGE_WIDTH;
      // const newOffset = (offset + 100)
      // const maxOffset = -(PAGE_WIDTH * lastIndex);
      const maxOffset = -(lastIndex * 100);
      AddActive();
      if (offset === maxOffset) {
        setOffset(0);
        setDots(0);
      } else {
        setDots(dots + 1);
        setOffset(offset + 100);
      }
      // return newOffset;
    });
  }, [dots, offset]);

  const handleFirstClick = (e) => {
    AddActive();
    e.currentTarget.classList.add("active");
    setDots(0);
    return setOffset(0);
  };

  const handleSecondClick = (e) => {
    AddActive();
    e.currentTarget.classList.add("active");
    setDots(1);
    // return setOffset(-1920);
    return setOffset(-100);
  };

  const handleThirdClick = (e) => {
    AddActive();
    e.currentTarget.classList.add("active");
    setDots(2);
    // return setOffset(-3840);
    return setOffset(-200);
  };

  const handleFourthClick = (e) => {
    AddActive();
    e.currentTarget.classList.add("active");
    setDots(3);
    // return setOffset(-5760);
    return setOffset(-300);
  };

  useEffect(() => {
    const foo = document.querySelectorAll("li");
    foo[dots].classList.add("active");
    let timerId = setTimeout(handleRightArrowClick, TIMER_OFFSET);

    return () => {
      clearInterval(timerId);
    };
  }, [dots, handleRightArrowClick]);

  return (
    <div className="main-container">
      <div className="window">
        <div
          className="all-pages-container"
          style={{ transform: `translateX(${offset}%)` }}
        >
          <article className="fotoDiv a images1"></article>
          <article className="fotoDiv b images2"></article>
          <article className="fotoDiv c images3"></article>
          <article className="fotoDiv d images4"></article>

          {/* {itemsHeroes.map((itemsHero, index) => {
            return (
              <div key={itemsHero.id}>
                <img
                  src={require("../../images/jpg/" + itemsHero.img + ".jpg")}
                  alt={itemsHero.img}
                  width={PAGE_WIDTH}
                  height={"100%"}
                  className="images"
                />
              </div>
            );
          })} */}
        </div>
      </div>
      <ul className="dots">
        <li onClick={handleFirstClick} />
        <li onClick={handleSecondClick} />
        <li onClick={handleThirdClick} />
        <li onClick={handleFourthClick} />
      </ul>
    </div>
  );
};

// const handleLeftArrowClick = () => {
//   setOffset((currentOffset) => {
//     const newOffset = currentOffset + PAGE_WIDTH;
//     return Math.min(newOffset, 0);
//   });
// };

// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
//  {/* <FaChevronLeft className="arrow left" onClick={handleLeftArrowClick} /> */}
//  {/* <FaChevronRight className="arrow right" onClick={handleRightArrowClick} /> */}

// return Math.max(newOffset, maxOffset);

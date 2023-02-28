import { useCallback } from "react";
import { useState, useEffect, useRef } from "react";
import itemsHeroes from "./itemsHeroes.json";
import "./Carousel.style.css";

export const Carousel = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const [dots, setDots] = useState(0);
  const [offset, setOffset] = useState(0);
  const TIMER_OFFSET = 5000;

  const AddActive = () => {
    const foo = document.querySelectorAll("li");
    for (let i = 0; i < foo.length; i++) {
      foo[i].classList.remove("active");
    }
  };

  const handleRightArrowClick = useCallback(() => {
    setOffset((currentOffset) => {
      const lastIndex = itemsHeroes.length - 1;
      const newOffset = offset - 100;
      const maxOffset = -(lastIndex * 100);
      AddActive();
      if (offset === maxOffset) {
        setOffset(0);
        setDots(0);
      } else {
        setDots(dots + 1);
        setOffset(offset - 100);
      }
      return newOffset;
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
    return setOffset(-100);
  };

  const handleThirdClick = (e) => {
    AddActive();
    e.currentTarget.classList.add("active");
    setDots(2);
    return setOffset(-200);
  };

  const handleFourthClick = (e) => {
    AddActive();
    e.currentTarget.classList.add("active");
    setDots(3);
    return setOffset(-300);
  };

  useEffect(() => {
    const element1 = ref1.current;
    const element2 = ref2.current;
    const element3 = ref3.current;
    const element4 = ref4.current;

    // const foo = document.querySelectorAll("li");
    // foo[dots].classList.add("active");

    if (dots === 1) {
      element1.classList.add("active");
    } else if (dots === 2) {
      element2.classList.add("active");
    } else if (dots === 3) {
      element3.classList.add("active");
    } else if (dots === 4) {
      element4.classList.add("active");
    }

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
        </div>
      </div>
      <ul className="dots">
        <li ref={ref1} onClick={handleFirstClick} />
        <li ref={ref2} onClick={handleSecondClick} />
        <li ref={ref3} onClick={handleThirdClick} />
        <li ref={ref4} onClick={handleFourthClick} />
      </ul>
    </div>
  );
};

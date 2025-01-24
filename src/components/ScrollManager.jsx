import { useScroll } from "@react-three/drei";
import { use, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;
  const data = useScroll();
  const lastscroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0","absolute");

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      OnStart: () => {
        isAnimating.current = true;
      },
      OnComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section, data]);
  useFrame(() => {
    if (isAnimating.current) {
      lastscroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    if (data.scroll.current > lastscroll.current && curSection > section) {
      onSectionChange(curSection);
    }
    lastscroll.current = data.scroll.current;
  });

  return null;
};

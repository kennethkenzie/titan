"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

type ParallaxProps = {
  /** Title overlaid on the parallax stack. */
  title?: string;
  /**
   * Layer image URLs from back-most (index 0) to front-most.
   * Layers 0,1,3 render as images; layer 2 (the third entry) is replaced by the title.
   */
  layers?: [string, string, string, string];
};

const DEFAULT_LAYERS: ParallaxProps["layers"] = [
  // back-most
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1800&q=80",
  // mid background
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1800&q=80",
  // (title slot — image not used)
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1800&q=80",
  // front-most
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1800&q=80",
];

export function ParallaxComponent({
  title = "About Smari Creatives",
  layers = DEFAULT_LAYERS,
}: ParallaxProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector(
      "[data-parallax-layers]"
    );

    let tl: gsap.core.Timeline | undefined;

    if (triggerElement) {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0,
        },
      });

      const layerSpec = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 },
      ];

      layerSpec.forEach((layerObj, idx) => {
        tl!.to(
          triggerElement.querySelectorAll(
            `[data-parallax-layer="${layerObj.layer}"]`
          ),
          { yPercent: layerObj.yPercent, ease: "none" },
          idx === 0 ? undefined : "<"
        );
      });
    }

    return () => {
      tl?.scrollTrigger?.kill();
      tl?.kill();
    };
  }, []);

  return (
    <div className="parallax" ref={parallaxRef}>
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow" />
          <div data-parallax-layers className="parallax__layers">
            <img
              src={layers![0]}
              loading="eager"
              data-parallax-layer="1"
              alt=""
              className="parallax__layer-img"
            />
            <img
              src={layers![1]}
              loading="eager"
              data-parallax-layer="2"
              alt=""
              className="parallax__layer-img"
            />
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title">{title}</h2>
            </div>
            <img
              src={layers![3]}
              loading="eager"
              data-parallax-layer="4"
              alt=""
              className="parallax__layer-img"
            />
          </div>
          <div className="parallax__fade" />
        </div>
      </section>
      <section className="parallax__content">
        <Sparkles className="osmo-icon-svg" size={120} strokeWidth={1.25} />
      </section>
    </div>
  );
}

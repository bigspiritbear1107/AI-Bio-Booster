import { useKeenSlider } from 'keen-slider/react';
import { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import CountUp from 'react-countup';

export default function HeroSection() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
      spacing: 15,
    },
    defaultAnimation: {
      duration: 1500,
      easing: (t) => t * (2 - t),
    },
    dragSpeed: 0.5,
    rubberband: true,
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 1, spacing: 15 },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const rate = 5;

  return (
    <section id="home" className="bg-gray-50 pt-40 pb-20 px-4 flex items-center min-h-screen">
      <div className="max-w-5xl mx-auto w-full space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10">
          <div className="w-full md:col-span-6">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              AI Bio Booster
            </h2>
            <p className="mt-8 text-3xl text-red-500 leading-[4rem] text-center">
              Get Improved social media bio <br />
              specially for LinkedIn or Instagram <br />
              in just a few seconds
            </p>
          </div>

          <div className="flex justify-center w-full md:col-span-6">
            <div ref={sliderRef} className="keen-slider rounded-2xl w-full max-w-xl h-[340px]">
              {[1, 2, 3].map((n) => (
                <div key={n} className="keen-slider__slide">
                  <img
                    src={`/images/slide${n}.png`}
                    alt={`Slide ${n}`}
                    className="rounded-2xl w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x text-center">
          <div className="p-12">
            <p className="text-6xl font-bold text-purple-600">
              <CountUp start={100} end={67} delay={2} duration={(100 - 67) / rate} />
            </p>
            <p className="mt-4 font-medium text-gray-700">Current Bio</p>
          </div>
          <div className="p-12">
            <p className="text-6xl font-bold text-red-500">
              <CountUp start={67} end={96} delay={2} duration={(96 - 67) / rate} />
            </p>
            <p className="mt-4 font-medium text-gray-700">Generated Bio</p>
          </div>
          <div className="p-12">
            <p className="text-6xl font-bold text-green-600">
              <CountUp end={29} delay={2} duration={29 / rate} suffix="+" />
            </p>
            <p className="mt-4 font-medium text-gray-700">Boosted Amount</p>
          </div>
        </div>
      </div>
    </section>
  );
}

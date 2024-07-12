import React  from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.1,    // Trigger when 10% of the component is in view
      });
  return (
 <>
    <div ref={ref} className="flex flex-col items-center justify-center space-y-8 py-16 bg-gray-100">
        {inView && (
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#DC3545]">
                <CountUp end={1300} duration={3} />+
              </div>
              <div className="text-lg mt-2 font-semibold">Clients Every Month</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#DC3545]">
                <CountUp end={1500} duration={3} />+
              </div>
              <div className="text-lg mt-2 font-semibold">Car Models</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#DC3545]">
                <CountUp end={10} duration={3} />
              </div>
              <div className="text-lg mt-2 font-semibold">US Cities Covered</div>
            </div>
          </div>
        )}
      </div>
 </>
  )
}

export default Counter
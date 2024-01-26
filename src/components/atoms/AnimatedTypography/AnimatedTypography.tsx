'use client';

import {TypeAnimation} from 'react-type-animation';

export const AnimatedTypography = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'We produce food for Mice',
          500, // wait 0.5s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        speed={50}
        style={{fontSize: '2em', display: 'inline-block'}}
        repeat={Infinity}
      />
    </>
  );
};

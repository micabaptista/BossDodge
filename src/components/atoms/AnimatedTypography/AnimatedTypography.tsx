'use client';

import {useTypingEffect} from "@/hooks/useAnimationText";

interface AnimatedTypographyProps {
  text: string
}

export const AnimatedTypography = ({text}: AnimatedTypographyProps) => {

  const textAnimated = useTypingEffect(text, 50);

  return (<span>{textAnimated}</span>);
};

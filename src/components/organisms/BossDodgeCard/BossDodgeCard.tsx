'use client';

import {Card} from "@/components/atoms/Card/Card";
import {AnimatedTypography} from "@/components/atoms/AnimatedTypography/AnimatedTypography";

interface BossDodgeCardProps {
  text?: string;
}

export const BossDodgeCard = ({text}: BossDodgeCardProps) => {

  return (
    <Card>
      <AnimatedTypography text={text}></AnimatedTypography>
    </Card>
  );
};

'use client';

import {BossDodgeCard} from "@/components/organisms/BossDodgeCard/BossDodgeCard";
import {Background} from "@/components/atoms/Background/Background";
import './Homepage.css'
import ButtonGenerate from "@/components/molecules/ButtonGenerate/ButtonGenerate";
import useGenerateText from "@/hooks/useGenerateText";

export const Homepage = () => {

  const {text, updateText} = useGenerateText();

  return (
    <>
      <Background></Background>
      <div className={"content"}>
        <BossDodgeCard text={text}></BossDodgeCard>
        <ButtonGenerate onClick={updateText}></ButtonGenerate>
      </div>
    </>
  );
};

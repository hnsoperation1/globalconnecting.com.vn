import { CSSProperties } from 'react';

interface Ring {
  lat: number;
  startAngle?: number;
  words: string[];
}

interface WordSphereProps {
  rings?: Ring[];
  size?: number;
  radius?: number;
  bgColor?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: number;
  fontFamily?: string;
  autoSpinSpeed?: number;
  letterGap?: number;
  className?: string;
  style?: CSSProperties;
}

export default function WordSphere(props: WordSphereProps): JSX.Element;

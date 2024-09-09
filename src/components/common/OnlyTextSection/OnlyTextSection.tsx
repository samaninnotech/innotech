"use client";
import { PortableText } from '@portabletext/react';
import components from '../BlockContent/components';
import { OnlyText } from './OnlyTextSection.styled';


type OnlyTextSectionProps = {
    text: any;
}
const OnlyTextSection: React.FC<OnlyTextSectionProps> = ({text}) => {
return (
    <OnlyText>
        <PortableText value={text} components={components}/>
    </OnlyText>
);
};

export default OnlyTextSection;

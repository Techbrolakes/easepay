import { styled } from 'styled-components';

export const Button = styled.button`
   background-color: #6936f5;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 50px;
   padding: 10px 20px;
   gap: 10px;
   width: 180px;
   color: #fff;
   font-size: 16px;
   font-weight: 400;
`;

export const GradientHeader = styled.h1`
   background: linear-gradient(to right, #dad9dc, #9e9ca4);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   display: inline-block;
   font-size: 50px;
   font-weight: 700;
`;

export const BlueGradientText = styled.h1`
   background: linear-gradient(to right, #afd4fe, #65ccff);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   display: inline-block;
   font-size: 60px;
   font-weight: 700;
`;

export const GradientText = styled.span`
   background: linear-gradient(to right, #fdfdfd, #dbdbdd);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   display: inline-block;
   font-size: 18px;
   font-weight: 400;
   width: 60%;
`;

export const Flex = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
`;

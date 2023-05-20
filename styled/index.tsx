import styled from 'styled-components';

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
   background-clip: text;
   background: linear-gradient(to right, #d8d7da, #bdbcc1, #b2b1b7, #a7a5ac, #a3a1a9);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   display: inline-block;
   font-size: 50px;
   font-weight: 700;

   @media (max-width: 992px) {
      font-size: 30px;
   }
`;

export const BlueGradientText = styled.h1`
   font-size: 85px;
   line-height: 95px;
   font-weight: 700;
   margin-bottom: 24px;
   background-clip: text;
   background: linear-gradient(to right, #a088ff 10%, #a088ff 34%, #37d7ff 81%, #37d7ff 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;

   @media (max-width: 768px) {
      font-size: 18px;
      line-height: 16px;
   }

   @media (max-width: 992px) {
      font-size: 32px;
      line-height: 70px;
   }
`;

export const GradientText = styled.span`
   background: linear-gradient(to right, #fdfdfd, #ececed, #cecdd1, #dbdbdd);
   background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   display: inline-block;
   font-size: 18px;
   font-weight: 400;
   width: 70%;

   @media (max-width: 992px) {
      width: 100%;
      font-size: 14px;
   }
`;

export const Flex = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
`;

export const SignUpButton = styled.button`
   background: rgba(255, 255, 255, 0.05);
   cursor: pointer;
   border: 0.5px solid #ffffff08 !important;
   padding: 8px 16px;
   &:hover {
      background: rgba(255, 255, 255, 0.1);
   }
`;

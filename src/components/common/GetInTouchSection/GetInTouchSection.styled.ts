import styled from 'styled-components';

// Define custom props for Column and Heading
type ColumnProps = {
    offset?: boolean;
}

// Define custom props for Heading
type HeadingProps = {
    small?: boolean;
}

type FormItemProps = {
  padding?: string;
}


export const SectionWrapper = styled.div`
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding-top: 110px; /* Align with the background image's top padding */
  padding-bottom: 120px; /* Align with the background image's bottom padding */
  background-image: url('https://innotech.software/wp-content/uploads/2019/03/home-appointment-contact-bg-image.png');
  background-repeat: no-repeat;
  background-position: center right;
  background-size: auto; /* Ensures that the background is displayed in its original size */
  @media (max-width: 768px) {
    background-position: bottom center;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div<ColumnProps>`
  flex: ${({ offset }) => (offset ? '0 0 41.66667%' : '0 0 50%')};
  max-width: ${({ offset }) => (offset ? '41.66667%' : '50%')};
  padding-right: 15px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
export const FirstRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
// Styled component with custom props
export const Heading = styled.h3.attrs<HeadingProps>(({ small }) => ({
    style: {
      fontSize: small ? '18px' : '24px',
      fontWeight: small ? 'normal' : 'bold',
    },
}))<HeadingProps>`
    color: #333;
`;

export const Spacer = styled.div`
  height: 20px;
`;

export const FormWrapper = styled.div`
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const FormItem = styled.div<FormItemProps>`
  margin-bottom: 20px;
  width: 100%;
  padding-right: ${(props) => props.padding || "0"}
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f5f5f5
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f5f5f5

`;

export const Select = styled.select`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f5f5f5
`;

export const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #007cba;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;

export const Agreement = styled.div`
  margin-bottom: 20px;
  label {
    font-size: 14px;
    display: flex; /* Add this to align the checkbox and text horizontally */
    align-items: center; /* Vertically align the checkbox and text */
    input {
      margin-right: 8px; /* Adjust this value to add space between the checkbox and the text */
    }
    a {
      color: #007cba;
      text-decoration: none;
    }
  }
`;


export const Loader = styled.div`
  display: none;
  margin-top: 20px;
  .sk-wave {
    display: flex;
    justify-content: space-between;
  }
  .sk-rect {
    width: 6px;
    height: 24px;
    background-color: #333;
    animation: sk-wave 1.2s infinite ease-in-out;
  }
  .sk-rect1 { animation-delay: -1.2s; }
  .sk-rect2 { animation-delay: -1.1s; }
  .sk-rect3 { animation-delay: -1s; }
  .sk-rect4 { animation-delay: -0.9s; }
  .sk-rect5 { animation-delay: -0.8s; }

  @keyframes sk-wave {
    0%, 40%, 100% { transform: scaleY(1); }
    20% { transform: scaleY(2); }
  }
`;

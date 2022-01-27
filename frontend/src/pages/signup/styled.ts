import styled from '@emotion/styled';
import BaseHeading from '@/components/atoms/Heading/Heading';
import BaseFormGroup from 'components/molecules/FormGroup/FormGroup';

const Container = styled.div`
  height: 100vh;
  padding: 5vh;
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.15));
  background-image: linear-gradient(135deg, #ad6bff 0%, #74bcf7 100%);
  box-sizing: border-box;
  text-align: center;
`;

const Title = styled(BaseHeading)`
  letter-spacing: 0.7rem;
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.15));
  margin-top: 1vh;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

const FormGroup = styled(BaseFormGroup)`
  filter: drop-shadow(0px -20px 25px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.1));
  background-color: #ffffff;
  margin-top: 5vh;
`;

export default { Container, Title, ProfileContainer, FormGroup };

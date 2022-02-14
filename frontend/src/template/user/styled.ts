import styled from '@emotion/styled';
import { MainContainer as BaseMainContainer, Button as BaseButton } from '@/components/atoms';
import { DrawerMenu as BaseDrawerMenu } from '@/components/molecules';
import { makeStyles } from '@material-ui/core/styles';

const MainContainer = styled(BaseMainContainer)`
  text-align: center;
  justify-content: start;
  position: relative;
`;

const DrawerMenu = styled(BaseDrawerMenu)`
  position: absolute;
  top: 0;
  right: 0;
  & button {
    padding-right: 0;
    color: #fff;
  }
`;

const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 3vh 8vw 0 8vw;
  position: relative;
  background-color: #d5d5d3;
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.1));
`;

const useStyles = makeStyles({
  root: {
    zIndex: 1,
    transform: 'translate(-2vh, 0.5vh)',
    filter: ' drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.1))',
  },
});

const UserInfo = styled.div`
  transform: translate(6vh, -3vh);
  background-color: #fff;
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.1));
  padding: 3vh;
  width: 90%;
`;

const UserInfoHeader = styled.div`
  display: flex;
  margin-bottom: 1vh;
  align-items: center;

  & .username {
    flex: 9;
  }

  & .btn {
    flex: 1;
  }
`;

const UserInfoFooter = styled.div`
  margin-top: 1vh;
  display: flex;

  & div {
    flex: 1;
  }
`;

const Button = styled(BaseButton)`
  &.follow {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    padding: 1vh;
  }

  &.unfollow {
    background-color: #000;
    color: #fff;
    padding: 1vh;
  }
`;

const TabContainer = styled.div`
  background-color: #fff;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const TabPanel = styled.div`
  width: 100%;
  height: 49.5vh;
  overflow-y: auto;
`;

export default {
  MainContainer,
  DrawerMenu,
  ProfileContainer,
  useStyles,
  UserInfo,
  UserInfoHeader,
  UserInfoFooter,
  ContentContainer,
  Button,
  TabContainer,
  TabPanel,
};

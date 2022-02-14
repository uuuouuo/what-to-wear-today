interface UserType {
  no: string;
  id: string;
  password: string | undefined;
  platform: number;
  ageRange: string | undefined;
  gender: boolean | undefined;
}

interface UserProfileType {
  no: string;
  userId: string;
  nickName: string;
  profileImage: string;
}

interface StateType {
  myInfo: UserType;
  kakaoLoginLoading: boolean;
  kakaoLoginDone: boolean;
  kakaoLoginError: Error | null;
}

export type { UserType, UserProfileType, StateType };

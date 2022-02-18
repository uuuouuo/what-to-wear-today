interface UserType {
  no: string;
  id: string;
  password: string | undefined;
  platform: number;
  ageRange: string | undefined;
  gender: boolean | undefined;
}

interface UserProfileType {
  userId: string;
  nickname: string;
  profileImage: string;
}

interface CreateUserType {
  nickname: string;
  image: File;
  interestNos: number[];
  typeNos: number[];
}

interface StateType {
  newUser: CreateUserType;
  myInfo: UserType;
  isMember: boolean;
  kakaoLoginLoading: boolean;
  kakaoLoginDone: boolean;
  kakaoLoginError: Error | null;
  kakaoSignupLoading: boolean;
  kakaoSignupDone: boolean;
  kakaoSignupError: boolean;
}

export type { UserType, UserProfileType, CreateUserType, StateType };

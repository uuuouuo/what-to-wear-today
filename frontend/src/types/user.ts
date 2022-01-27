interface UserType {
  _no: string;
  id: string;
  password: string | undefined;
  platform: number;
  age_range: string | undefined;
  gender: boolean | undefined;
}

export type { UserType };

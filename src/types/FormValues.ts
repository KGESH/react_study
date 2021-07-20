type LoginFormValues = {
  id: string;
  pw: string;
};

type SignUpFormValues = {
  id: string;
  pw: string;
  name: string;
  email: string;
  age: number;
};

export type { LoginFormValues, SignUpFormValues };
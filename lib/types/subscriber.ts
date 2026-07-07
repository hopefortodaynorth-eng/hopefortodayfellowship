export type Subscriber = {
  id: string;
  name: string;
  email: string;
  phone: string;
  interests: string[];
  message: string;
  subscribedAt: string;
  updatedAt: string;
};

export type ConnectSignupPayload = {
  name: string;
  email: string;
  phone?: string;
  interests?: string[];
  message?: string;
};
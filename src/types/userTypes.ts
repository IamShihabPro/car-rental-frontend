export type TSignup = {
    name: string;
    email: string;
    role: string;
    password: string;
    confirmPassword: string;
    phone: string;
    address: string;
    image: string;
    termsAccepted: boolean;
}

export type TCarStatus = 'available' | 'unavailable';

export interface TCar {
  brand: string;
  name: string;
  description: string;
  color: string;
  image: string;
  isElectric: boolean;
  status: TCarStatus; 
  features: string[];
  pricePerHour: number;
  isDeleted: boolean;
}
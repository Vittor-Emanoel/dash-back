export type Member = {
  fullName: string;
  phone: string;
  churchId?: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  officeId?: string;
  shepherdId?: string;
  church?: {
    id: string;
    name: string;
    shepherd: {
      id: string;
      name: string;
    };
  };
};

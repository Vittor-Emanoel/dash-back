export interface OrganizationCreated {
  number: string;
  id: string;
  name: string;
  street: string;
  crn: string;
  churchs: {
    id: string;
    name: string;
    members: {
      id: string;
      fullName: string;
      phone: string;
      street: string;
      houseNumber: string;
      postalCode: string;
      churchId: string;
      officeId: string;
    }[];
  }[];
  responsible: {
    id: string;
    name: string;
    email: string;
  };
}

export interface IOrganization {
  id: string;
  name: string;
  slug: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

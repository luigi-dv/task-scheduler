export type Comment = {
  id: number;
  type: "comment";
  person: Person;
  imageUrl: string;
  comment: string;
  date: string;
};

export type Assignment = {
  id: number;
  type: "assignment";
  person: Person;
  assigned: Person;
  date: string;
};

export type Tag = {
  name: string;
  href: string;
  color: string;
};

export type Tags = {
  id: number;
  type: "tags";
  person: Person;
  tags: Tag[];
  date: string;
};

export type Activity = Comment | Assignment | Tags;

type Name = {
  name: string;
};

type LastName = {
  lastName: string;
};

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';

type intersection = AB & AC & AD;

type CompleteName = Name & LastName;

const Person: CompleteName = {
  name: 'Diego',
  lastName: 'Fabbri',
};

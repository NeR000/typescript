interface VotationOptions {
  numberOfVotes: number;
  category: string;
}

export class Votation {
  private _options: VotationOptions[] = [];

  constructor(public detail: string) {}

  addVotation(votationOption: VotationOptions): void {
    this._options.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._options[votationIndex]) return;
    this._options[votationIndex].numberOfVotes++;
  }

  get votations(): VotationOptions[] {
    return this._options;
  }
}

class VoteApp {
  private _votations: Votation[] = [];

  addVotation(votation: Votation) {
    this._votations.push(votation);
  }

  getVotations(): void {
    for (const votation of this._votations) {
      console.log(votation.detail);

      for (const option of votation.votations) {
        console.log(option.category, option.numberOfVotes);
      }
    }
  }
}

const votation1 = new Votation('Qual a sua linguangem de programção preferida');
votation1.addVotation({ category: 'Typescript', numberOfVotes: 0 });
votation1.addVotation({ category: 'Python', numberOfVotes: 0 });
votation1.addVotation({ category: 'Java', numberOfVotes: 0 });
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);
votation1.vote(2);
votation1.vote(1);

const voteApp = new VoteApp();
voteApp.addVotation(votation1);
voteApp.getVotations();

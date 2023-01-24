type contributors = {
  name:string,
  login: string;
  html_url: string;
  avatar_url: string;
  contributions: number;
};

// type contributor = {
//   name: string;
//   photo: string;
//   contributions: number;
// };

type repo = {
  totalCommits: number;
  totalIssues: number;
  totalContributors: number;
  members: {
    login: string;
    avatar_url: string;
    contributions: number;
    id: number;
    html_url: string;
  }[];
  issues: {
    number: number;
    title: string;
    user: string;
    body: string;
  }[];
};
type orgData = {
  name: string;
  avatarUrl: string;
  description: string;
  url: string;
  hfestRepos: number;
  repos: {
    name: string;
    contributors: contributors[];
    url: string;
    description: string;
    topics: string[];
    defBranch: string;
    totalCommits: number;
    openIssues: number;
    prOpen: number;
  }[];
};

export {contributors,repo, orgData };

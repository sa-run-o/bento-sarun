export interface IComment {
  by: string;
  data: string;
  timestamp: string;
  comment: string[];
  like: number;
}
export interface IProject {
  name: string;
  image: string[];
  description: string;
  responsibility: string[];
}
export interface IPersonalInformation {
  cvLink: string;
  startWorking: string;
  workingYear: number;
}
export interface IStack {
  color: string;
  icon: string;
  like: number;
  link: string;
  name: string;
}

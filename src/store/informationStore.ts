import { create } from "zustand";
import {
  IComment,
  IPersonalInformation,
  IProject,
  IStack,
} from "../interfaces/information";

interface IInformationStore {
  view: number;
  setView: (data: number) => void;
  like: number;
  setLike: (data: number) => void;
  comments: IComment[];
  setComments: (data: IComment[]) => void;
  addComment: (data: IComment) => void;
  personalInformation: IPersonalInformation | undefined;
  setPersonalInformation: (data: IPersonalInformation) => void;
  projectList: IProject[] | [];
  setProjectList: (data: IProject[]) => void;
  stackList: IStack[] | [];
  setStackList: (data: IStack[]) => void;
}
const informationStore = create<IInformationStore>((set) => ({
  view: 0,
  setView: (data) => set(() => ({ view: data })),
  like: 0,
  setLike: (data) => set(() => ({ like: data })),
  personalInformation: undefined,
  setPersonalInformation: (data) => set(() => ({ personalInformation: data })),
  comments: [],
  setComments: (data) => set(() => ({ comments: data })),
  projectList: [],
  setProjectList: (data) => set(() => ({ projectList: data })),
  stackList: [],
  setStackList: (data) => set(() => ({ stackList: data })),
  addComment: (data) =>
    set((state) => ({ comments: [...state.comments, data] })),
}));
export default informationStore;

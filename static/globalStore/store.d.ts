export type Store = {
  isLoggedIn?: boolean;
  userData?: {
    scholar: number;
    name: string;
    grade: 10 | 12;
    subject_info: string[];
    dob: string;
    testing_info: {
      [subject: string]: {
        score: number;
        answers: number[];
        test_taken_at: number;
      };
    };
  };
  currentTheme?: "";
  eventBegan?: boolean;
  eventBeginTimeStamp?: number;
  $fetchedStringData?: import("./strings-en").strings;
};

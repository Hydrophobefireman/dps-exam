export type strings = {
  Error$TitleDefault: "An error occured";
  Error$BodyText: "An unexpected error occured";

  Success$TitleDefault: "Success";

  Loading$Default: "Loading...";

  Landing$Welcome: "Welcome";
  Landing$RequestDetails: "Enter your details";

  Login$Scholar: "Scholar No.";
  Login$DateOfBirth: "Date of Birth (DD-MM-YYYY)";
  Login$login: "Login";
  Login$InProgressText: "Checking your details";
  Login$ErrorText: "Can't login";

  Profile$ClassOf: "Class of";
  Profile$YourSubjects: "Your Subjects";
  Profile$ViewReport: "View Report";
  Logout$logout: "Logout";

  Exam$Begin: "Begin Examination";
  Exam$Invalid: "Invalid Exam";
  Exam$UnansweredQuestionsLeft: "Unanswered Questions Left";
  Exam$NoNegativeMarking: "There is no negative marking. Please answer the following questions";
  Exam$LoadingQuestions: "Loading questions";
  Exam$TimeUp: "Time up";
  Exam$TimeUpAnswerSubmitInfo: "Your answers are being submitted (Time Over)";
  Exam$CalculatingScore: "Calculating your score";
  Exam$ResultText: "Results";
  Exam$MaximumMarks: "Maximum Marks: ";
  Exam$YourScore: "Your score: ";
  Exam$TimeAllotted: "Time allotted - ";
  Exam$TimeLeft: "Time Left - ";
  Exam$Submit: "Submit";

  Admin$LoadingUsers: "Loading all students from database";
  Admin$AreYouSure: "Are You sure?";
  Admin$AboutToExecuteReset(
    name: string,
    scholar: number,
    subject: string
  ): string;

  Report$YourReportFor(subject: string): string;

  Report$CorrectAnswers: "Correct answers";
};

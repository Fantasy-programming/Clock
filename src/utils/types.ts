export interface SessionConfig {
  focus: {
    label: string;
    duration: number;
  };
  shortBreak: {
    label: string;
    duration: number;
  };
  longBreak: {
    label: string;
    duration: number;
  };
  sessionBeforeLongBreak: number;
  numberOfSessions: number;
  numberOfCycles: number;
}

export const defaultSessionConfig: SessionConfig = {
  focus: {
    label: "Focus Session",
    duration: 25 * 60,
  },
  shortBreak: {
    label: "Short Break",
    duration: 5 * 60,
  },
  longBreak: {
    label: "Long Break",
    duration: 15 * 60,
  },
  sessionBeforeLongBreak: 2,
  numberOfSessions: 4,
  numberOfCycles: 1,
};

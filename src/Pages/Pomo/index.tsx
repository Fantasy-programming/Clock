import { useState, useEffect, useRef } from "react";

import { getStoredSessionConfig } from "@/utils/func";
import { defaultSessionConfig, SessionConfig } from "@/utils/types";

import Navbar from "@/components/Navbar";
import Settings from "@/assets/settings.svg?react";
import Play from "@/assets/play.svg?react";
import Pause from "@/assets/pause.svg?react";
import Forward from "@/assets/ff.svg?react";

import Milky2 from "@/assets/milky2.svg?react";
import Milky from "@/assets/milky.svg?react";
import Rocket from "@/assets/rocket.svg?react";
import Stars2 from "@/assets/stars2.svg?react";

import Button from "./_components/Button";
import Modal from "./_components/Modal";
import Time from "./_components/Time";

type Session = "focus" | "shortBreak" | "longBreak";

const Pomo = () => {
  const storedSessionConfig = getStoredSessionConfig();

  const [sessionConfig, setSessionConfig] = useState(storedSessionConfig || defaultSessionConfig);

  const [timer, setTimer] = useState<number>(sessionConfig.focus.duration);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const [sessionCount, setSessionCount] = useState<number>(0);
  const [currentSession, setCurrentSession] = useState<Session>("focus");
  const [pomoCycle, setPomoCycle] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const intervalRef = useRef<null | number>(null);

  useEffect(() => {
    if (storedSessionConfig) {
      setSessionConfig(storedSessionConfig);
    } else {
      localStorage.setItem("sessionConfig", JSON.stringify(defaultSessionConfig));
    }
  }, []);

  useEffect(() => {
    if (timer === 0) {
      handleSessionEnd();
    }
  }, [timer]);

  useEffect(() => {
    if (isRunning === true) {
      startTimer();
    }
  }, [currentSession]);

  useEffect(() => {
    if (currentSession === "longBreak") {
      setPomoCycle((prevCycle) => prevCycle + 1);
    } else if (pomoCycle === sessionConfig.numberOfCycles) {
      resetTimer();
    }
  }, [currentSession]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            stopTimer();
            handleSessionEnd();
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setCurrentSession("focus");
    setSessionCount(0);
    setPomoCycle(0);
    setTimer(sessionConfig.focus.duration);
  };

  const handleSessionEnd = () => {
    if (currentSession === "focus") {
      if (sessionCount < sessionConfig.sessionBeforeLongBreak - 1) {
        console.log("shortBreak");
        setCurrentSession("shortBreak");
        setSessionCount((prevCount) => prevCount + 1);
        setTimer(sessionConfig.shortBreak.duration);
      } else {
        setCurrentSession("longBreak");
        setSessionCount(0);
        setTimer(sessionConfig.longBreak.duration);
      }
    } else if (currentSession === "shortBreak" || currentSession === "longBreak") {
      setCurrentSession("focus");
      setTimer(sessionConfig.focus.duration);
    }
  };

  const setSettings = (config: SessionConfig) => {
    setSessionConfig(config);
    setIsModalOpen(!isModalOpen);
    resetTimer();
    localStorage.setItem("sessionConfig", JSON.stringify(config));
  };

  return (
    <div className="h-full font-barlow-condensed overflow-hidden relative">
      <Navbar />
      <div className="flex justify-center flex-col gap-20 items-center">
        <Milky2 className="absolute bottom-10 opacity-25 w-[150px] h-[150px] lg:w-[150px] lg:h-[150px]  right-10 fill-dimmed hidden md:block" />
        <Milky className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] fill-dimmed  hidden md:block -top-20 -right-20" />
        <Stars2 className="absolute opacity-25 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] fill-dimmed hidden md:block bottom-20 left-20" />

        <div className="flex flex-col items-center relative">
          <Rocket className="absolute hidden md:block w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] top-0 fill-dimmed left-0" />
          <div className="py-1 px-3 m-3 w-2/4 md:w-32 flex items-center justify-center uppercase text-center bg-tertiary text-secondary rounded-full">
            {sessionConfig[currentSession].label}
          </div>
          <Time time={timer} />
          <div className="py-1 px-2  w-1/4 md:w-14 flex items-center justify-center uppercase text-sm text-center font-bold bg-secondary text-tertiary rounded-full">
            {pomoCycle}/{sessionConfig.numberOfCycles}
          </div>
        </div>
        <div className="flex gap-10">
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>
            <Settings width={25} height={25} className="stroke-tertiary fill-tertiary" />
          </Button>
          <Button onClick={intervalRef.current === null ? startTimer : stopTimer}>
            {intervalRef.current === null ? (
              <Play width={25} height={25} className="stroke-tertiary fill-tertiary" />
            ) : (
              <Pause width={25} height={25} className="stroke-tertiary fill-tertiary" />
            )}
          </Button>
          <Button
            onClick={() => {
              handleSessionEnd();
            }}
          >
            <Forward width={25} height={25} className="stroke-tertiary fill-tertiary" />
          </Button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        config={sessionConfig}
        onClose={() => setIsModalOpen(!isModalOpen)}
        onSave={setSettings}
      />
    </div>
  );
};

export default Pomo;

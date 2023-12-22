import React, { useState, useEffect, useRef } from "react";
import { SessionConfig } from "@/utils/types";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  config: SessionConfig;
  onSave: (config: SessionConfig) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, config, onSave }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  const handleOnClose = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleOnClose();
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const focusDuration = parseInt((document.getElementById("focusDuration") as HTMLInputElement)?.value) * 60;
    const shortBreakDuration =
      parseInt((document.getElementById("shortBreakDuration") as HTMLInputElement)?.value) * 60;
    const longBreakDuration = parseInt((document.getElementById("longBreakDuration") as HTMLInputElement)?.value) * 60;
    const sessionsBeforeLongBreak = parseInt(
      (document.getElementById("sessionsBeforeLongBreak") as HTMLInputElement)?.value
    );
    const numberOfSessions = parseInt((document.getElementById("numberOfSessions") as HTMLInputElement)?.value);
    const numberOfCycles = parseInt((document.getElementById("numberOfCycles") as HTMLInputElement)?.value);

    const newSessionSettings = {
      focus: {
        label: "Focus Session",
        duration: focusDuration,
      },
      shortBreak: {
        label: "Short Break",
        duration: shortBreakDuration,
      },
      longBreak: {
        label: "Long Break",
        duration: longBreakDuration,
      },
      sessionBeforeLongBreak: sessionsBeforeLongBreak,
      numberOfSessions: numberOfSessions,
      numberOfCycles: numberOfCycles,
    };

    onSave(newSessionSettings);
  };

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className=" rounded-md bg-tertiary text-secondary py-10 relative">
      <button onClick={handleOnClose} className="absolute top-5 right-5">
        Close
      </button>
      <div className="px-8 ">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="focusDuration" className="font-medium">
              Focus Session Duration (minutes)
            </label>
            <input
              id="focusDuration"
              type="number"
              defaultValue={config.focus.duration / 60}
              className="border bg-tertiary rounded-md py-1 px-2"
              min="5"
              max="300"
              step="5"
            />
            <small className="text-secondary opacity-80">
              Enter a value between 5 and 300 minutes (increments of 5).
            </small>
          </div>
          <div className="md:flex-row flex flex-col gap-5">
            <div className="flex flex-col md:w-1/2">
              <label htmlFor="shortBreakDuration" className="font-medium">
                Short Break Duration (minutes)
              </label>
              <input
                id="shortBreakDuration"
                type="number"
                defaultValue={config.shortBreak.duration / 60}
                className="border bg-tertiary rounded-md py-1 px-2"
                min="1"
                max="30"
                step="1"
              />
              <small className="text-secondary opacity-80">Enter a value between 1 and 30 minutes.</small>
            </div>

            <div className="flex md:w-1/2 flex-col">
              <label htmlFor="longBreakDuration" className="font-medium">
                Long Break Duration (minutes)
              </label>
              <input
                id="longBreakDuration"
                type="number"
                defaultValue={config.longBreak.duration / 60}
                className="border bg-tertiary rounded-md py-1 px-2"
                min="5"
                max="120"
                step="5"
              />
              <small className="text-secondary opacity-80">Enter a value between 5 and 120 minutes.</small>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="sessionsBeforeLongBreak" className="font-medium">
              Sessions Before Long Break
            </label>
            <input
              id="sessionsBeforeLongBreak"
              type="number"
              defaultValue={config.sessionBeforeLongBreak}
              className="border bg-tertiary rounded-md py-1 px-2"
              min="1"
              max="5"
              step="1"
            />
            <small className="text-secondary opacity-80">Enter a value between 1 and 5 sessions.</small>
          </div>
          <div className="flex flex-col">
            <label htmlFor="numberOfSessions" className="font-medium">
              Number of Sessions (per cycles)
            </label>
            <input
              id="numberOfSessions"
              type="number"
              defaultValue={config.numberOfSessions}
              className="border bg-tertiary rounded-md py-1 px-2"
              min="1"
              max="10"
              step="1"
            />
            <small className="text-secondary opacity-80">Enter a value between 1 and 10 sessions.</small>
          </div>
          <div className="flex flex-col">
            <label htmlFor="numberOfCycles" className="font-medium">
              Number of Cycles
            </label>
            <input
              id="numberOfCycles"
              type="number"
              defaultValue={config.numberOfCycles}
              className="border bg-tertiary rounded-md py-1 px-2"
              min="1"
              max="4"
              step="1"
            />
            <small className="text-secondary opacity-80">Enter a value between 1 and 4 cycles.</small>
          </div>
          <button
            type="submit"
            onClick={handleSave}
            className="bg-primary hover:bg-secondary text-tertiary font-bold w-full py-2 px-4 rounded"
          >
            Save Settings
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;

import React, { useState } from "react";
import { tw } from "twind";
import { wsend } from "../../createWebsocket";
import { Button } from "./Button";
import { Input } from "./Input";
import { Modal } from "./Modal";

interface CreateRoomModalProps {
  onRequestClose: () => void;
}

export const CreateRoomModal: React.FC<CreateRoomModalProps> = ({
  onRequestClose,
}) => {
  const [name, setName] = useState("");
  const [privacy, setPrivacy] = useState("public");
  return (
    <Modal isOpen onRequestClose={onRequestClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (name) {
            onRequestClose();
            wsend({
              op: "create-room",
              d: { roomName: name, value: privacy },
            });
          }
        }}
      >
        <Input
          maxLength={255}
          placeholder="room name"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className={tw`flex mt-8 items-center`}>
          <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
            <option
              value="public"
              className={tw`bg-gray-600`}
            >
              public
            </option>
            <option
              value="private"
              className={tw`bg-gray-600`}
            >
              private
            </option>
          </select>
        </div>
        <div className={tw`flex mt-12`}>
          <Button
            type="button"
            onClick={onRequestClose}
            className={tw`mr-0.5`}
            color="secondary"
          >
            cancel
          </Button>
          <Button type="submit" className={tw`ml-0.5`}>
            ok
          </Button>
        </div>
      </form>
    </Modal>
  );
};

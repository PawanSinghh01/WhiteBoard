import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { socket } from "@/common/lib/socket";
import { useModal } from "@/common/recoil/modal";
import { useSetRoomId } from "@/common/recoil/room";
import NotFoundModal from "../modals/NotFound";

const Home = () => {
  const { openModal } = useModal();
  const setAtomRoomId = useSetRoomId();
  const router = useRouter();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  useEffect(() => {
    socket.on("created", (roomIdFromServer) => {
      setAtomRoomId(roomIdFromServer);
      router.push(roomIdFromServer);
      setLoading(false);
    });

    const handleJoinedRoom = (roomIdFromServer: string, failed?: boolean) => {
      if (!failed) {
        setAtomRoomId(roomIdFromServer);
        router.push(roomIdFromServer);
      } else {
        openModal(<NotFoundModal id={roomId} />);
      }
      setLoading(false);
    };

    socket.on("joined", handleJoinedRoom);

    return () => {
      socket.off("created");
      socket.off("joined", handleJoinedRoom);
    };
  }, [openModal, roomId, router, setAtomRoomId]);

  useEffect(() => {
    socket.emit("leave_room");
    setAtomRoomId("");
  }, [setAtomRoomId]);

  const handleCreateRoom = () => {
    if (!username.trim()) return;
    setLoading(true);
    socket.emit("create_room", username.trim());
  };

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username.trim() || !roomId.trim()) return;
    setLoading(true);
    socket.emit("join_room", roomId.trim(), username.trim());
  };

  return (
    <div className="flex flex-col items-center py-24">
      <h1 className="text-5xl font-extrabold leading-tight sm:text-extra text-purple-700">
        ThinkPad
      </h1>
      <h3 className="text-xl sm:text-2xl text-gray-600">Real-time whiteboard</h3>

      <div className="mt-10 flex flex-col gap-2 w-96">
        <label className="font-semibold text-gray-800">Your Name</label>
        <input
          className="input"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value.slice(0, 15))}
          disabled={loading}
        />
        <span className="text-xs text-gray-400">Max 15 characters</span>
      </div>

      <div className="my-8 h-px w-96 bg-zinc-200" />

      <form onSubmit={handleJoinRoom} className="flex flex-col gap-3 w-96">
        <label className="font-semibold text-gray-800">Room ID</label>
        <input
          className="input"
          placeholder="Enter room ID to join"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          disabled={loading}
        />
        <button
          className="btn"
          type="submit"
          disabled={!roomId || !username || loading}
        >
          {loading ? "Joining..." : "Join Room"}
        </button>
      </form>

      <div className="my-8 flex w-96 items-center gap-2">
        <div className="h-px w-full bg-zinc-200" />
        <p className="text-zinc-400">or</p>
        <div className="h-px w-full bg-zinc-200" />
      </div>

      <div className="flex flex-col items-center gap-2 w-96">
        <label className="font-semibold text-gray-800">Create a New Room</label>
        <button
          className="btn"
          onClick={handleCreateRoom}
          disabled={!username || loading}
        >
          {loading ? "Creating..." : "Create Room"}
        </button>
      </div>
    </div>
  );
};

export default Home;

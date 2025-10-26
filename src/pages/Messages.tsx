import { useState } from "react";
import { ConversationList } from "@/components/messages/ConversationList";
import { ChatArea } from "@/components/messages/ChatArea";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isOnline?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isOutgoing: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Damilare Jane",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/8800a568a7be132ec3059f349e39e1a0c406af48?width=72",
    lastMessage: "Hello, I have issues with my confir..",
    time: "12:24 AM",
    unreadCount: 8,
  },
  {
    id: "2",
    name: "Sandra Day",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/eefe901f1732a34c7011bf27024e4bce5647a700?width=72",
    lastMessage: "Hello, I have issues with my confir..",
    time: "10:50 AM",
    unreadCount: 5,
  },
  {
    id: "3",
    name: "Elizabeth Sandra",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/016d75d3cf1488925039cc67f3bc700ff1e5ed04?width=72",
    lastMessage: "I want to complain about an order",
    time: "Yesterday",
  },
  {
    id: "4",
    name: "Thompson Smith",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/fa22e6999289787f5d5cc2833fcf0acab2842227?width=72",
    lastMessage: "Hello, I have issues with my confir..",
    time: "09:54 AM",
  },
  {
    id: "5",
    name: "Jonathan Smith",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/36e7707f3cc9c6fcc738dbff5c2d9b5578fa90f7?width=72",
    lastMessage: "I want to complain about an order",
    time: "Yesterday",
  },
  {
    id: "6",
    name: "Lawrence King",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/3a8cc9c75bf17f53c151468b8006700b9606a081?width=72",
    lastMessage: "I want to complain about an order",
    time: "Yesterday",
  },
];

const mockMessages: Record<string, Message[]> = {
  "2": [
    {
      id: "1",
      senderId: "2",
      text: "Hi, What is the update for my order return, I am yet get a feedback",
      timestamp: "12:24 AM",
      isOutgoing: false,
    },
    {
      id: "2",
      senderId: "admin",
      text: "Hi Sandra, please hold on. working on it",
      timestamp: "12:31 AM",
      isOutgoing: true,
    },
    {
      id: "3",
      senderId: "2",
      text: "Alright. I will be witing while you confirm. I need to use it for reviews",
      timestamp: "12:35 AM",
      isOutgoing: false,
    },
    {
      id: "4",
      senderId: "admin",
      text: "Thank you for twaiting, the rder has been checked and there has been a delay from the delivery guy that is handling the order.",
      timestamp: "12:45 AM",
      isOutgoing: true,
    },
    {
      id: "5",
      senderId: "admin",
      text: "Thank you for twaiting, the rder has been checked and there has been a delay from the delivery guy that is handling the order.",
      timestamp: "12:45 AM",
      isOutgoing: true,
    },
  ],
};

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<string>("2");
  const [searchQuery, setSearchQuery] = useState("");
  const [showChat, setShowChat] = useState(false);

  const filteredConversations = mockConversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const currentConversation = mockConversations.find(
    (conv) => conv.id === selectedConversation,
  );

  const currentMessages = mockMessages[selectedConversation] || [];

  const handleSelectConversation = (id: string) => {
    setSelectedConversation(id);
    setShowChat(true);
  };

  const handleBackToList = () => {
    setShowChat(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[1143px] p-2 sm:p-4 md:p-8 bg-white rounded-2xl shadow-sm">
        <div className="w-full h-[600px] sm:h-[700px] md:h-[740px] relative">
          <div className="w-full h-full rounded-md bg-white overflow-hidden">
            <div className="flex h-full relative">
              <div
                className={`${showChat ? "hidden md:block" : "block"} w-full md:w-auto`}
              >
                <ConversationList
                  conversations={filteredConversations}
                  selectedId={selectedConversation}
                  onSelect={handleSelectConversation}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              </div>

              <div className="hidden md:block w-px h-full bg-[#E6E9F4]" />

              <div
                className={`${showChat ? "block" : "hidden md:block"} w-full md:flex-1`}
              >
                <ChatArea
                  conversation={currentConversation}
                  messages={currentMessages}
                  onBack={handleBackToList}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

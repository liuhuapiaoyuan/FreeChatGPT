import React from 'react';
import useStore from '@store/store';
import { generateDefaultChat } from '@constants/chat';
import { ChatInterface } from '@type/chat';

// 添加一个新话题，需要提示
const useAddChat = () => {
  const setChats = useStore((state) => state.setChats);
  const setPending = useStore((state) => state.setPending);
  const setCurrentChatIndex = useStore((state) => state.setCurrentChatIndex);

  const addChat = () => {
    const chats = useStore.getState().chats;
    if (chats) {
      const updatedChats: ChatInterface[] = JSON.parse(JSON.stringify(chats));
      let titleIndex = 1;
      let title = `新话题 ${titleIndex}`;

      while (chats.some((chat) => chat.title === title)) {
        titleIndex += 1;
        title = `新话题 ${titleIndex}`;
      }

      updatedChats.unshift(generateDefaultChat(title));
      setChats(updatedChats);
      setCurrentChatIndex(0);
      setPending(false);
    }
  };

  return addChat;
};

export default useAddChat;

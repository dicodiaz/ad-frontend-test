import { useEffect, useState } from 'react';

export const useLiveAnnounce = () => {
  const [announcedMessage, setAnnouncedMessage] = useState('');

  useEffect(() => {
    let target: HTMLElement;

    if (announcedMessage) {
      target = createAnnouncedElement();
      setTimeout(() => target.append(announcedMessage), 100);
    }

    return () => target?.remove();
  }, [announcedMessage]);

  return {
    liveAnnounce: (message: string) => {
      setAnnouncedMessage(message);
    },
  };
};

const createAnnouncedElement = () => {
  const el = document.createElement('div');

  el.style.position = 'absolute';
  el.style.width = '1px';
  el.style.height = '1px';
  el.style.overflow = 'hidden';
  el.style.clipPath = ' inset(100%)';
  el.style.whiteSpace = ' nowrap';
  el.style.top = '0';
  el.setAttribute('role', 'status');
  el.setAttribute('aria-atomic', 'true');
  el.setAttribute('aria-live', 'assertive');

  document.body.appendChild(el);

  return el;
};

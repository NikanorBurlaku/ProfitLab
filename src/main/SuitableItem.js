import React, { useState, useEffect, useRef } from 'react';

const SuitableItem = ({ imgSrc, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const onVisibilityChange = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(onVisibilityChange, {
      threshold: 0.1, // Настраиваем порог видимости
    });

    observer.observe(itemRef.current);

    return () => {
      observer.unobserve(itemRef.current);
    };
  }, []);

  return (
    <div className={`suitable__item ${isVisible ? 'visible' : ''}`} ref={itemRef}>
      <img src={imgSrc} alt="" style={{ transitionDelay: `${delay}ms` }} />
      <p className="suitable__descr" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default SuitableItem;

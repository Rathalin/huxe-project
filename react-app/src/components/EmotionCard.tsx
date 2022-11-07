import React, { PropsWithChildren } from 'react';

// export const emotionIcons = {
//   'sadness': <div>sadness</div>,
//   'fear': <div>fear</div>,
//   'anger': <div>anger</div>,
//   'disgust': <div>disgust</div>,
//   'enjoyment': <div>enjoyment</div>,
// };

type EmotionCardProps = {
  emotion: string,
}


// function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
//   return key in obj
// }

// export const EmotionCard = ({ emotionType, good = false }: PropsWithChildren<EmotionCardProps>) => {
//   return (
//     <React.Fragment>
//       {
//         hasKey(emotionIcons, emotionType) ? emotionIcons[emotionType] : ""
//       }
//     </React.Fragment>
//   );
// };

export const EmotionCard = ({ emotion }: EmotionCardProps) => {
  return (
    <div>{emotion}</div>
  );
};

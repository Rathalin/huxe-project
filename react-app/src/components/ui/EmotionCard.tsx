type EmotionCardProps = {
  emotion: string,
}

export const EmotionCard = ({ emotion }: EmotionCardProps) => {
  return (
    <div>{emotion}</div>
  );
};

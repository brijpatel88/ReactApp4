// src/components/VoteButton.tsx
// This reusable button is used for upvote and downvote actions.

type VoteButtonProps = {
  label: string;
  onClick: () => void;
  variant: "up" | "down";
};

export default function VoteButton({
  label,
  onClick,
  variant,
}: VoteButtonProps) {
  return (
    <button className={`vote-btn ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}
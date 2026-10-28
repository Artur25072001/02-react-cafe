import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (voteType: "good" | "neutral" | "bad") => void;
  canReset: boolean;
  onReset: () => void;
}

function VoteOptions({ onVote, canReset, onReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>

      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;

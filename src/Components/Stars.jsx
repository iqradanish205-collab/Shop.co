function Stars({ rating = 5 }) {

  return (
    <div
      className="text-xs tracking-[3px] text-yellow-500"
      aria-label={`${rating} stars`}
    >
      ★★★★★
    </div>
  );
}

export default Stars;
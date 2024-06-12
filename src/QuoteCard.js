let QuoteCard = ({ quote, author }) => {
  return (
    <div>
      <h3>{quote}</h3>
      <p>{author}</p>
    </div>
  );
};

export default QuoteCard;
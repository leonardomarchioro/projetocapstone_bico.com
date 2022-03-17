const Button = ({ text, ...rest }) => {
  return (
    <section>
      <button {...rest}>{text}</button>
    </section>
  );
};
export default Button;

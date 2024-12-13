function Button({HandleOnclick}) {
  return (
    <>
      <button type="submit" className="btn btn-primary" onClick={HandleOnclick}>Get BMI</button>
    </>
  );
}
export default Button;

function FormRow({ label, error, children }) {
  return (
    <div className="mb-8 w-full">
      <label
        htmlFor={children.props.id}
        className="block text-base font-light text-slate-400"
      >
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default FormRow;

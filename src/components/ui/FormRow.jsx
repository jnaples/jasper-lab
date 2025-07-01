function FormRow({ label, error, children }) {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={children.props.id}
        className="block text-base font-medium"
      >
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default FormRow;

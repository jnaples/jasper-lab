function FormRow({ label, error, children }) {
  return (
    <div className="mb-8">
      <label
        htmlFor={children.props.id}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default FormRow;

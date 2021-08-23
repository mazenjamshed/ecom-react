import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherprops }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherprops} />
      <label htmlFor='email' className='form-input-label'>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
    </div>
  );
};

export default FormInput;

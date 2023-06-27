import isEmail from 'validator/lib/isEmail';

export interface FormValidationErrors {
  email?: string;
  phoneNumber?: string;
  fullName?: string;
  address?: string;
  addresses?: string[];
}

export default (
  email: string,
  phoneNumber: string,
  fullName: string,
  addresses: { address: string; longitude: number; latitude: number }[]
): FormValidationErrors => {
  const errors: FormValidationErrors = {};

  // Validate email
  if (!isEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate phone number
  if (phoneNumber.length !== 11) {
    errors.phoneNumber = 'Phone number must be 11 digits';
  }

  if (!/^[0-9]+$/.test(phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid phone number'
  }

  // Validate full name
  const nameWords = fullName.trim().split(' ');
  if (nameWords.length < 2) {
    errors.fullName = 'Full name should be more two words';
  }

  // Validate addresses
  const addressErrors: string[] = [];
  addresses.forEach((address, index) => {
    if (address.address.trim() === '') {
      addressErrors[index] = 'Address is required';
    }
  });

  if (addressErrors.length > 0) {
    errors.addresses = addressErrors;
  }

  return errors;
};

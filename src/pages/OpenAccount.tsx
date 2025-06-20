import React, { useState } from 'react';
import { Check, Upload, Shield, AlertCircle } from 'lucide-react';

const OpenAccount: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    ssn: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Account Information
    accountType: 'checking',
    initialDeposit: '',
    
    // Employment Information
    employmentStatus: '',
    employer: '',
    income: '',
    
    // Documents
    idDocument: null as File | null,
    proofOfAddress: null as File | null,
    
    // Terms
    agreeToTerms: false,
    agreeToPrivacy: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const steps = [
    { number: 1, title: 'Personal Information', description: 'Basic details about you' },
    { number: 2, title: 'Address & Contact', description: 'Your address and contact information' },
    { number: 3, title: 'Account Selection', description: 'Choose your account type' },
    { number: 4, title: 'Employment Details', description: 'Your employment information' },
    { number: 5, title: 'Document Upload', description: 'Upload required documents' },
    { number: 6, title: 'Review & Submit', description: 'Review and submit your application' }
  ];

  const accountTypes = [
    {
      type: 'checking',
      name: 'Free Checking',
      description: 'No monthly fees, unlimited transactions, free online banking',
      benefits: ['No monthly maintenance fee', 'Free online & mobile banking', 'Unlimited check writing', 'Free debit card']
    },
    {
      type: 'savings',
      name: 'High-Yield Savings',
      description: 'Earn competitive interest on your savings',
      benefits: ['2.5% APY', 'No minimum balance', 'Free transfers', 'FDIC insured']
    },
    {
      type: 'premium',
      name: 'Premium Banking',
      description: 'Premium benefits and personalized service',
      benefits: ['Dedicated relationship manager', 'Premium debit card', 'Free checks', 'Priority customer service']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, [fieldName]: file }));
    }
  };

  const validateStep = (step: number) => {
    const newErrors: {[key: string]: string} = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.ssn.trim()) newErrors.ssn = 'SSN is required';
        break;
      case 2:
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
        break;
      case 3:
        if (!formData.initialDeposit || parseFloat(formData.initialDeposit) < 25) {
          newErrors.initialDeposit = 'Minimum initial deposit is $25';
        }
        break;
      case 4:
        if (!formData.employmentStatus) newErrors.employmentStatus = 'Employment status is required';
        if (formData.employmentStatus === 'employed' && !formData.employer.trim()) {
          newErrors.employer = 'Employer is required';
        }
        if (!formData.income.trim()) newErrors.income = 'Income information is required';
        break;
      case 5:
        if (!formData.idDocument) newErrors.idDocument = 'ID document is required';
        if (!formData.proofOfAddress) newErrors.proofOfAddress = 'Proof of address is required';
        break;
      case 6:
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        if (!formData.agreeToPrivacy) newErrors.agreeToPrivacy = 'You must agree to the privacy policy';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log('Account application submitted:', formData);
      alert('Account application submitted successfully! You will receive a confirmation email shortly.');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.firstName ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.lastName ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.phone ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.dateOfBirth ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Social Security Number</label>
                <input
                  type="password"
                  name="ssn"
                  value={formData.ssn}
                  onChange={handleInputChange}
                  placeholder="XXX-XX-XXXX"
                  className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.ssn ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.ssn && <p className="mt-1 text-sm text-red-600">{errors.ssn}</p>}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Address & Contact Information</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.address ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.city ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.state ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select State</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                    {/* Add more states as needed */}
                  </select>
                  {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.zipCode ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Account Selection</h3>
            <div className="space-y-4">
              {accountTypes.map((account) => (
                <div
                  key={account.type}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    formData.accountType === account.type
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-300'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, accountType: account.type }))}
                >
                  <div className="flex items-start">
                    <input
                      type="radio"
                      name="accountType"
                      value={account.type}
                      checked={formData.accountType === account.type}
                      onChange={handleInputChange}
                      className="mt-1 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="ml-3 flex-1">
                      <h4 className="text-lg font-medium text-gray-900">{account.name}</h4>
                      <p className="text-gray-600 mb-2">{account.description}</p>
                      <ul className="space-y-1">
                        {account.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Initial Deposit Amount</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="initialDeposit"
                  value={formData.initialDeposit}
                  onChange={handleInputChange}
                  min="25"
                  step="0.01"
                  className={`pl-7 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.initialDeposit ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="25.00"
                />
              </div>
              {errors.initialDeposit && <p className="mt-1 text-sm text-red-600">{errors.initialDeposit}</p>}
              <p className="mt-1 text-sm text-gray-500">Minimum initial deposit: $25</p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Employment Information</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Employment Status</label>
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.employmentStatus ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Employment Status</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="retired">Retired</option>
                  <option value="student">Student</option>
                </select>
                {errors.employmentStatus && <p className="mt-1 text-sm text-red-600">{errors.employmentStatus}</p>}
              </div>
              
              {(formData.employmentStatus === 'employed' || formData.employmentStatus === 'self-employed') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {formData.employmentStatus === 'employed' ? 'Employer Name' : 'Business Name'}
                  </label>
                  <input
                    type="text"
                    name="employer"
                    value={formData.employer}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.employer ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.employer && <p className="mt-1 text-sm text-red-600">{errors.employer}</p>}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Annual Income</label>
                <select
                  name="income"
                  value={formData.income}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.income ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Income Range</option>
                  <option value="under-25k">Under $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-75k">$50,000 - $75,000</option>
                  <option value="75k-100k">$75,000 - $100,000</option>
                  <option value="100k-150k">$100,000 - $150,000</option>
                  <option value="over-150k">Over $150,000</option>
                </select>
                {errors.income && <p className="mt-1 text-sm text-red-600">{errors.income}</p>}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Document Upload</h3>
            <p className="text-gray-600">Please upload the following required documents:</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Government-issued ID (Driver's License, Passport, etc.)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <label htmlFor="idDocument" className="cursor-pointer">
                      <span className="mt-2 block text-sm font-medium text-gray-900">
                        {formData.idDocument ? formData.idDocument.name : 'Click to upload ID document'}
                      </span>
                      <input
                        id="idDocument"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload(e, 'idDocument')}
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                </div>
                {errors.idDocument && <p className="mt-1 text-sm text-red-600">{errors.idDocument}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Proof of Address (Utility Bill, Bank Statement, etc.)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <label htmlFor="proofOfAddress" className="cursor-pointer">
                      <span className="mt-2 block text-sm font-medium text-gray-900">
                        {formData.proofOfAddress ? formData.proofOfAddress.name : 'Click to upload proof of address'}
                      </span>
                      <input
                        id="proofOfAddress"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload(e, 'proofOfAddress')}
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                </div>
                {errors.proofOfAddress && <p className="mt-1 text-sm text-red-600">{errors.proofOfAddress}</p>}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-blue-400" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Document Requirements</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Documents must be clear and legible</li>
                      <li>All four corners of the document must be visible</li>
                      <li>Documents must be current and not expired</li>
                      <li>Proof of address must be dated within the last 3 months</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Review & Submit</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Personal Information</h4>
                <p className="text-sm text-gray-600">
                  {formData.firstName} {formData.lastName} • {formData.email} • {formData.phone}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900">Address</h4>
                <p className="text-sm text-gray-600">
                  {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900">Account Type</h4>
                <p className="text-sm text-gray-600">
                  {accountTypes.find(a => a.type === formData.accountType)?.name} • Initial Deposit: ${formData.initialDeposit}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900">Employment</h4>
                <p className="text-sm text-gray-600">
                  {formData.employmentStatus} {formData.employer && `at ${formData.employer}`} • Income: {formData.income}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Documents</h4>
                <p className="text-sm text-gray-600">
                  ID: {formData.idDocument?.name} • Address Proof: {formData.proofOfAddress?.name}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-900">
                  I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms and Conditions</a>
                </label>
              </div>
              {errors.agreeToTerms && <p className="text-sm text-red-600">{errors.agreeToTerms}</p>}

              <div className="flex items-start">
                <input
                  id="agreeToPrivacy"
                  name="agreeToPrivacy"
                  type="checkbox"
                  checked={formData.agreeToPrivacy}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="agreeToPrivacy" className="ml-2 text-sm text-gray-900">
                  I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                </label>
              </div>
              {errors.agreeToPrivacy && <p className="text-sm text-red-600">{errors.agreeToPrivacy}</p>}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="flex">
                <Shield className="h-5 w-5 text-blue-400" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Security & Privacy</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Your information is protected with bank-level security. We will never share your personal information with unauthorized parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Open Your Account</h1>
          <p className="mt-2 text-gray-600">Join SecureBank and start your financial journey with us</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  step.number < currentStep
                    ? 'bg-blue-600 text-white'
                    : step.number === currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {step.number < currentStep ? <Check className="w-5 h-5" /> : step.number}
                </div>
                {step.number < steps.length && (
                  <div className={`hidden md:block w-16 h-1 ml-2 ${
                    step.number < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm font-medium text-gray-900">{steps[currentStep - 1].title}</p>
            <p className="text-xs text-gray-500">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 border border-gray-300 rounded-md text-sm font-medium ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-50'
              } transition-colors duration-200`}
            >
              Previous
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
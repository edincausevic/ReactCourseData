<div className="bg-gray-100 min-h-screen">
  <div className="container mx-auto px-4 py-8 max-w-4xl">
    {/* Header */}
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">Join Our Team</h1>
      <p className="text-gray-600">We're excited you're considering a career with us. Please fill out this form to apply.</p>
      <div className="mt-4 flex justify-center">
        <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
      </div>
    </div>
    
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 md:p-8">
    {/* Form Container */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type="text" id="firstName" name="firstName" required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-red-500 hidden" id="firstNameError">
                <i className="fas fa-exclamation-circle"></i>
              </div>
            </div>
            <p className="mt-1 text-xs text-red-600 hidden" id="firstNameErrorMessage">First name is required</p>
          </div>
          
          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type="text" id="lastName" name="lastName" required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Doe" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-red-500 hidden" id="lastNameError">
                <i className="fas fa-exclamation-circle"></i>
              </div>
            </div>
            <p className="mt-1 text-xs text-red-600 hidden" id="lastNameErrorMessage">Last name is required</p>
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type="email" id="email" name="email" required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john.doe@example.com" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-red-500 hidden" id="emailError">
                <i className="fas fa-exclamation-circle"></i>
              </div>
            </div>
            <p className="mt-1 text-xs text-red-600 hidden" id="emailErrorMessage">Please enter a valid email</p>
          </div>
          
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="relative">
              <input type="tel" id="phone" name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(123) 456-7890" />
            </div>
          </div>
        </div>
      
        <div className="mb-6">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender <span className="text-red-500">*</span></label>
          <select id="gender" name="gender"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option value="female">Female</option>
              <option value="male">Male</option>
          </select>
        </div>
        
        {/* Position Applying For */}
        <div className="mb-6">
          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position Applying For <span className="text-red-500">*</span></label>
          <select id="position" name="position" required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select a position</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full Stack Developer</option>
              <option value="designer">UI/UX Designer</option>
              <option value="pm">Product Manager</option>
              <option value="marketing">Marketing Specialist</option>
          </select>
        </div>
        

        {/* Years of Experience */}
        <div className="mb-6">
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Years of Relevant Experience</label>
          <select id="experience" name="experience"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select years</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
          </select>
        </div>
        
        {/* Availability */}
        <div className="mb-6">
          <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">When can you start?</label>
          <div className="relative">
            <input type="date" id="availability" name="availability"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
        
        {/* Work Authorization */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Are you legally authorized to work in the country you're applying for? <span className="text-red-500">*</span></label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input type="radio" id="authYes" name="workAuthorization" value="yes" className="h-4 w-4 text-blue-600 focus:ring-blue-500" required />
              <label htmlFor="authYes" className="ml-2 block text-sm text-gray-700">Yes</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="authNo" name="workAuthorization" value="no" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="authNo" className="ml-2 block text-sm text-gray-700">No</label>
            </div>
          </div>
        </div>
        
        {/* Willing to Relocate */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Are you willing to relocate?</label>
          <div className="flex items-center">
            <input type="checkbox" id="relocate" name="relocate" className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded" />
            <label htmlFor="relocate" className="ml-2 block text-sm text-gray-700">Yes, I'm open to relocation</label>
          </div>
        </div>
    
        {/* Cover Letter */}
        <div className="mb-6">
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
          <textarea id="coverLetter" name="coverLetter" rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us why you're a great fit for this position..."></textarea>
        </div>
        
       
        {/* Salary Expectations */}
        <div className="mb-6">
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">Salary Expectations (USD)</label>
          <div className="flex items-center gap-4">
            <input type="range" id="salary" name="salary" min="30000" max="200000" step="5000" value="75000"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            <span id="salaryValue" className="text-sm font-medium text-gray-700">$75,000</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$30k</span>
            <span>$200k</span>
          </div>
        </div>

        {/* How did you hear about us? */}
        <div className="mb-6">
          <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
          <select id="referral" name="referral"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select an option</option>
              <option value="linkedin">LinkedIn</option>
              <option value="job-board">Job Board</option>
              <option value="referral">Employee Referral</option>
              <option value="event">Career Fair/Event</option>
              <option value="social">Social Media</option>
              <option value="other">Other</option>
          </select>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-8">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" name="terms" type="checkbox" required className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a> <span className="text-red-500">*</span></label>
              <p className="text-gray-500">By submitting this application, you consent to our processing of your personal data.</p>
            </div>
          </div>
        </div>
        
        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <button type="button" className="px-6 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Save as Draft
          </button>
          <div className="flex flex-col sm:flex-row gap-4">
            <button type="reset" className="px-6 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Reset Form
            </button>
            <button type="submit" className="px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition-all duration-200 transform hover:scale-105">
              Submit Application
              <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
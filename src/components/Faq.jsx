import React from 'react';


const Faq = () => {
  return (
<section
    id="faq"
    className="text-gray-800 py-32 min-h-screen relative">

    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
      <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">Frequently Asked Questions</h2>
      <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 relative z-10">

        <details className="py-2">
          <summary className="outline-none cursor-pointer text-[1.3rem]">What is required to rent a car?</summary>
          <div className="px-4 pb-4">
            <p className="w-full sm:w-[90%]">To rent a car, you need a valid driver's license, a credit or debit card, and proof of insurance. Additional identification may be required for certain rental locations.</p>
          </div>
        </details>

        <details className="py-2">
          <summary className="outline-none cursor-pointer text-[1.3rem]">What is the minimum age to rent a car?</summary>
          <div className="px-4 pb-4">
            <p className="w-full sm:w-[90%]">The minimum age to rent a car is typically 21 years old. However, drivers under 25 may be subject to additional fees and restrictions.</p>
          </div>
        </details>

        <details className="py-2">
          <summary className="outline-none cursor-pointer text-[1.3rem]">Can I rent a car with a debit card?</summary>
          <div className="px-4 pb-4">
            <p className="w-full sm:w-[90%]">Yes, most rental locations accept debit cards. However, additional documentation and a credit check may be required, and some restrictions may apply.</p>
          </div>
        </details>

        <details className="py-2">
          <summary className="outline-none cursor-pointer text-[1.3rem]">Are there any mileage limits on rental cars?</summary>
          <div className="px-4 pb-4">
            <p className="w-full sm:w-[90%]">Most rental agreements come with unlimited mileage, but some may have restrictions. It's important to check your specific rental agreement for details on mileage limits.</p>
          </div>
        </details>

        <details className="py-2">
          <summary className="outline-none cursor-pointer text-[1.3rem]">What should I do if I get into an accident with the rental car?</summary>
          <div className="px-4 pb-4">
            <p className="w-full sm:w-[90%]">In case of an accident, ensure everyone's safety first and contact emergency services if needed. Then, inform the rental company and follow their instructions. They will guide you through the process of reporting the accident and handling insurance claims.</p>
          </div>
        </details>

        <details className="py-2">
          <summary className="outline-none cursor-pointer text-[1.3rem]">Can I extend my rental period?</summary>
          <div className="px-4 pb-4">
            <p className="w-full sm:w-[90%]">Yes, you can extend your rental period, subject to vehicle availability. Contact the rental location as soon as possible to arrange an extension and confirm any additional charges.</p>
          </div>
        </details>

        <details className="py-2">
          <summary className="outline-none cursor-pointer text-[1.3rem]">Are there any additional fees I should be aware of?</summary>
          <div className="px-4 pb-4">
            <p className="w-full sm:w-[90%]">Additional fees may include charges for young drivers, additional drivers, fuel, GPS, car seats, and late returns. Be sure to review the rental agreement for a complete list of potential fees.</p>
          </div>
        </details>

      </div>
    </div>
  </section>
  
  )
}

export default Faq
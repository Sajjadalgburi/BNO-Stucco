const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-24 welcomeSection text-center">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-8">
          Please fill in the form so we can reach back to you!
        </p>
        <p className="mt-2"> Too lazy? call us at 416-836-6130</p>
      </div>

      <div className="userForm w-3/4 xl:w-2/4">
        <label className="input input-bordered flex items-center gap-2 mb-4">
          Name
          <input type="text" className="grow" placeholder="JaneDoe" />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          Email
          <input type="text" className="grow" placeholder="janeDoe@site.com" />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          Phone
          <input type="text" className="grow" placeholder="123-456-7890" />
        </label>

        {/* Adjusted the height of the textarea and made the width full */}
        <textarea
          className="h-48 w-full rounded p-2 mb-4"
          placeholder="Your Message"
        ></textarea>

        <button className="btn w-full">Submit!</button>
      </div>
    </div>
  );
};

export default Contact;

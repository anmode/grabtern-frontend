import React from "react";

function ContactDetails({formData, handleChange}) {
  return (
    <>
      <div>
        <label className="label" htmlFor="internAt">
          INTERN
        </label>
        <input
          type="text"
          name="internAt"
          className="mentorFormInput"
          onChange={(e) => handleChange(e)}
          placeholder="e.g. MITACS"
          required
          value={formData.internAt}
        />
      </div>
      <div>
        <label className="label" htmlFor="currentStatus">
          CURRENT STATUS
        </label>

        <input
          type="text"
          name="currentStatus"
          className="mentorFormInput"
          onChange={(e) => handleChange(e)}
          placeholder="e.g. Amazon SDE-I"
          required
          value={formData.currentStatus}
        />
      </div>
      <div>
        <label className="label" htmlFor="linkedin">
          LINKEDIN
        </label>

        <input
          type="text"
          name="linkedin"
          className="mentorFormInput"
          onChange={(e) => handleSocialChange(e)}
          placeholder="e.g. https://www.linkedin.com/peterparker"
          required
          value={formData.social.linkedin}
        />
      </div>
      <div>
        <label className="label" htmlFor="twitter">
          TWITTER
        </label>

        <input
          type="text"
          name="twitter"
          className="mentorFormInput"
          onChange={(e) => handleSocialChange(e)}
          placeholder="e.g. https://www.twitter.com/peterparker"
          value={formData.social.twitter}
        />
      </div>

    </>
  );
}

export default ContactDetails;

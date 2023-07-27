import Link from "next/link";

import SearchBrandInput from "./SearchBrandsInput";

const Form = ({ reviewLink, setReviewLink, submitting, handleSubmit }) => {
  const setReviewLinkFromSuggestion = (siteUrl, siteImage) => {
    setReviewLink({ ...reviewLink, siteUrl, siteImage });
  };

  return (
    <section className="w-full max-w-full flex-start flex-col px-4">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Create Review Links</span>
      </h1>
      <p className="desc text-left max-w-md">
        Generate clickable links for your customers to share their feedback on
        your review sites:
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Site Name
          </span>

          <SearchBrandInput
            setReviewLinkFromSuggestion={setReviewLinkFromSuggestion}
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your profile link
          </span>

          <input
            value={reviewLink.profileUrl}
            onChange={(e) =>
              setReviewLink({ ...reviewLink, profileUrl: e.target.value })
            }
            placeholder="Paste your profile URL"
            required
            className="form_input"
          />
        </label>

        <div className="flex items-center justify-end flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button type="submit" disabled={submitting} className="blue_btn">
            {submitting ? "Creating link..." : "Create"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

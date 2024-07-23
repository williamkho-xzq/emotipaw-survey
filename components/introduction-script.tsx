interface IntroductionScriptProps {
  onAgree: () => void;
}

const IntroductionScript: React.FC<IntroductionScriptProps> = ({ onAgree }) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        Welcome to our study on AI's ability to recognize pets' emotions and the
        level of trust users have in AI technology for their animals'
        well-being.
      </p>
      <p className="text-gray-700">In this study, you will:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          Use a website that utilizes AI to analyse pet emotions from their
          photos.
        </li>
        <li>
          Upload a photo of your pet and review the AI's emotional assessment.
        </li>
        <li>Share your thoughts and complete a brief questionnaire.</li>
      </ul>
      <p className="text-gray-700">
        We will be recording your interactions with the website and your
        responses. This study is not an assessment of your skills; we are
        specifically interested in your honest reactions and opinions.
      </p>
      <p className="text-gray-700">
        Participation is completely voluntary. You are free to leave the study
        at any point. However, if you choose to leave early, we will not be able
        to provide a full explanation of the study's objectives afterwards.
      </p>
      <p className="text-gray-700 font-semibold">
        Do you agree to participate and allow us to collect and analyse the data
        as outlined?
      </p>
      <button
        onClick={onAgree}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        I Agree to Participate
      </button>
    </div>
  );
};

export default IntroductionScript;
